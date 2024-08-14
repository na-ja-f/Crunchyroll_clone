import { Instagram, Youtube, Twitter, Facebook, Music2, Crown, Copyright, ChevronDown } from 'lucide-react'

function Footer() {
    return (
        <div className='bg-[#1c303a] w-full flex flex-col relative'>
            <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent'></div>
            <div className='w-full flex justify-start pl-48 gap-36 z-10'>
                <div className='flex flex-col gap-1 justify-start text-sm font-semibold'>
                    <h1 className='font-semibold text-lg'>Navigation</h1>
                    <p className='text-gray-400'>Browse Popular</p>
                    <p className='text-gray-400'>Browse Simulcasts</p>
                    <p className='text-gray-400'>Release Calendar</p>
                    <p className='text-gray-400'>News</p>
                    <p className='text-gray-400'>Store</p>
                    <p className='text-gray-400'>Games</p>
                </div>
                <div className='flex flex-col gap-1 justify-start text-sm font-semibold'>
                    <h1 className='font-semibold text-lg'>Connect With Us</h1>
                    <p className='text-gray-400 flex items-center gap-1'><Youtube size={15} />Youtube</p>
                    <p className='text-gray-400 flex items-center gap-1'><Facebook size={15} />Facebook</p>
                    <p className='text-gray-400 flex items-center gap-1'><Twitter size={15} />Twitter</p>
                    <p className='text-gray-400 flex items-center gap-1'><Instagram size={15} />Instagram</p>
                    <p className='text-gray-400 flex items-center gap-1'><Music2 size={15} />TikTok</p>
                </div>
                <div className='flex flex-col gap-1 justify-start text-sm font-semibold'>
                    <h1 className='font-semibold text-lg'>Crunchyroll</h1>
                    <p className='flex gap-1 text-yellow-400 items-center'><Crown color fill="yellow" size={20} />Start a Free Trial</p>
                    <p className='text-gray-400'>About</p>
                    <p className='text-gray-400'>Help Center</p>
                    <p className='text-gray-400'>Terms of Use</p>
                    <p className='text-gray-400'>Privacy Policy</p>
                    <p className='text-gray-400'>AdChoices</p>
                    <p className='text-gray-400'>Do Not Sell or Share My Personal <br />Information</p>
                    <p className='text-gray-400'>Cookie Consent Tool</p>
                    <p className='text-gray-400'>Press Inquiries</p>
                    <p className='text-gray-400'>Get the Apps</p>
                    <p className='text-gray-400'>Redeem Gift Card</p>
                    <p className='text-gray-400'>Jobs</p>
                    <p className='text-gray-400'>Index 2023 : 74/100</p>
                </div>
                <div className='flex flex-col gap-1 justify-start text-sm font-semibold'>
                    <h1 className='font-semibold text-lg'>Account</h1>
                    <p className='text-gray-400'>Switch Profile</p>
                    <p className='text-gray-400'>Watchlist</p>
                    <p className='text-gray-400'>Crunchylists</p>
                    <p className='text-gray-400'>History</p>
                    <p className='text-gray-400'>My Account</p>
                    <p className='text-gray-400'>Log Out</p>
                </div>
            </div>
            <hr className='mb-6 mt-6 mx-48 border-gray-500' />
            <div className='mb-10 mx-48 flex justify-between'>
                <h1 className='text-xl font-italic font-light flex items-center gap-2'>SONY PICTURES <span className='text-sm flex items-center gap-2'>|<Copyright strokeWidth={1} size={15} />Crunchyrolls , LLC</span></h1>
                <h1 className='font-semibold flex items-center gap-1'><ChevronDown strokeWidth={3} fill='gray' color/>ENGLISH (US)</h1>
            </div>
        </div>
    )
}

export default Footer
