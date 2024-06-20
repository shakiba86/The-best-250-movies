import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './style.css';
import { useNavigate } from "react-router-dom";
import API from "../../helpers/api";
import debounce from 'lodash.debounce';
import  getApiKey  from "../../helpers/getKey.js";

export default function Search() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    const handleSearch = useCallback(debounce((query) => {
        if (query.length >= 3) {
            setLoading(true);
            API.get(`/search/movie`, { params: { api_key: getApiKey(), query } })
                .then(response => {
                    setData(response.data.results);
                    setLoading(false);
                    setShowDropdown(true);
                })
                .catch(error => {
                    setLoading(false);
                    setError("An error occurred while searching.");
                    console.log(error.message);
                });
        } else {
            setData([]);
            setShowDropdown(false);
        }
    }, 300), []);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleInputChange = (e) => {
        const query = e.target.value;
        handleSearch(query);
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setShowDropdown(false);
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    };

    const renderResult = () => {
        if (!data.length && !loading) {
            return <li className="no-result">No results found</li>;
        }
        return data.map(({ title, id, poster_path }) => (
            <li key={id}>
                <Link to={`/movies/${id}`}>
                    {poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
                    ) : (
                        <div className="no-image">No Image</div>
                    )}
                    <span>{title}</span>
                </Link>
            </li>
        ));
    };

    const onEnter = (e) => {
        if (e.key === "Enter") {
            navigate(`/search/?q=${e.target.value}`);
        }
    };

    return (
        <div className="search" ref={searchRef}>
            <input
                type="text"
                placeholder="search..."
                onKeyDown={onEnter}
                onChange={handleInputChange}
                onFocus={() => setShowDropdown(false)}
                ref={inputRef}
            />
            <ion-icon name="search-outline"></ion-icon>
            {showDropdown && (
                <div className="search-box">
                    <ul>
                        {loading ? <li>Loading...</li> : renderResult()}
                    </ul>
                    {error && <div className="error-message">{error}</div>}
                </div>
            )}
        </div>
    );
}

