import { useEffect, useState } from "react";
import { fetchFromTMDB } from "@/services/apiCalls";
import { IMAGE_URL } from "@/constants/constants";
import { ChevronLeft, ChevronRight, Play, Bookmark } from 'lucide-react';

function Banner() {
    const [banners, setBanners] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(5); // Time in seconds

    useEffect(() => {
        const endpoint = 'with_genres=16';
        fetchFromTMDB(endpoint).then((response) => {
            setBanners(response.slice(3, 9));
        });
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime === 1) {
                    nextSlide();
                    return 5; // Reset time left
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? banners.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === banners.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        setTimeLeft(5); // Reset timer when manually changing slide
    };

    return (
        <>
            {banners.length > 0 && (
                <div className="bg-slate-300 w-full h-[140vh] -mb-72">
                    <div className="relative w-full pb-64 h-full flex items-center bg-center bg-cover transition-shadow duration-1000"
                        style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url(${IMAGE_URL + banners[currentIndex].backdrop_path})` }}>
                        <div className="absolute w-4/12 left-16">
                            <div className="font-semibold text-6xl cursor-pointer">
                                {banners[currentIndex].name.slice(0, 15)}
                            </div>
                            <div className="font-normal text-gray-400 mt-5">
                                Orginal Language | {banners[currentIndex].original_language}
                            </div>
                            <div className="font-normal mt-1">
                                {banners[currentIndex].overview.slice(0, 300)}...
                            </div>
                            <div className="flex items-center mt-5 gap-2">
                                <button className="bg-orange-600 font-semibold text-black h-10 px-5 flex items-center gap-2">
                                    <Play color="black" />START WATCHING E1
                                </button>
                                <button className="border-[3px] border-orange-600 font-semibold h-10 px-[5px] flex items-center gap-2">
                                    <Bookmark strokeWidth={2} color="darkOrange" />
                                </button>
                            </div>
                            <div className='flex mt-10 gap-2'>
                                {banners.map((slide, slideIndex) => {
                                    const isActive = currentIndex === slideIndex;
                                    // Calculate progress width based on elapsed time
                                    const progressWidth = isActive ? `${((5 - timeLeft) / 5) * 100}%` : '';
                                    // Set width for inactive indicators
                                    const indicatorWidth = isActive ? '12' : '6';

                                    return (
                                        <div
                                            key={slideIndex}
                                            onClick={() => goToSlide(slideIndex)}
                                            className='text-2xl relative'
                                        >
                                            <div className={`w-${indicatorWidth} h-2 bg-slate-300 rounded-full relative`}>
                                                <div
                                                    className={`absolute top-0 left-0 h-full bg-orange-600 rounded-full`}
                                                    style={{ width: progressWidth, transition: 'width 1s linear' }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                        <div className="absolute bottom-0 h-[100vh] w-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]"></div>
                    </div>
                    {/* Left Arrow */}
                    <div onClick={prevSlide} className='absolute top-[45%] left-2 text-2xl text-white cursor-pointer'>
                        <ChevronLeft size={40} />
                    </div>
                    {/* Right Arrow */}
                    <div onClick={nextSlide} className='absolute top-[45%] right-2 text-2xl text-white cursor-pointer'>
                        <ChevronRight size={40} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Banner;
