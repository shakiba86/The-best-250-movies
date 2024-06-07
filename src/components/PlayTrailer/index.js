import './style.css';

export default function PlayTrailer({movie,status,toggleTrailerBtn}) {
    return(
        <div className={`movieTrailer ${status ? 'active' : undefined}`}>
            <a href="#"  className='closeTrailer'  onClick={toggleTrailerBtn}>
            <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe 
            width="1920" 
            height="911" 
            src={movie.video} 
            title={`${movie.title}  | official Trailer`}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
            </iframe>
        </div>

    )
}