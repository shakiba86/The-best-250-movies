import { Link } from "react-router-dom";
import NavListItem from "../NavIListItem";
import { NavListData } from "../../data/NavListData";
import Button from "../Button";
import Search from "../Search";
// import Style from './style';
import './style.css';
import { Fragment, useState } from "react";

export default function Header({ scroll }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <Fragment>
     <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
      <div className="container-full">
        <div className="header-wrapper d-flex space-between align-center">
          <div className="logo">
          <Link to="/">
            <img src="/Nikifilm.png" alt="#"/>
          </Link>
         
          </div>
          <div className="menu">
            <NavListItem menuItem={NavListData} />
          </div>
          <Search />
          <Button
            icon={<ion-icon name="log-in-outline"></ion-icon>}
            name="sign in"
          />
          <div className="hamburger" onClick={toggleMenu}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          {isMenuOpen && (
          <div className="hamburger-menu">
            <NavListItem menuItem={NavListData} />
            <Search />
          </div>
        )}
        </div>
        
      </div>
    </header>
   </Fragment>
  );
}
