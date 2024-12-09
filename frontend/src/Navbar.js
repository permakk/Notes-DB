// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          NoteApp
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/add" className="button is-success">
          Add New
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
