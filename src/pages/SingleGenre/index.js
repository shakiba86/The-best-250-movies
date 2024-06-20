
// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import API from '../../helpers/api';
// // import getImage from "../../helpers/getImage";
// // import './style.css';
// // import titleMaker from "../../helpers/titleMaker";
// // import PrimaryLayout from "../../components/Layouts/PrimaryLayout";
// // const api_key = "0c0b05bee8c0e7162a4585261749958a";

// // export default function SingleGenre() {
// //     const { genreId } = useParams();
// //     const [loading, setLoading] = useState(false);
// //     const [movies, setMovies] = useState([]);
// //     const [backgroundImage, setBackgroundImage] = useState('');
// //     useEffect(()=>{
// //         titleMaker("singleGenre")
// //    },[])
// //     useEffect(() => {
// //         const fetchMovies = async () => {
// //             setLoading(true);
// //             try {
// //                 const response = await API.get(`discover/movie`, { params: { api_key, with_genres: genreId } });
// //                 const moviesList = response.data.results;
// //                 setMovies(moviesList);

           
// //                 if (moviesList.length > 0) {
// //                     const randomMovie = moviesList[Math.floor(Math.random() * moviesList.length)];
// //                     setBackgroundImage(getImage(randomMovie.backdrop_path));
// //                 }

// //                 setLoading(false);
// //             } catch (error) {
// //                 console.error(error.message);
// //                 setLoading(false);
// //             }
// //         };

// //         fetchMovies();
// //     }, [genreId]);

// //     const handleMovieClick = (movie) => {
// //         setBackgroundImage(getImage(movie.backdrop_path));
// //     };

// //     function renderFram() {
// //         return movies.map((movie) => (
// //             <li key={movie.id} className="col-2 movie" onClick={() => handleMovieClick(movie)}>
// //                 <img 
// //                     src={getImage(movie.poster_path)} 
// //                     alt={movie.title} 
// //                     className="movie-poster"
// //                 />
// //                 <h3>{movie.title}</h3>
// //             </li>
// //         ));
// //     }

// //     return (
// //         <PrimaryLayout>
// //             <div className="single-genre-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
// //                 <div className="single-genre-title">
// //                     <div className="container">
// //                         <h1>Single Genre</h1>
// //                         <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="single-genre vertical-padding">
// //                 <div className="container-full">
// //                     {loading ? (
// //                         <div>Loading...</div>
// //                     ) : (
// //                         <ul className=" row movie-list">
// //                             {renderFram()}
// //                         </ul>
// //                     )}
// //                 </div>
// //             </div>
// //         </PrimaryLayout>
// //     );
// // }


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import API from '../../helpers/api';
// import getImage from "../../helpers/getImage";
// import './style.css';
// import titleMaker from "../../helpers/titleMaker";
// import PrimaryLayout from "../../components/Layouts/PrimaryLayout";
// import { getApiKey } from '../../helpers/apiConfig';

// export default function SingleGenre() {
//     const { genreId } = useParams();
//     const [loading, setLoading] = useState(false);
//     const [movies, setMovies] = useState([]);
//     const [backgroundImage, setBackgroundImage] = useState('');
//     const [genreName, setGenreName] = useState('Single Genre');

//     useEffect(() => {
//         titleMaker("singleGenre")
//     },[])

//     useEffect(() => {
//         const fetchGenreName = async () => {
//             try {
//                 const response = await API.get('genre/movie/list', { params: { api_key } });
//                 const genre = response.data.genres.find(g => g.id.toString() === genreId);
//                 if (genre) {
//                     setGenreName(genre.name);
//                 }
//             } catch (error) {
//                 console.error(error.message);
//             }
//         };

//         const fetchMovies = async () => {
//             setLoading(true);
//             try {
//                 const response = await API.get(`discover/movie`, { params: { api_key, with_genres: genreId } });
//                 const moviesList = response.data.results;
//                 setMovies(moviesList);

//                 if (moviesList.length > 0) {
//                     const randomMovie = moviesList[Math.floor(Math.random() * moviesList.length)];
//                     setBackgroundImage(getImage(randomMovie.backdrop_path));
//                 }

//                 setLoading(false);
//             } catch (error) {
//                 console.error(error.message);
//                 setLoading(false);
//             }
//         };

//         fetchGenreName();
//         fetchMovies();
//     }, [genreId]);

//     const handleMovieClick = (movie) => {
//         setBackgroundImage(getImage(movie.backdrop_path));
//     };

//     function renderFram() {
//         return movies.map((movie) => (
//             <li key={movie.id} className="col-2 movie" onClick={() => handleMovieClick(movie)}>
//                 <img 
//                     src={getImage(movie.poster_path)} 
//                     alt={movie.title} 
//                     className="movie-poster"
//                 />
//                 <h3>{movie.title}</h3>
//             </li>
//         ));
//     }

//     return (
//         <PrimaryLayout>
//             <div className="single-genre-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
//                 <div className="single-genre-title">
//                     <div className="container">
//                         <h1>{genreName}</h1>
//                         <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="single-genre vertical-padding">
//                 <div className="container-full">
//                     {loading ? (
//                         <div>Loading...</div>
//                     ) : (
//                         <ul className=" row movie-list">
//                             {renderFram()}
//                         </ul>
//                     )}
//                 </div>
//             </div>
//         </PrimaryLayout>
//     );
// }
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from '../../helpers/api';
import getImage from "../../helpers/getImage";
import './style.css';
import titleMaker from "../../helpers/titleMaker";
import PrimaryLayout from "../../components/Layouts/PrimaryLayout";
import  getApiKey  from "../../helpers/getKey.js";
import { Link } from "react-router-dom";

export default function SingleGenre() {
    const { genreId } = useParams();
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');
    const [genreName, setGenreName] = useState('Single Genre');

    useEffect(() => {
        titleMaker("singleGenre")
    },[])

    useEffect(() => {
        const fetchGenreName = async () => {
            try {
                const response = await API.get('genre/movie/list', { params: { api_key: getApiKey() } });
                const genre = response.data.genres.find(g => g.id.toString() === genreId);
                if (genre) {
                    setGenreName(genre.name);
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        const fetchMovies = async () => {
            setLoading(true);
            try {
                const response = await API.get(`discover/movie`, { params: { api_key: getApiKey(), with_genres: genreId } });
                const moviesList = response.data.results;
                setMovies(moviesList);

                if (moviesList.length > 0) {
                    const randomMovie = moviesList[Math.floor(Math.random() * moviesList.length)];
                    setBackgroundImage(getImage(randomMovie.backdrop_path));
                }

                setLoading(false);
            } catch (error) {
                console.error(error.message);
                setLoading(false);
            }
        };

        fetchGenreName();
        fetchMovies();
    }, [genreId]);

    const handleMovieClick = (movie) => {
        setBackgroundImage(getImage(movie.backdrop_path));
    };

    function renderFram() {
        return movies.map((movie) => (
            <li key={movie.id} className="col-2 movie" onClick={() => handleMovieClick(movie)}>
                 <Link to={`/movies/${movie.id}`}>
                <img 
                    src={getImage(movie.poster_path)} 
                    alt={movie.title} 
                    className="movie-poster"
                />
                <h3>{movie.title}</h3>
                </Link>
            </li>
        ));
    }

    return (
        <PrimaryLayout>
            <div className="single-genre-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="single-genre-title">
                    <div className="container">
                        <h1>{genreName}</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                </div>
            </div>
            <div className="single-genre vertical-padding">
                <div className="container-full">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ul className="row movie-list">
                            {renderFram()}
                        </ul>
                    )}
                </div>
            </div>
        </PrimaryLayout>
    );
}
