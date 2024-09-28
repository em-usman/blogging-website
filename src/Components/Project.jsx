import React from 'react';
// import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Project.css"

 

function Project() {
 
 
  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="heading">Write Your Thoughts</h1>
      </div>
      <div className="container-menu">
        <ul className="menu">
          <li>
            <NavLink to="/" end className="link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Write" className="link" activeClassName="active">
              Write
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Project;
