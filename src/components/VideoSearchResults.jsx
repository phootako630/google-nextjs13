import React from 'react';
import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "@/components/PaginationButtons";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";

const VideoSearchResults = ({ results, searchTerm }) => {
    return (
        <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%]
        md:pl-[14%] lg:pl-52">
        <p className="text-gray-600 text-sm mb-5 mt-3">
            About {results.pageInfo.totalResults}{' '}
            results ({results.pageInfo.resultsPerPage} per page)
            for {' '}{searchTerm}
        </p>
        {results.items?.map((result) => (
            <div key={result.id.videoId} className="max-w-xl mb-8">
                <div className="group flex flex-col">
                    <Link className="text-sm truncate" href={`https://www.youtube.com/watch?v=${result.id.videoId}`}>
                        {`https://www.youtube.com/watch?v=${result.id.videoId}`}
                    </Link>
                    <Link className="group-hover:underline
                        decoration-blue-800 text-xl truncate
                        font-medium text-blue-800" href={`https://www.youtube.com/watch?v=${result.id.videoId}`}>
                        {result.snippet.title}
                    </Link>
                </div>
                <div className="my-2">
                    <CustomVideoPlayer
                        src={`https://www.youtube.com/embed/${result.id.videoId}`}
                        thumbnail={result.snippet.thumbnails.medium.url}
                        title={result.snippet.title}
                    />
                </div>
                <p className="text-gray-500">
                    {Parser(result.snippet.description)}
                </p>
            </div>
        ))}
            <PaginationButtons />
        </div>
    );
};
export default VideoSearchResults;