// src/components/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../helpers/api';
import  getApiKey  from "../../helpers/getKey.js";
import './style.css';

export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        setLoading(true);
        API.get(`/movie/${id}`, { params: { api_key: getApiKey() , append_to_response: 'credits,images' } })
            .then(response => {
                setMovie(response.data);
                console.log(response.data)
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error.message);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!movie) {
        return <p>Movie not found</p>;
    }

    const director = movie.credits?.crew?.find(person => person.job === 'Director')?.name || 'N/A';
    const writers = movie.credits?.crew?.filter(person => person.job === 'Writer').map(writer => writer.name).join(', ') || 'N/A';
    const genres = movie.genres?.map(genre => genre.name).join(', ') || 'N/A';
    const cast = movie.credits?.cast?.slice(0, 5) || [];
    const countries = movie.production_countries?.map(country => country.name).join(', ') || 'N/A';
    const images = movie.images?.backdrops?.slice(0, 8) || [];

    return (
        <div className="movie-detail">
            <div className='container-full'>
               <div className="movie-header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
                <div className="movie-content">
                    <div className="movie-poster">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <div className="movie-info">
                        <h1>{movie.title}</h1>
                        <p className="director">Director: {director}</p>
                        <div className="movie-meta">
                            <span>{movie.release_date.split('-')[0]}</span>
                            <span>{movie.runtime} min</span>
                        </div>
                        <button className="watch-trailer">Watch Trailer</button>
                        <div className="rating">
                            <span className="rating-value">{movie.vote_average}</span>
                            <span className="rating-count">{movie.vote_count} ratings</span>
                        </div>
                        <p className="overview">{movie.overview}</p>
                    </div>
                </div>
               </div>
               <div className="movie-details">
                <h2>Details</h2>
                <p><strong>Writers:</strong> {writers}</p>
                <p><strong>Genres:</strong> {genres}</p>
                <p><strong>Country of Origin:</strong> {countries}</p>
               </div>
               <div className="cast-crew">
                <h2>Cast & Crew</h2>
                <ul>
                    {cast.map(member => (
                        <li key={member.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${member.profile_path}`} alt={member.name} />
                            <p>{member.name}</p>
                            <p>{member.character}</p>
                        </li>
                    ))}
                </ul>
               </div>
               <div className="movie-photos">
                <h2>Photos</h2>
                <div className="photos-grid">
                    {images.map(image => (
                        <img key={image.file_path} src={`https://image.tmdb.org/t/p/w500${image.file_path}`} alt="Movie scene" />
                    ))}
                </div>
               </div>
               </div>
        </div>
    );
};


