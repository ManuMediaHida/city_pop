"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const DeleteSongConfirmation = ({params}) => {
  const songId = params.id  
  console.log(songId)

const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {

  }, []);

  const handleDelete = async () => {
    if (!songId) {
      alert("Song ID is not available.");
      return;
    }

    try {
      const response = await fetch(`/api/songs/delete/${songId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Error deleting song');
      
      setIsDeleted(true);
    } catch (error) {
      console.error('Failed to delete the song:', error);
      alert('Failed to delete the song');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg shadow-lg rounded-lg bg-white">
      {isDeleted ? (
        <div className="text-center p-6">
          <h1 className="text-xl font-semibold mb-4 text-green-600">La canción ha sido eliminada exitosamente.</h1>
          <Link href="/songs" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Volver a la lista de canciones
          </Link>
        </div>
      ) : (
        <div className="text-center p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-800">¿Estás seguro de que quieres eliminar esta canción?</h1>
          <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4">
            Eliminar
          </button>
          <Link href="/songs" className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Cancelar
          </Link>
        </div>
      )}
    </div>
  );
}

export default DeleteSongConfirmation;
