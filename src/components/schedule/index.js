import { useState, useEffect } from "react";
import Card from "../Card";
import API from "../../helpers/api";
import './style.css';
import Pagination from "../pagination";
import Filter from "../Filter";

export default function Schedule() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 6; 
    const api_key = "0c0b05bee8c0e7162a4585261749958a";

    useEffect(() => {
        setLoading(true);
        API.get(`/trending/movie/day`, { params: { api_key } })
            .then(response => {
                setData(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error.message);
            });
    }, []);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = data.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
        <section id="schedule" className="schedule">
            <div className="container-full">
                <div className="row">
                    <h4 className="section-title">Opening This Week</h4>
                </div>
                <ul className="row mt-10">
                    {loading ? (
                        <p>Loading...</p>
                    ) : currentMovies.length > 0 ? (
                        currentMovies.map(movie => <Card key={movie.id} movie={movie} />)
                    ) : (
                        <p>No movies found</p>
                    )}
                </ul>
                <Pagination
                    moviesPerPage={moviesPerPage}
                    totalMovies={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
                 <Filter></Filter>
            </div>
        </section>
    );
}
