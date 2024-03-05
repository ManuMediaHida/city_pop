"use client"
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-teal-500 text-white px-6 py-3">
      <h1 className="text-2xl font-bold">City Pop</h1>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <ul className={`md:flex gap-x-4 items-center ${isOpen ? "flex" : "hidden"} flex-col md:flex-row absolute md:relative bg-teal-500 md:bg-transparent w-full left-0 md:w-auto`}>
        <li>
          <a href="/" className="block px-6 py-2 hover:text-teal-300">Pagina Principal</a>
        </li>
        <li>
          <a href="/auth/login" className="block px-6 py-2 hover:text-teal-300">Iniciar Sesión</a>
        </li>
        <li>
          <a href="/auth/register" className="block px-6 py-2 hover:text-teal-300">Registrarse</a>
        </li>
      </ul>
    </nav>
  );
}
