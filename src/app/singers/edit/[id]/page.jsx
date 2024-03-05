"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import EditSingerForm from '@/components/EditSingerForm';


const EditSingerPage = ({params})=> {
  const [singerData, setSingerData] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const singerId = params.id; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/singers/view/${singerId}`);
        if (!response.ok) throw new Error(`Error fetching singer data: ${response.statusText}`);
        const data = await response.json();
        setSingerData(data);
      } catch (error) {
        console.error('Error fetching singer data:', error);
        setErrorMessage('Failed to fetch singer data');
      }
    };

    fetchData();
  }, [singerId]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`/api/singers/edit/${singerId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`Error updating singer: ${response.statusText}`);

      const updatedSinger = await response.json();
      setSuccessMessage(`Singer updated successfully. ID: ${updatedSinger.id}`);
      setErrorMessage(''); 
    } catch (error) {
      console.error('Error updating singer:', error);
      setSuccessMessage('');
      setErrorMessage('Failed to update singer');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-white">Editar Cantantes</h2>
      {successMessage && <div className="bg-green-100 text-green-800 rounded-md p-3 mb-4">{successMessage}</div>}
      {errorMessage && <div className="bg-red-100 text-red-800 rounded-md p-3 mb-4">{errorMessage}</div>}
      <div className="bg-white rounded-lg shadow-md p-6">
        <EditSingerForm onSubmit={handleSubmit} initialData={singerData} />
      </div>
      <Link href="/singers" className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
        Volver a cantantes
      </Link>
    </div>
  );
}

export default EditSingerPage;
