"use client"

import {AiOutlineMore, AiOutlinePicture, AiOutlineSearch} from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {MdOndemandVideo} from "react-icons/md";
import {RiMapPinLine} from "react-icons/ri";
import {BiNews} from "react-icons/bi";
export default function SearchHeaderOptions() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    function selectTab(tab) {
        let url = '';
        switch (tab) {
            case "Images":
                url = `/search/image?searchTerm=${searchTerm}`;
                break;
            case "News":
                url = `/search/news?searchTerm=${searchTerm}`;
                break;
            case "Videos":
                url = `/search/videos?searchTerm=${searchTerm}`;
                break;
            case "Maps":
                url = `/search/maps?searchTerm=${searchTerm}`;
                break;
            default:
                url = `/search/web?searchTerm=${searchTerm}`;
                break;
        }
        router.push(url);
    }
    return (
        <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
            <div onClick={()=>selectTab("All")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "!text-blue-600 !border-blue-600"}`}>
                <AiOutlineSearch className="text-md"/>
                <p>All</p>
            </div>
            <div onClick={()=>selectTab("Images")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/image" && "!text-blue-600 !border-blue-600"}`}>
                <AiOutlinePicture className="text-md"/>
                <p>Images</p>
            </div>
            <div onClick={()=>selectTab("Videos")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/videos" && "!text-blue-600 !border-blue-600"}`}>
                <MdOndemandVideo className="text-md"/>
                <p>Videos</p>
            </div>
            <div onClick={()=>selectTab("Maps")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/maps" && "!text-blue-600 !border-blue-600"}`}>
                <RiMapPinLine className="text-md"/>
                <p>Maps</p>
            </div>
            <div onClick={()=>selectTab("News")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/news" && "!text-blue-600 !border-blue-600"}`}>
                <BiNews className="text-md"/>
                <p>News</p>
            </div>
            <div onClick={()=>selectTab("More")} className='flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2'>
                <AiOutlineMore className="text-md"/>
                <p>More</p>
            </div>
        </div>
    )
}