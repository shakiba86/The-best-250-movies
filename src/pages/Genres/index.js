import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from '../../helpers/api';
import  getApiKey  from "../../helpers/getKey.js";


export default function Genres() {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        API.get(`genre/movie/list`, { params:{ api_key: getApiKey() } })
            .then(response => {
                setGenres(response.data.genres);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error.message);
            });
    }, []);
    function renderGenres() {
        return genres.map((genre) => {
            const { id, name } = genre;
            return (
                <li key={id}>
                    <Link to={`/genres/${id}`}>
                     {name}
                   </Link>
                </li>
            );
        });
    }
    return(
        <ul className="dropdown-menu">
            {renderGenres()}
        </ul>
    )
}