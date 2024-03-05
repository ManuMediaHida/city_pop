"use client"
import { useState } from 'react';
import Link from 'next/link';
import FormSong from '@/components/FormSong';

function NewSongPage() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('/api/songs/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error al crear cantante: ${response.statusText}`);
      }

      const song = await response.json();
      setSuccessMessage(`Canción creada exitosamente. ID: ${song.id}`);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold my-4">Nueva Canción</h2>
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <FormSong onSubmit={handleSubmit} />
      <Link href="/songs" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
        Volver a canciones
      </Link>
    </div>
  );
}

export default NewSongPage;
