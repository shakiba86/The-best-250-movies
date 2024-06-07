import titleMaker from '../../helpers/titleMaker';
import { useEffect,useState } from 'react';
import API from '../../helpers/api';
import PrimaryLayout from '../../components/Layouts/PrimaryLayout';
import RegularMovieList from '../../components/RegularMovieList';
const api_key = "0c0b05bee8c0e7162a4585261749958a";

export default function MoviePage(){
    const [loading, setLoading] = useState(false);
    const [toprated, setTopRated] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    // useEffect(function(){
    //     document.body.classList.remove("whiteBg")
    // })
    useEffect(()=>{
        titleMaker("moviepage")
   },[])
   useEffect(() => {
    setLoading(true);
    API.get(`/movie/top_rated`, { params: { api_key } })
        .then(response => {
            setTopRated(response.data.results);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error.message);
        });
    }, []);
    useEffect(() => {
        setLoading(true);
        API.get(`/movie/now_playing`, { params: { api_key } })
            .then(response => {
                setNowPlaying(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error.message);
            });
    }, []);
    useEffect(() => {
        setLoading(true);
        API.get(`/movie/popular`, { params: { api_key } })
            .then(response => {
                setPopular(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error.message);
            });
    }, []);
    

    return(
        <PrimaryLayout>
            <div className="container-full">
                <div className='movie-section'>
                <RegularMovieList listName={toprated} title="Top Rated Movies"/>
                <RegularMovieList listName={nowPlaying} title="Current Playing Movies"/>
                <RegularMovieList listName={popular} title="Popular Movies"/>
                </div>
            </div>
        </PrimaryLayout>
    )
}