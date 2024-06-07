import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from '../../helpers/api';
import getImage from "../../helpers/getImage";
import './style.css';
import PrimaryLayout from "../../components/Layouts/PrimaryLayout";
const api_key = "0c0b05bee8c0e7162a4585261749958a";


export default function SingleGenre() {
    const {genreId} = useParams();
    const [loading , setLoading] = useState(false);
    const [movies , setMovies] = useState([]);
    useEffect(() => {
        setLoading(true);
            API.get(`discover/movie`, { params: { api_key, with_genres: genreId} })
                .then(response => {
                    setMovies(response.data.results);
                    console.log(response.data.results);
                    setLoading(false);
                })
                .catch(error => {
                    setLoading(false);
                    console.log(error.message);
                });
    },[]);
    
    function renderFram(){
     
          return movies.map((movie)=>{
            return(
                <li key={movie.id} className="movie">
                    <img 
                        src={getImage(movie.poster_path)} 
                        alt={movie.title} 
                        className="movie-poster"
                    />
                    <h3>{movie.title}</h3>
                </li>
            )
          })
       
    }
    return (
        <PrimaryLayout>
            <div className="single-genre-header">
                <div className="single-genre-title">
                    <div className="container">
                        <h1>single genre</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                </div>
            </div>
            <div className="single-genre vertical-padding">
                <div className="container-full">
                    <ul className="movie-list">
                        {renderFram()}
                    </ul>
                </div>
            </div>
           
        </PrimaryLayout>
        

    )
}