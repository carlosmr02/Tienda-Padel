import React from 'react';
import { NavLink } from 'react-router-dom';
import ImgHeader from '../assets/villafranca.png';
import '../index.css';

function Navbar() {
  return (
    <nav className="navbar navbar--bg__verde navbar-expand-lg">
      <div className="container-fluid">
        <img src={ImgHeader} alt="" width="100" height="70" className="me-auto" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" activeClassName="active" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/palas" activeClassName="active" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>Palas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ropa" activeClassName="active" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>Ropa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/accesorios" activeClassName="active" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>Productos</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
