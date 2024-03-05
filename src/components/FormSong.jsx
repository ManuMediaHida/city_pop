import { useState, useEffect } from 'react';
import Link from 'next/link';

function FormSong({ onSubmit }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [singerId, setSingerId] = useState('');
    const [singers, setSingers] = useState([]);
  
    useEffect(() => {
      const fetchSingers = async () => {
        const response = await fetch('/api/singers'); 
        const data = await response.json();
        setSingers(data);
      };
  
      fetchSingers();
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit({ name, description, singerId: parseInt(singerId, 10) });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre de la Canción:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="singerId" className="block text-gray-700 text-sm font-bold mb-2">Cantante:</label>
        <select
          id="singerId"
          value={singerId}
          onChange={(e) => setSingerId(e.target.value)}
          required
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Seleccione un cantante</option>
          {singers.map((singer) => (
            <option key={singer.id} value={singer.id}>
              {singer.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Crear Canción
        </button>
      </div>
    </form>
  );
}

export default FormSong;
