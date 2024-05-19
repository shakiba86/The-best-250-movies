import { Link } from "react-router-dom";
import NavItemList from "../../components/NavListItem/NavListItem";
import { NavListData } from "../../data/NavListData";


export default function Header() {
    return(
    <header>
        <div className="container-full">
           <div className="header-wrapper d-flex space-between align-center">
                <div className="logo">
                    <Link to="/">
                    Cinema
                    </Link>
                </div>
                <div className="menu">
                    <NavItemList  menuItem={NavListData} />
                </div>
                    {/* <Search/> */}
            </div>
        </div>
    </header>
    )
}
