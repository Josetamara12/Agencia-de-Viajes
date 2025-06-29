import React from 'react';
import Modal from './Modal';
import Button from './Button';
import '../styles/AuthModals.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onOpenForgotPassword: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
  onOpenForgotPassword
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="auth-modal">
        <h2>Iniciar Sesión</h2>
        <form>
          <input type="email" placeholder="Correo Electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <Button type="submit">Ingresar</Button>

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Recuérdame</label>
          </div>
        </form>

        <div className="auth-links">
          <a href="#" onClick={(e) => { e.preventDefault(); onOpenForgotPassword(); }}>
            ¿Olvidaste tu contraseña?
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); onOpenRegister(); }}>
            Regístrate ahora
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;