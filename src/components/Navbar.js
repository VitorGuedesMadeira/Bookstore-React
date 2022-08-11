import React from 'react';
import { NavLink } from 'react-router-dom';
import userIcon from '../images/user.png';

const Navbar = () => (
  <nav className="navigation-bar">
    <div className="nav-div1">
      <span className="nav-logo">Bookstore CMS</span>
      <ul className="nav-ul">
        <li>
          <NavLink to="/" className="bookstore-link">
            Bookstore
          </NavLink>
        </li>
        <li>
          <NavLink to="categories" className="categories-link">
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="nav-div2">
      <img className="nav-user-icon" src={userIcon} alt="user-icon" />
    </div>
  </nav>
);

export default Navbar;
