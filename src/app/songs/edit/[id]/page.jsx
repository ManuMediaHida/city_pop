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
      setSuccessMessage(`Song updated successfully. ID: ${updatedSong.id}`);
    } catch (error) {
      console.error('Error updating song:', error);
      setErrorMessage('Failed to update song');
    }
  };

  return (
    <div>
      <h1>Edit Song</h1>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <EditSongForm onSubmit={handleSubmit} initialData={song} singers={singers} />
      <Link href="/songs">Back to songs</Link>
    </div>
  );
}

export default EditSongPage;
