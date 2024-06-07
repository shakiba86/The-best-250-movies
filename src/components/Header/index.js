import { Link } from "react-router-dom";
import NavListItem from "../NavIListItem";
import { NavListData } from "../../data/NavListData";
import Button from "../Button";
import Search from "../Search";
import "./style.css";

export default function Header({scroll}) {
    return(
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
        <div className="container-full">
           <div className="header-wrapper d-flex space-between align-center">
                <div className="logo">
                   <Link to="/">Cinema</Link>
                </div>
                <div className="menu">
                    <NavListItem  menuItem={NavListData} />
                </div>
                <Search/>
                <Button
                 icon={<ion-icon name="log-in-outline"></ion-icon>}
                 name="sign in"
                />
            </div>
        </div>
    </header>
    )
}
