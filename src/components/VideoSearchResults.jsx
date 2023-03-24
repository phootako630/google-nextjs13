import React from 'react';
import Link from "next/link";

const VideoSearchResults = ({ results }) => {
    return (
        <div className="pb-24 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
                {results.items?.map((result) => (
                    <div key={result.link} className="mb-8">
                        <div className="group flex flex-col">
                            <Link
                                className="group-hover:shadow-xl object-contain transition-shadow duration-300 text-sm truncate"
                                href={result.link}
                            >
                                <video controls width="100%" height="200">
                                    <source src={result.link} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </Link>
                            <Link
                                className="group-hover:underline truncate text-xl"
                                href={result.link}
                            >
                                <h2>{result.title}</h2>
                            </Link>
                            <div className="flex items-center">
                                <img
                                    src={`https://${result.displayLink}/favicon.ico`}
                                    alt={`${result.displayLink} favicon`}
                                    className="w-4 h-4 mr-2"
                                />
                                <Link href={result.link}>
                                    <p className="group-hover:underline text-gray-600">
                                        {result.displayLink}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoSearchResults;
