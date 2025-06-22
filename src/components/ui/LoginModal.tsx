import React, {useEffect} from 'react';
import '../styles/LoginModal.css';
import Button from './Button';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

    return (
        <div className="login-modal-overlay">
            <div className="login-modal">
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>
                <h2>Iniciar Sesion</h2>
                <form>
                    <input type="email" placeholder="Correo Electronico" required />
                    <input type="password" placeholder="Contraseña" required />
                    <Button type='submit'>Ingresar</Button>
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Recuérdame</label>
                    </div>
                </form>
                <a href="#">¿Olvidaste tu contraseña?</a>
                <a href="#">Registrate ahora</a>
            </div>
        </div>
    );
};

export default LoginModal; 