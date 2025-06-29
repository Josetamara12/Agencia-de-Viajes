import React from 'react';
import './styles/Footer.css';
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content container">

        {/* Columna 1: Contacto */}
        <div className="footer_col">
          <h3>Contáctanos</h3>
          <div className="contact_row">
            <span className="label">Email</span>
            <span className="value">contacto@viajes.com</span>
          </div>
          <div className="contact_row">
            <span className="label">Teléfono</span>
            <span className="value">+57 300 000 0000</span>
          </div>
          <div className="contact_row">
            <span className="label">Dirección</span>
            <span className="value">Calle Falsa 123, Medellín</span>
          </div>
        </div>

        {/* Columna 2: Accesos rápidos */}
        <div className="footer_col">
          <h3>Accesos Rápidos</h3>
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#gallery">Galería</a>
          <a href="#contact">Contacto</a>
          <a href="#contact">Contacto</a>
        </div>

        {/* Columna 3: Logo, redes sociales y sitio web*/}
        <div className='footer_col footer_col--logo'>
          {/* Logo centrado y separado */}
          <div className='footer_brand'>
            <Image
              src='/img/logo-anabe.png'
              alt='Logo Anabé'
              width={180}
              height={50}
              className='footer-logo'
              priority
            />
          </div>

          {/* Redes Sociales */}
          <div className="footer_social">
            <h4>Síguenos</h4>
            <div className="footer_icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Sitio Web */}
          <div className='footer_sitio'>
            <a href="https://www.viajes.com" target="_blank" rel="noopener noreferrer">
              www.viajes.com
            </a>
          </div>

        </div>
      </div>

      <div className="footer_copy">
        <p>&copy; 2024 Jose Luis Tamara. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
