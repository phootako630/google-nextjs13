'use client';
import {AiOutlineCamera, AiOutlineSearch} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { BiMap } from "react-icons/bi";


export default function SearchHeaderOptions() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchParam = searchParams.get("searchTerm");
    const selectTab = (tab) => {
            router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchParam}`);
    }
    return (
        <div className="flex space-x-2 select-none
        border-b w-full justify-center
        text-gray-700 text-sm
        lg:justify-start lg:pl-52">
        <div onClick={() => selectTab('All')}
            className={`flex item-center space-x-1 border-b-4
            border-transparent active:text-blue-500 
            cursor-pointer pb-3 px-2 
            ${pathname === "/search/web" && "!text-blue-600 !border-blue-600"}`}>
                <AiOutlineSearch className="text-md "/>
                <p className="link">All</p>
        </div>
            <div onClick={() => selectTab('Images')}
                 className={`flex item-center space-x-1 border-b-4
            border-transparent active:text-blue-500 
            cursor-pointer pb-3 px-2 
            ${pathname === "/search/image" && "!text-blue-600 !border-blue-600"}`}>
                <AiOutlineCamera className="text-md "/>
                <p className="link">Images</p>
            </div>

                <p className="link">News</p>
                <p className="link">Videos</p>
                <BiMap className="text-md"/>
                <p className="flex space-x-1 items-center link">Maps</p>
                <p className="link">More</p>
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}