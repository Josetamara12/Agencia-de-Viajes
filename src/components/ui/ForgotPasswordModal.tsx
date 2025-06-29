import Modal from './Modal';
import Button from './Button';
import '../styles/AuthModals.css';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="auth-modal">
        <h2>Recuperar contraseña</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required />
          <Button type="submit">Enviar enlace</Button>
        </form>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
