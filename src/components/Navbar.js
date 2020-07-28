import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

export const Navbar = () => {
  const [open, setOpen] = useState({ open: false });

  const openBar = () => {
    setOpen({ open: true });
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Resort" />
          </Link>
          <button
            type="button "
            className="nav-btn"
            onChange={(e) => openBar(e)}
          >
            {/* <FaAlignRight className="nav-icon" /> */}
          </button>
        </div>
        <ul className={open ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stock">Stock</Link>
          </li>
          <li>
            <Link to="/company">Empresa</Link>
          </li>
          <li>
            <Link to="/retomas">Retomas</Link>
          </li>
          <li>
            <Link to="/Contactos">Contactos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
