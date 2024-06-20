import { useState } from "react";
import "./style.css";
import Genres from "../../pages/Genres";

export default function NavListItem({ menuItem = [] }) {
    const [dropdownVisible, setDropdownVisible] = useState(null);

    function renderMenu() {
        return menuItem.map(({ id, title, link, hasSubItems }) => {
            if (hasSubItems) {
                return (
                    <li key={id} className="dropdown">
                        <a href="#" onClick={(e) => toggleDropdown(e, id)}>{title}</a>
                        {dropdownVisible === id && (
                            <Genres />
                        )}
                    </li>
                );
            }
            return (
                <li key={id}>
                    <a href={link}>{title}</a>
                </li>
            );
        });
    }

    function toggleDropdown(e, id) {
        e.preventDefault();
        setDropdownVisible(dropdownVisible === id ? null : id);
    }

    return (
        <ul className="d-flex align-center justify-center">
            {renderMenu()}
        </ul>
    );
}
