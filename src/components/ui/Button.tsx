import react from 'react';
import '@/components/styles/Button.css'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    children,
    onClick,
    className = '',
    disabled = false,
}) => {
    return (
        <button
        type={type}
        className={`custom-button ${className}`}
        onClick={onClick}
        disabled={disabled}
        >
        {children}
    </button>
    );
};

export default Button;