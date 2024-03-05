import Link from 'next/link';

function SingerCard({ singer }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{singer.name}</div>
        <p className="text-gray-700 text-base">
          Age: {singer.birthdayAge}
        </p>
        <p className="text-gray-700 text-base">
          City: {singer.birthdayCity}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={`/singers/edit/${singer.id}`}>
          <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 cursor-pointer">
            Editar
          </span>
        </Link>
        <Link href={`/singers/delete/${singer.id}`}>
          <span className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Eliminar
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SingerCard;
