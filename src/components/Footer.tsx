import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">

        {/* Columna 1: Contacto */}
        <div className="footer__col">
          <h3>Contáctanos</h3>
          <p>Email: contacto@viajes.com</p>
          <p>Teléfono: +57 300 000 0000</p>
          <p>Dirección: Calle Falsa 123, Medellín</p>
        </div>

        {/* Columna 2: Accesos rápidos */}
        <div className="footer__col">
          <h3>Accesos Rápidos</h3>
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#gallery">Galería</a>
          <a href="#contact">Contacto</a>
        </div>

        {/* Columna 3: Logo y redes */}
        <div className="footer__col footer__col--logo">
          <h3><span>V</span>iajes</h3>
          <div className="footer__social">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://youtube.com">YouTube</a>
          </div>
          <p className="footer__web">www.viajes.com</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2024 Jose Luis Tamara. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
