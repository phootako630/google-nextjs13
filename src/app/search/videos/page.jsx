import React from 'react';
import Link from "next/link";
import VideoSearchResults from "@/components/VideoSearchResults";

export default async function VideoSearchPage({ searchParams }) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const startIndex = searchParams.start || "1";
    const pageToken = searchParams.start || "";
    const searchTerm = searchParams.searchTerm;
    const maxResults = 10;
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchParams.searchTerm}&type=video&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&pageToken=${pageToken}`);
    if (!response.ok) {
        throw new Error('Error fetching data')
    }
    const data = await response.json();
    console.log(data)
    const results = data.items;
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
            {results && <VideoSearchResults searchTerm={searchTerm} results={data}/>}
        </>
    )
}