'use client';
import {useRouter, useSearchParams} from "next/navigation";
import {RxCross2} from "react-icons/rx";
import {BsFillMicFill} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import {useState} from "react";

export default function SearchBox() {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const [term, setTerm] = useState(searchTerm || "");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!term.trim()) return;
        router.push(`/search/web?searchTerm=${term}`);
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-grow border border-gray-200
     shadow-lg px-6 py-3 ml-10 mr-5
     max-w-3xl items-center rounded-full">
            <input
                onSubmit={handleSubmit}
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder={term}
                className="flex-grow w-full w-full focus:outline-none focus:outline-none"/>
            <RxCross2
                onClick={() => setTerm("")}
                className="text-2xl text-gray-500 cursor-pointer sm:mr-2"/>
            <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4
         border-l-2 border-gray-300 mr-3"/>
            <AiOutlineSearch
                onClick={handleSubmit}
                className="text-2xl hidden sm:inline-flex
         text-blue-500 cursor-pointer"/>
        </form>
    )
}