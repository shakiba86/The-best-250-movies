// import { Link } from 'react-router-dom';
// import getImage from '../../helpers/getImage';
// import './style.css';

// export default function Card({movie}) {
//     const  {backdrop_path,title,id,name} = movie;
//     console.log('Movie ID:', id);
//     console.log('Movie Data:', movie);

   
        
//     return(
//         <li className="col-2 " key={id}>
//             <div className='movie-card' >
//             <Link to={`/movies/${id}`}>
//                 <img className="img-fluid" src={getImage(backdrop_path)}  alt=""  />
//                 <p>
//                     {title}{name}
//                 </p>
//             </Link>
//                 <div className="content row justify-center align-center flex-column">
//                     <h4>{title}{name}</h4>
//                     <div className='card-icons'>
//                         <ion-icon name="add-outline"></ion-icon>
//                         <ion-icon name="play-outline"></ion-icon>
//                     </div>
//                 </div>
//             </div>
//         </li>
//     )
// }

import { Link } from 'react-router-dom';
import getImage from '../../helpers/getImage';
import './style.css';

export default function Card({ movie }) {
    const { backdrop_path, title, id, name } = movie;

    return (
        <li className="col-3 pb-6" key={id}>
            <div className='movie-card'>
                <Link to={`/movies/${id}`}>
                    <img className="img-fluid" src={getImage(backdrop_path)} alt="" />
                    <p>{title || name}</p>
                </Link>
                <div className="content row justify-center align-center flex-column">
                    <h4>{title || name}</h4>
                    <div className='card-icons'>
                        <ion-icon name="add-outline"></ion-icon>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </li>
    );
}
