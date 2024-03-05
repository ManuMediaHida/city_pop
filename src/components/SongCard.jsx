"use client"
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

function SongCard({ song }) {
  const [isHovered, setIsHovered] = useState(false);
  const descriptionRef = useRef(null);
  const [cardHeight, setCardHeight] = useState('auto');

  useEffect(() => {
    if (isHovered && descriptionRef.current) {
      setCardHeight(`${descriptionRef.current.scrollHeight + 100}px`); // 100px adicionales para espaciado
    } else {
      setCardHeight('auto');
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="overflow-hidden rounded-lg shadow-lg bg-white"
      style={{
        height: cardHeight,
        transition: 'height 0.5s ease, opacity 0.5s ease' // Transición suave tanto para la altura como para la opacidad
      }}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{song.name}</div>
        <p className="text-gray-700 text-base">{song.singer.name}</p>
      </div>
      {/* Contenido que se muestra únicamente cuando el usuario pasa el ratón por encima */}
      <div
        ref={descriptionRef}
        className={`px-6 pt-4 pb-2 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0 h-0'}`}
        style={{
          transitionDuration: '0.5s', // Duración de la transición de opacidad
          transitionTimingFunction: 'ease-in-out' // Función de temporización de la transición
        }}
      >
        <p className="text-gray-700 text-base">{song.description}</p>
        <div className="mt-4">
          <Link href={`/songs/edit/${song.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Editar
          </Link>
          <Link href={`/songs/delete/${song.id}`} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Eliminar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
