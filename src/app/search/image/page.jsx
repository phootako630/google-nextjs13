'use client';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResults";

const ImageSearchPage =  ({ searchParams }) => {
   // await new Promise((resolve) => setTimeout(resolve, 3000));
    const [results, setResults] = useState([]);
    const [start, setStart] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const observer = useRef();

    const lastResultElementRef = useCallback(
        (node) => {
            if (loading) return;

            if (observer.current) {
                observer.current.disconnect();
            } else {
                observer.current = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        setStart((prevStart) => prevStart + 10);
                    }
                });
            }

            if (node) observer.current.observe(node);
        },
        [loading]
    );
    useEffect(() => {
        setLoading(true);
        const fetchImages = async () => {
            const response = await fetch(
                `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${start}`
            );
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const data = await response.json();
            console.log(data);
            setResults((prevResults) => [...prevResults, ...data.items]);
            setHasMore(data.items.length > 0);
            setLoading(false);
        };

        fetchImages();
    }, [searchParams.searchTerm, start]);

   /* const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.
        env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`);
    if (!response.ok) {
        throw new Error('Error fetching data')
    }
    const data = await response.json();
    console.log(data)*/
    //const results = data.items;
    if (!results) {
        return (
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl mb-4">No results found</h1>
                <p className="text-lg">
                    Try to search with more specific keywords or go back to home page{" "}
                    <Link className="text-blue-600" href="/">Go back to home</Link>
                </p>
            </div>
        )
    }
    return (
        <>
            {results && (
                <ImageSearchResults lastResultElementRef={lastResultElementRef} results={{ items: results }} />
            )}
        </>

    )
};

export default ImageSearchPage;
