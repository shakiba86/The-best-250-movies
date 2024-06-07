import { useState, useEffect, useRef } from "react";
import API from "../../helpers/api";
import './style.css';
import getImage from "../../helpers/getImage.js";
import MovieContent from "../MovieContent";
import MovieDate from "../MovieDate";
import MovieTrailer from "../MovieTrailer";
import MovieSwiper from "../MovieSwiper";

export default function Banner() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentBackground, setCurrentBackground] = useState("");
    const [selectedMovie, setSelectedMovie] = useState({});
    const api_key = "0c0b05bee8c0e7162a4585261749958a";
    const bannerRef = useRef(null);

    useEffect(() => {
        getApi();
    }, []);

    useEffect(() => {
        if (bannerRef.current && currentBackground) {
            bannerRef.current.style.setProperty('--banner-background', `url(${currentBackground})`);
        }
    }, [currentBackground]);

    function getApi() {
        setLoading(true);
        API.get(`movie/upcoming`, { params: { api_key } })
            .then((response) => {
                const movieResults = response.data.results;
                setMovies(movieResults);
                if (movieResults.length > 0) {
                    setCurrentBackground(getImage(movieResults[0].backdrop_path));
                    setSelectedMovie(movieResults[0]); // vaghti refresh mikardam khali bood
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }

    const handleSlideChange = id => {
        const clickedMovie = movies.find(movie => movie.id === id);
        if (clickedMovie) {
            setSelectedMovie(clickedMovie);
            setCurrentBackground(getImage(clickedMovie.backdrop_path));
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div ref={bannerRef} className="banner">
            {selectedMovie && (
                <div className="container">
                    <div className="banner-content">
                        <div className="row">
                            <div className="col-6">
                                <MovieContent movie={selectedMovie} />
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                                <MovieDate movie={selectedMovie} />
                                <MovieTrailer movie={selectedMovie} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {movies && movies.length > 0 && (
                <MovieSwiper slides={movies} slideChange={handleSlideChange} />
            )}
        </div>
    );
}

