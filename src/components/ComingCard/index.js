import getImage from "../../helpers/getImage";
import { Link } from "react-router-dom";
import './style.css';


export default function ComingCard({slide}) {
    const  {backdrop_path,title,id,overview,popularity,original_language,poster_path} = slide;
    return (
    <div className="coming-card">
      <Link to={`/movies/${id}`}>
      <img className="img-fluid" src={getImage(backdrop_path)}  alt=""  />
      </Link>
      <a href="#"  className="add-to-calendar">
        Add to calendar <ion-icon name="calendar-outline"></ion-icon>
      </a>
    </div>
  );

}