import { useState } from "react"
import logo from "../assets/logo.png"
import smallLogo from "../assets/smallLogo.png"
import profile from "../assets/profile.png"
import { ChevronDown, Crown, Search, Bookmark, Menu } from 'lucide-react'

function Navbar() {
    // State to manage the sidebar's visibility
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the sidebar's open/closed state
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='bg-[#23252b] h-14 flex justify-between lg:px-20 items-center fixed w-full z-50'>
            <div className="flex items-center h-full cursor-pointer ">
                {/* Header Section */}
                <div className="flex items-center text-white h-16 w-full">
                    <button onClick={toggleSidebar} className={`ml-3 z-50 block lg:hidden ${isOpen ? 'h-full p-5 bg-black' : 'pl-4'}`}>
                        <Menu />
                    </button>
                    <img src={logo} alt="logo" className="h-36 hidden lg:block ml-4" />
                    <img src={smallLogo} alt="logo" className="h-7 block lg:hidden ml-4" />
                    <h1 className="font-medium ml-4 hidden lg:flex hover:bg-[#141519] px-4 h-full items-center">
                        Browse
                        <ChevronDown color fill="gray" size={30} className="pt-1" strokeWidth={3} />
                    </h1>
                    <h1 className="font-medium ml-4 hidden lg:flex hover:bg-[#141519] px-4 h-full items-center">
                        Games
                    </h1>
                    <h1 className="font-medium ml-4 hidden lg:flex hover:bg-[#141519] px-4 h-full items-center">
                        News
                        <ChevronDown color fill="gray" size={30} className="pt-1" strokeWidth={3} />
                    </h1>
                </div>

                {/* Sidebar Section */}
                <div
                    className={`bg-black text-white fixed top-14 left-0 h-screen transition-all duration-1000 ${isOpen ? 'w-full' : 'w-0'}`}
                >
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            {/* Sidebar content */}
                            <ul className={`mt-6 ml-6 transition-all duration-300 ${isOpen ? 'flex flex-col items-start gap-5' : 'hidden'}`}>
                                <li className=" text-gray-500">Browse</li>
                                <li className="">Popular</li>
                                <li className="">New</li>
                                <li className="">Alphabeical</li>
                                <li className="">Simulcast Seoson</li>
                                <li className="">Release Calendar</li>
                                <li className="">Music Videos & Concerts</li>
                                <li className="">Genres</li>
                                <li className="">Gams</li>
                                <li className="">Store</li>
                                <li className="">News</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center h-full cursor-pointer'>
                <div className='flex items-center gap-2 text-xs font-medium hover:bg-[#141519] px-4 h-full'>
                    <Crown strokeWidth={3} color absoluteStrokeWidth fill='orange' />
                    <h1 className='hidden lg:block'><span className='text-yellow-500'>TRY FREE</span><br />PREMIUM</h1>
                </div>
                <div className='flex items-center gap-2 text-xs font-medium hover:bg-[#141519] px-4 h-full'>
                    <Search size={24} strokeWidth={1.5} />
                </div>
                <div className='hidden lg:flex items-center gap-2 text-xs font-medium hover:bg-[#141519] px-4 h-full'>
                    <Bookmark size={24} strokeWidth={1.5} />
                </div>
                <div className='flex items-center gap-2 text-xs font-medium hover:bg-[#141519] px-4 h-full'>
                    <img src={profile} alt="logo" className='h-8 rounded-full' />
                    <ChevronDown color fill='gray' size={30} className='pt-1' strokeWidth={3} />
                </div>
            </div>
        </div>

    )
}

export default Navbar
