'use client';
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';
import '../styles/AuthModals.css';
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
import Image from 'next/image';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ForgotPasswordModal from './ForgotPasswordModal';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  // Cierra búsqueda con Escape
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
        {/* Ícono hamburguesa (mobile) */}
        <i className="btn_menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </i>

        {/* Logo (desktop) */}
        <div className="logo-desktop">
          <Image
            src="/img/logo-anabe.png"
            alt="Logo Anabé"
            width={130}
            height={80}
            className="navbar-logo"
            priority
          />
        </div>

        {/* Menú navegación */}
        <nav className={`navbar_links ${isMenuOpen ? 'show' : ''}`}>
          <a href="#home">Inicio</a>
          <a href="#book">Libro</a>
          <a href="#packages">Paquetes</a>
          <a href="#services">Servicios</a>
          <a href="#gallery">Galería</a>
          <a href="#review">Revisar</a>
          <a href="#contact">Contacto</a>
        </nav>

        {/* Logo (mobile) */}
        <div className="logo-mobile">
          <Image
            src="/img/logo-anabe.png"
            alt="Logo Anabé mobile"
            width={100}
            height={50}
            className="navbar-logo"
            priority
          />
        </div>

        {/* Íconos de búsqueda y usuario */}
        <div className="icons">
          <span onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <span className="close-icon">&times;</span> : <FaSearch />}
          </span>
          <span onClick={() => setIsLoginOpen(true)}>
            <FaUser />
          </span>
        </div>

        {/* Barra de búsqueda */}
        {isSearchOpen && (
          <div className="search">
            <input type="search" placeholder="Busca aquí..." />
            <label className="search-icon">
              <FaSearch />
            </label>
          </div>
        )}
      </section>

      {/* Modales de autenticación */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onOpenRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
        onOpenForgotPassword={() => {
          setIsLoginOpen(false);
          setIsForgotOpen(true);
        }}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <ForgotPasswordModal
        isOpen={isForgotOpen}
        onClose={() => setIsForgotOpen(false)}
      />
    </header>
  );
};

export default Navbar;
