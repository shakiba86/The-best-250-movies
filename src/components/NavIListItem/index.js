
import { useState } from "react";
import "./style.css";
import Genres from "../../pages/Genres";

export default function NavListItem({ menuItem = [] }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    function renderMenu() {
        return menuItem.map(({ id, title, link, subItems }) => {
            if (subItems) {
                return (
                    <li key={id} className="dropdown">
                        <a href="#" onClick={(e) => toggleDropdown(e)}>{title}</a>
                        {dropdownVisible && (
                            // <ul className="dropdown-menu">
                            //     {subItems.map(subItem => (
                            //         <li key={subItem.id}>
                            //             <a href={subItem.link}>{subItem.title}</a>
                            //         </li>
                            //     ))}
                            // </ul>
                            <Genres></Genres>
                        )}
                    </li>
                )
            }
            return (
                <li key={id}>
                    <a href={link}>{title}</a>
                </li>
            )
        })
    }

    function toggleDropdown(e) {
        e.preventDefault();
        setDropdownVisible(!dropdownVisible);
    }

    return (
        <ul className="d-flex align-center justify-center">
            {renderMenu()}
        </ul>
    )
}
