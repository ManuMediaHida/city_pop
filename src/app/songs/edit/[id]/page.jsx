'use client';
import { useState, useEffect } from 'react';
import EditSongForm from '@/components/EditSongForm';
import Link from 'next/link';


const EditSongPage = ({params}) =>{
  const id = params.id
  console.log(params.id);
  const [song, setSong] = useState(null);
  const [singers, setSingers] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchSongAndSingers = async () => {
      if (!id) return;

      try {
        const songResponse = await fetch(`/api/songs/view/${id}`);
        const songData = await songResponse.json();
        setSong(songData);

        const singersResponse = await fetch('/api/singers/');
        const singersData = await singersResponse.json();
        setSingers(singersData);
      } catch (error) {
        console.error("Error fetching song or singers:", error);
        setErrorMessage('Failed to fetch song or singers');
      }
    };

    fetchSongAndSingers();
  }, [id]); 

  const handleSubmit = async (updatedSongData) => {
    try {
      const response = await fetch(`/api/songs/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSongData),
      });

      if (!response.ok) throw new Error(`Error updating song: ${response.statusText}`);

      const updatedSong = await response.json();
      setSuccessMessage(`Cancion actualizada con éxito. ID: ${updatedSong.id} Puede volver a canciones`);
    } catch (error) {
      console.error('Error al actualizar canción:', error);
      setErrorMessage('Fallo al actualizar canción');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold my-4 text-white">Editar Canción</h1>
      {successMessage && <p className="text-green-500 bg-white">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 bg-white">{errorMessage}</p>}
      <EditSongForm onSubmit={handleSubmit} initialData={song} singers={singers} />
      <Link href="/songs" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Volver a canciones</Link>
    </div>
  );
}

export default EditSongPage;
