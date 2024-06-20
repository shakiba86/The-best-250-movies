// // TvSeries.js
import { useState, useEffect } from "react";
import Card from "../Card";
import API from "../../helpers/api";
import './style.css';
import  getApiKey  from "../../helpers/getKey.js";

export default function TvSeries() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 6;
  

    useEffect(() => {
        setLoading(true);
        API.get(`/tv/airing_today`, { params: {  api_key: getApiKey() , page: currentPage } })
            .then(response => {
                setData(prevData => [...prevData, ...response.data.results]);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error.message);
            });
    }, [currentPage]);

    const handleNextPage = () => setCurrentPage(prevPage => prevPage + 1);
    const handlePrevPage = () => setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = data.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
        <section className="tv-series">
            <div className="container-full">
                <div >
                    <h4 className="section-title">TV shows airing today</h4>
                </div>
                <ul className="row mt-16">
                    {loading && currentPage === 1 ? (
                        <p>Loading...</p>
                    ) : currentMovies.length > 0 ? (
                        currentMovies.map(movie => <Card key={movie.id} movie={movie} />)
                    ) : (
                        <p>No movies found</p>
                    )}
                </ul>
                {loading && currentPage > 1 && <p className="loading-message">Loading more...</p>}
                <div className="pagination-controls">
                    <button className="prev-button" onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                    <button className="next-button" onClick={handleNextPage}>Next</button>
                </div>
                {/* <Filter /> */}
            </div>
        </section>
    );
}

