
import './style.css';
import { Fragment, useEffect, useState } from "react";
import API from '../../helpers/api';
import getImage from '../../helpers/getImage';
import  getApiKey  from "../../helpers/getKey.js";


export default function Filter() {
    const [loading, setLoading] = useState(false);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setLoading(true);
        API.get(`genre/movie/list`, { params: { api_key: getApiKey() } })
            .then(response => {
                setGenres(response.data.genres);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error.message);
            });
    }, []);

    useEffect(() => {
        if (selectedGenre) {
            setLoading(true);
            API.get(`discover/movie`, { params: { api_key: getApiKey() , with_genres: selectedGenre, page } })
                .then(response => {
                    setMovies(response.data.results);
                    setTotalPages(response.data.total_pages);
                    setLoading(false);
                })
                .catch(error => {
                    setLoading(false);
                    console.log(error.message);
                });
        }
    }, [selectedGenre, page]);

    function renderGenres() {
        return genres.map((genre) => {
            const { id, name } = genre;
            return (
                <li key={id}>
                    <button
                        className={`extra-large-button ${selectedGenre === id ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedGenre(id);
                            // setPage(1);  
                        }}
                    >
                        <h3>{name}</h3>
                    </button>
                </li>
            );
        });
    }

    function renderMovies() {
        if (loading) {
            return <p>Loading...</p>;
        }
        return (
            <ul className="movie-list row justify-center">
                {movies.map(movie => (
                    <li key={movie.id} className="col-2 movie">
                        <img 
                            src={getImage(movie.poster_path)} 
                            alt={movie.title} 
                            className="movie-poster"
                        />
                        <h3>{movie.title}</h3>
                    </li>
                ))}
            </ul>
        );
    }

    function renderPagination() {
        return (
            <div className="pagination row justify-center">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        );
    }

    return (
        <Fragment>
            <div className="filter">
                <div className='container-full'>
                    <div className="filter-wrapper ">
                        <h1 className='mb-25 mt-16'>Explore our most popular titles</h1>
                        <ul className='buttons row justify-center'>
                            {renderGenres()}
                        </ul>
                    </div>
                    <div className='content'>
                        {renderMovies()}
                    </div>
                    {selectedGenre && renderPagination()}
                </div>
            </div>
        </Fragment>
    );
}
