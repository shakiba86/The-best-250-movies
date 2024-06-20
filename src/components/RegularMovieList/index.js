import React, { Fragment, useState } from 'react';
import './style.css';
import getImage from '../../helpers/getImage';
import { Link } from 'react-router-dom';

const MOVIES_PER_PAGE = 6;

export default function RegularMovieList({ listName, title }) {
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(listName.length / MOVIES_PER_PAGE);
    
    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const renderMovies = () => {
        const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
        const selectedMovies = listName.slice(startIndex, startIndex + MOVIES_PER_PAGE);
        return (
            <ul className="row movie-list">
                {selectedMovies.map(movie => (
                    <li key={movie.id} className="col-2 movie">
                        <Link to={`/movies/${movie.id}`}>
                        <img 
                            src={getImage(movie.poster_path)} 
                            alt={movie.title} 
                            className="movie-poster"
                        />
                        <h3>{movie.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <Fragment>
            <h4 className="section-title pt-13 mb-8">{title}</h4>
            <ul className='content'>{renderMovies()}</ul>
            <div className="pagination-controls">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </Fragment>
    );
}
