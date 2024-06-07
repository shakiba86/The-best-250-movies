import { Fragment } from 'react';
import './style.css';
import getImage from '../../helpers/getImage';
import { Link } from 'react-router-dom';

export default function RegularMovieList({ listName, title }) {
    function renderMovies() {
        return (
            <div className="movie-list">
                {listName.map(movie => (
                    <div key={movie.id} className="movie">
                        <Link to={`/movies/${movie.id}`}>
                        <img 
                            src={getImage(movie.poster_path)} 
                            alt={movie.title} 
                            className="movie-poster"
                        />
                        <h3>{movie.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <Fragment>
           <div className="row">
              <h4 className="section-title pt-13 mb-8">{title}</h4>
           </div>
            <ul className='content'>{renderMovies()}</ul>
        </Fragment>
    );
}
