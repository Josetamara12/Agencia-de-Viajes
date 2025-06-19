// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Agencia de Viajes',
  description: 'Tu próxima aventura comienza aquí',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
