"use client"
import { useState } from 'react';

const GuessingGame = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const secretNumber = 7; // Número a adivinar

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(guess) === secretNumber) {
      setMessage('¡Felicidades! ¡Adivinaste el número!');
    } else {
      setMessage('Oops! Inténtalo de nuevo.');
    }
    setGuess('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm mx-auto bg-white rounded shadow-md overflow-hidden">
        <h2 className="bg-black text-white text-center py-2">Oops... No se ha encontrado la página, pero puedes jugar a esto</h2>
        <div className="px-6 py-4">
          <h1 className="text-xl font-bold mb-2">Juego de Adivinanzas</h1>
          <p className="text-base mb-2">Intenta adivinar un número entre 1 y 10:</p>
          <form onSubmit={handleSubmit} className="mb-2">
            <input
              type="number"
              value={guess}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 mr-2"
              min="1"
              max="10"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Adivinar
            </button>
          </form>
          <p className="text-base">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default GuessingGame;
