import React from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header">
          <nav className="nav-wrapper">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              {/* Add more navigation items as needed */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
