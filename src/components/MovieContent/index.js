// import './style.css';
// import Button from '../Button';


// export default function MovieContent({movie}) {
//     return(
//         <div className="content">
//             {/* <img src={movie.titleImg} alt="Movie Title" className="movie-title"/> */}
//             <h4>
//                 <span>{movie.title}</span>
//                 {/* <span><i>{movie.ageLimit}</i></span> */}
//                 {/* <span>{movie.length}</span> */}
//                 <span>{movie.release_dat}</span>
//             </h4>
//             <p>{movie.overview}</p>
//             <div className="button">
//              <Button   
//              icon={<ion-icon name="bookmark-outline"></ion-icon>}  
//              name='Book' 
//              color='#ff3700' 
//              bgColor='#fff'/>
//             <Button
//             icon={<ion-icon name="add-outline"></ion-icon>}  
//             name='My List' 
//             color='#ff3700' 
//             bgColor='#fff'
//             />
//             </div>
//         </div>
//     )
// }
import './style.css';
import Button from '../Button';

export default function MovieContent({ movie, onSlideClick }) {
    const handleSlideClick = () => {
        onSlideClick(movie); // Pass the clicked movie to the parent component
    };

    return(
        <div className="content" onClick={handleSlideClick}>
            <h4>
                <span>{movie.title}</span>
                <span>{movie.release_date}</span>
            </h4>
            <p>{movie.overview}</p>
            <div className="button">
                <Button   
                    icon={<ion-icon name="bookmark-outline"></ion-icon>}  
                    name='Book' 
                    color='#ff3700' 
                    bgColor='#fff'
                />
                <Button
                    icon={<ion-icon name="add-outline"></ion-icon>}  
                    name='My List' 
                    color='#ff3700' 
                    bgColor='#fff'
                />
            </div>
        </div>
    );
}
