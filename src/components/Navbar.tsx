'use client'
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  // Cierra la barra de búsqueda al presionar Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="navbar">
      <section className="container_header">

        {/* logica del Ícono hamburguesa (solo para vista mobile */}
        <i className="btn_menu" onClick={() => setIsMenuOpen(!isMenuOpen)}><FaBars /></i>

        {/* Logo principal */}
        <a href="#" className="logo"><span>V</span>iajes</a>

        {/* Menú de navegación */}
        <nav className={`navbar_links ${isMenuOpen ? 'show' : ''}`}>
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
          <span onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? (
              <span className="close-icon">&times;</span>
            ) : (
              <FaSearch />
            )}
          </span>
          <span onClick={() => setIsLoginOpen(true)}>
            <FaUser />
          </span>
        </div>

        {/* Caja de búsqueda */}
        {isSearchOpen && (
          <div className="search">
            <input type="search" placeholder="Busca aquí..." />
            <label className="search-icon"><FaSearch /></label>
          </div>
        )}


      </section>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};

export default Navbar;
