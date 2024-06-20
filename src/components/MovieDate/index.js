import './style.css';

export default function MovieDate({movie }) {
    
    return(
        <div className="date" >
            <h2> on{movie.release_date}</h2>
        </div>
    )
}