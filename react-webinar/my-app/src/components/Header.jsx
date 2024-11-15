import React from "react";
import "./Header.module.css";

const Header = () => {
    return (
          <header className="header">
             <nav className="nav">
                <ul>
                    <li className="item">Обо мне</li>
                    <li className="item">Контакты</li>
                    <li className="item">Истории</li>
                </ul>
             </nav>
          </header>
    )
}

export default Header;