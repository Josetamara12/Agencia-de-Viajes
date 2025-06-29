import Modal from './Modal';
import Button from './Button';
import '../styles/AuthModals.css';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="auth-modal">
        <h2>Crear cuenta</h2>
        <form>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <Button type="submit">Registrarse</Button>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
