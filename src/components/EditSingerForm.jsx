import React, { useState } from 'react';

function EditSingerForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    birthdayAge: initialData?.birthdayAge || '',
    birthdayCity: initialData?.birthdayCity || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="birthdayAge" className="block text-gray-700 text-sm font-bold mb-2">Año de nacimiento:</label>
        <input
          type="number"
          id="birthdayAge"
          name="birthdayAge"
          value={formData.birthdayAge}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="birthdayCity" className="block text-gray-700 text-sm font-bold mb-2">Ciudad de Nacimiento:</label>
        <input
          type="text"
          id="birthdayCity"
          name="birthdayCity"
          value={formData.birthdayCity}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Editar Cantante
        </button>
      </div>
    </form>
  );
}

export default EditSingerForm;
