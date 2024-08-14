import React from 'react'
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"
import { ChevronDown, Crown, Search, Bookmark } from 'lucide-react'

function Navbar() {
    return (
        <div className='bg-[#23252b] h-14 flex justify-between px-20 items-center fixed w-full z-50'>
            <div className='flex items-center h-full cursor-pointer'>
                <img src={logo} alt="logo" className='h-40' />
                <h1 className='font-medium flex hover:bg-[#141519] px-4 h-full items-center'>Browse<ChevronDown color fill='gray' size={30} className='pt-1' strokeWidth={3} /></h1>
                <h1 className='font-medium flex hover:bg-[#141519] px-4 h-full items-center'>Games</h1>
                <h1 className='font-medium flex hover:bg-[#141519] px-4 h-full items-center'>News <ChevronDown color fill='gray' size={30} className='pt-1' strokeWidth={3} /> </h1>
            </div>
            <div className='flex items-center h-full cursor-pointer'>
                <div className='flex items-center gap-2 text-xs font-medium hover:bg-[#141519] px-4 h-full'>
                    <Crown strokeWidth={3} color absoluteStrokeWidth fill='orange' />
                    <h1><span className='text-yellow-500'>TRY FREE</span><br />PREMIUM</h1>
                </div>
                <div className='flex items-center gap-2 text-xs font-medium hover:bg-[#141519] px-4 h-full'>
                    <Search size={24} strokeWidth={1.5} />
                </div>
                <div className='flex items-center gap-2 text-xs font-medium hover:bg-[#141519] px-4 h-full'>
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
