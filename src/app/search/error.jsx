'use client';

import {useEffect} from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="flex flex-col justify-center items-center pt-10">
            <h1 className="text-3xl mb-4">Something wrong with the fetching</h1>
            <button className="text-blue-500" onClick={()=>reset()}>Try Again</button>
        </div>
    )

}