import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Todos from "../../pages/Todos";
function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a to="" className="logo">
          LOGO
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="listItem">
              <Link
                onClick={() => {
                  Todos();
                }}
                to="/todos"
                className="list-link"
              >
                Todos
              </Link>
            </li>
            <li className="listItem">
              <Link to="/photos" className="list-link">
                Photos
              </Link>
            </li>
            <li className="listItem">
              <Link to="/users" className="list-link">
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <button className="btn">Todo</button>
      </div>
    </header>
  );
}

export default Header;
