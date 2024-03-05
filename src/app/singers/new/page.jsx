"use client"
import { useState } from 'react';
import Link from 'next/link';
import FormSinger from '@/components/FormSinger'; 

function NewSingerPage() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (formData) => {
    try {

      const response = await fetch('/api/singers/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error al crear cantante: ${response.statusText}`);
      }

      const singer = await response.json();
      setSuccessMessage(`Cantante creado exitosamente. ID: ${singer.id}`);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold my-4 text-white">Nuevo Cantante</h2>
      {successMessage && <div className="text-green-500 bg-white">{successMessage}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <FormSinger onSubmit={handleSubmit} />
      <Link href="/singers" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
        Volver a cantantes
      </Link>
    </div>
  );
}

export default NewSingerPage;
