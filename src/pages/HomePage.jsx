import Advertisment from '@/components/Advertisment'
import Banner from '@/components/Banner'
import MoviesList from '@/components/MoviesList'
import Navbar from '@/components/Navbar'
import NewEpisodes from '@/components/NewEpisodes'
// import React from 'react'
import ad from "../assets/ad.png"
import ad2 from "../assets/ad2.png"
import Recommendation from '@/components/Recommendation'
import Ending from '@/components/Ending'
import Footer from '@/components/Footer'


function HomePage() {
    return (
        <div>
            <Navbar />
            <Banner />
            <MoviesList
                endpoint={'with_genres=16&with_original_language=ja'}
                listHeader={"Top Picks for You"}
            />
            <Advertisment data={ad} />
            <MoviesList
                endpoint={'with_genres=16&with_original_language=ja&first_air_date_year=2024'}
                listHeader={"July 2024 Seasonal Sampler"}
                listCaption={"Check out the first few episodes of these new shows for free!"}
            />
            <NewEpisodes endpoint={'with_genres=16&with_original_language=ja&sort_by=popularity.desc'} />
            <MoviesList
                endpoint={'with_genres=16,80'}
                listHeader={"Criminal UnderGrounds"}
                listCaption={"Deep dive into the crime world"}
            />
            <Recommendation endpoint={'with_genres=16&with_original_language=ja&first_air_date_year=2020'} />
            <MoviesList
                endpoint={'with_genres=16,35'}
                listHeader={"Laugh More"}
                listCaption={"Laugh your ass off with out latest comedy collection"}
            />
            <Advertisment data={ad2} />
            <MoviesList
                endpoint={'with_genres=16,18'}
                listHeader={"Western"}
                listCaption={"Animated TV shows in Western Countries"}
            />
            <Recommendation endpoint={'with_genres=16&with_original_language=ja&first_air_date_year=2019'} />
            <Recommendation endpoint={'with_genres=16&with_original_language=ja&first_air_date_year=2016'} />
            <MoviesList
                endpoint={'with_genres=16,10749'}
                listHeader={"Romancw"}
                listCaption={"Romance Tv Shows"}
            />
            <Ending />
            <Footer />
        </div>
    )
}

export default HomePage
