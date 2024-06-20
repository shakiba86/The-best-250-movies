import './style.css';

export default function Button({icon,name,color,bgColor}){
    return(
    <a  href="#"  className="mainBtn">
        {icon} {name}
    </a>
    )
}