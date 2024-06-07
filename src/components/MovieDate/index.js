import './style.css';

export default function MovieDate({movie, onSlideClick }) {
    const handleSlideClick = () => {
        onSlideClick(movie); // Pass the clicked movie to the parent component
    };
    return(
        <div className="date" onClick={handleSlideClick}>
            <h2> on{movie.release_date}</h2>
        </div>
    )
}