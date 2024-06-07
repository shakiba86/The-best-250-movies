
import './style.css';
import { Fragment, useEffect, useState } from "react";
import API from '../../helpers/api';
import getImage from '../../helpers/getImage';
const api_key = "0c0b05bee8c0e7162a4585261749958a";


export default function Filter(props) {
    const [loading, setLoading] = useState(false);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setLoading(true);
        API.get(`genre/movie/list`, { params: { api_key } })
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
            API.get(`discover/movie`, { params: { api_key, with_genres: selectedGenre, page } })
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
            <div className="movie-list">
                {movies.map(movie => (
                    <div key={movie.id} className="movie">
                        <img 
                            src={getImage(movie.poster_path)} 
                            alt={movie.title} 
                            className="movie-poster"
                        />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        );
    }

    function renderPagination() {
        return (
            <div className="pagination">
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
                        <ul className='buttons row justify-centent'>
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
