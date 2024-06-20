import { useEffect, useState, useCallback } from "react";
import PrimaryLayout from "../../components/Layouts/PrimaryLayout";
import { Link, useSearchParams, createSearchParams } from "react-router-dom";
import API from "../../helpers/api";
import debounce from 'lodash.debounce';
import titleMaker from "../../helpers/titleMaker";
import './style.css';
import  getApiKey  from "../../helpers/getKey.js";

const RESULTS_PER_PAGE = 10;

export default function SearchResult() {
    const [queryString, setQueryString] = useSearchParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const getApi = useCallback(debounce((query) => {
        if (query.length >= 3) {
            setLoading(true);
           
            API.get(`/search/movie`, { params: { api_key: getApiKey(), query } })
                .then(response => {
                    setData(response.data.results);
                    setLoading(false);
                })
                .catch(error => {
                    setLoading(false);
                    setError("An error occurred while searching.");
                    console.log(error.message);
                });
        } else {
            setData([]);
        }
    }, 300), []);
    useEffect(()=>{
        titleMaker("search")
   },[])
    useEffect(() => {
        const initialQuery = queryString.get("q");
        if (initialQuery && initialQuery !== "") {
            getApi(initialQuery);
        }
    }, [queryString, getApi]);

    function renderResult() {
        if (loading) return <div className="loading">Loading...</div>;
        if (error) return <div className="error-message">{error}</div>;
        if (!data.length) return <div className="no-results">No results found</div>;

    
        const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
        const endIndex = startIndex + RESULTS_PER_PAGE;
        const paginatedData = data.slice(startIndex, endIndex);

        return paginatedData.map(({ title, id, poster_path }) => (
            <li className="movie-card" key={id}>
                <Link to={`/movies/${id}`}>
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
                    <div className="movie-title">{title}</div>
                </Link>
            </li>
        ));
    }

    // function onType(e) {
    //     const value = e.target.value;
    //     setQueryString(createSearchParams({ q: value }));
    //     setCurrentPage(1);
    //     getApi(value);
    // }

    function nextPage() {
        setCurrentPage((prev) => prev + 1);
    }

    function prevPage() {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    }

    return (
        <PrimaryLayout>
            <div className="search-results-wrapper vertical-padding">
                <h1>View all results</h1>
                {/* <input
                    className="search-input"
                    placeholder="Search for movies"
                    onChange={onType}
                /> */}
                <ul className="search-results">
                    {renderResult()}
                </ul>
                <div className="pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                    <button onClick={nextPage} disabled={currentPage * RESULTS_PER_PAGE >= data.length}>Next</button>
                </div>
            </div>
        </PrimaryLayout>
    );
}
