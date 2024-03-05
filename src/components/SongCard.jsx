import Link from 'next/link';

function SongCard({ song }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{song.name}</div>
        <p className="text-gray-700 text-base">
          Description: {song.description}
        </p>
        {song.singer && (
          <p className="text-gray-700 text-base">
            Singer: {song.singer.name}
          </p>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={`/songs/edit/${song.id}`} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Editar
        </Link>
        <Link href={`/songs/delete/${song.id}`} className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Eliminar
        </Link>
      </div>
    </div>
  );
}

export default SongCard;
