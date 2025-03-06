import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Project.css";

function Project() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      
        <h1 className="heading">Write Your Thoughts</h1>

      <button className={isMenuOpen ? 'hamburger open' : 'hamburger'} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="container-menu">
        <ul className={isMenuOpen ? 'menu open' : 'menu'}>
          <li>
            <NavLink to="/" end className="link" activeClassName="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Write" className="link" activeClassName="active" onClick={closeMenu}>
              Write
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Project;