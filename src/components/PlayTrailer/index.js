import './style.css';

export default function PlayTrailer({movie,status,toggleTrailerBtn}) {
    return(
        <div className={`movieTrailer ${status ? 'active' : undefined}`}>
            <a href="#"  className='closeTrailer'  onClick={toggleTrailerBtn}>
            <ion-icon name="close-outline"></ion-icon>
            </a>
           
        </div>

    )
}