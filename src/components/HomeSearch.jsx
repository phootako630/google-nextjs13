'use client';
import {AiOutlineSearch} from "react-icons/ai";
import {BsFillMicFill} from "react-icons/bs";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function HomeSearch () {
    const router = useRouter();
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);

    }
    const handleRandomSearch = async () => {
        setLoading(true);
        const response = await fetch("https://random-word-api.herokuapp.com/word");
        const data = await response.json();
        const res = data[0];
        if(!res) return;
        router.push(`/search/web?searchTerm=${res}`);
        setLoading(false);
    }
    return (
        <>
            <form
            onSubmit={handleSubmit}
            className="flex w-full mt-5 mx-auto max-w-[90%]
            border border-gray-200 px-5 py-3 rounded-full hover:shadow-md
            transition-shadow duration-200 focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
            >
                <AiOutlineSearch
                className="text-xl text-gray-500 mr-2"
                />
                <input type="text"
                       className="flex-grow focus:outline-none"
                       onChange={(e) => setInput(e.target.value)}
                       value={input}
                />
                <BsFillMicFill className="text-lg" />
            </form>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4
                justify-center sm:flex-row mt-8">
                <button onClick={handleSubmit}
                        className="btn">Google Search</button>
                <button
                    disabled = {loading}
                    onClick={handleRandomSearch}
                    className="btn flex items-center justify-center disabled:opacity-80">
                    {loading ? (<img className="h-6 text-center" src="/spinner.svg" alt="Loading..."/>)
                        :
                        "I'm Feeling Lucky"}
                   </button>
            </div>
        </>
    )
}