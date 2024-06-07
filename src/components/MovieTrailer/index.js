import { useState } from 'react';
import PlayTrailer from '../PlayTrailer';
import './style.css';

export default function MovieTrailer({movie}) {
    const [trailerBtn, setTrailerBtn]= useState(false);
    const toggleTrailerBtn = () => {
        setTrailerBtn(!trailerBtn)
    }
    return (
    <>
        <div className={`trailer  d-flex justify-center align-center ${movie.active ? 'active' : undefined}`}>
            <a href="#" className="playBtn d-flex align-center justify-center" onClick={toggleTrailerBtn}>
                <ion-icon name="play-outline"></ion-icon>
            </a>
            <p>watch Trailer</p>
        </div>
       {movie.active && <PlayTrailer  movie={movie}  status={trailerBtn} toggleTrailerBtn={toggleTrailerBtn}/>}
    </>
        
    )
}