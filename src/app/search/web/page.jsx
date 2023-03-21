import Link from "next/link";
import WebSearchResults from "@/components/WebSearchResults";

export default async function WebSearchPage({searchParams}) {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.
        env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);
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
            {results && <WebSearchResults results={data}/>}
        </>

    )
}