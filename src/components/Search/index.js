import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './style.css';
import { useNavigate } from "react-router-dom";

export default function Search() {
    const [data , setData] = useState({
        data: [],
        metadata: {},
    });
    const navigate = useNavigate();
    function handleSearch(e) {
        if (e.target.value.length >= 3) {
            axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?q=${e.target.value}`)
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
            });
        }
    }
    function renderResult() {
        return data.data.map(({title , id}) => {
            return(
                <li key={id}>
                    <Link to={`/movie/${id}`} >{title}</Link>
                </li>
            )
        })
    }
    function onEnter(e) {
        if (e.key === "Enter") {
            navigate(`/search/?q=${e.target.value}`);
        }
    }
    return(
        <div className="search">
            <input   onKeyDown={onEnter}   onChange={handleSearch}
                type="text"
                placeholder="search..."
            />
            <ion-icon name="search-outline"></ion-icon>
            <div className="search-box">
                <ul>
                    {renderResult()}
                </ul>
            </div>
        </div>
    )
}
