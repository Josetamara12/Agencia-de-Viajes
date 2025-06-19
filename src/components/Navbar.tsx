import React from 'react';
import '../styles/Navbar.css';
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="navbar">
      <section className="container_header">

        {/* Ícono hamburguesa (solo para vista mobile, lógica pendiente) */}
        <i className="btn_menu"><FaBars /></i>

        {/* Logo principal */}
        <a href="#" className="logo"><span>V</span>iajes</a>

        {/* Menú de navegación */}
        <nav className="navbar_links">
          <a href="#home">Inicio</a>
          <a href="#book">Libro</a>
          <a href="#packages">Paquetes</a>
          <a href="#services">Servicios</a>
          <a href="#gallery">Galería</a>
          <a href="#review">Revisar</a>
          <a href="#contact">Contacto</a>
        </nav>

        {/* Logo alternativo solo para mobile */}
        <a href="#" className="midium"><span>T</span>ravel</a>

        {/* Íconos de búsqueda y usuario */}
        <div className="icons">
          <a href="#"><FaSearch /></a>
          <a href="#"><FaUser /></a>
        </div>

        {/* Caja de búsqueda */}
        <div className="search">
          <input type="search" placeholder="Busca aquí..." />
          <label className="search-icon"><FaSearch /></label>
        </div>

      </section>
    </header>
  );
};

export default Navbar;
