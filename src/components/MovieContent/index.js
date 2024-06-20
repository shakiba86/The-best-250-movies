
import './style.css';
import Button from '../Button';

export default function MovieContent({ movie }) {
   
    return(
        <div className="content" >
            <h4>
                <span>{movie.title}</span>
                {/* <span>{movie.release_date}</span> */}
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
