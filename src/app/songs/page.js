import Link from 'next/link';
import SongCard from '@/components/SongCard';
import { getAllSongs } from '@/libs/actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
    const songs = await getAllSongs();

    return (
        <div className="flex flex-col items-center bg-teal-500 min-h-screen p-4">
            <Link href="/songs/new" className='mb-8 inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md shadow transition duration-300 ease-in-out'>
                <span>Nueva Canción</span>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {songs.map((song) => (
                    <div key={song.id} className="mx-auto">
                        <SongCard song={song} />
                    </div>
                ))}
            </div>

            <Link href="/dashboard" className="mt-4 inline-block bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow transition duration-300 ease-in-out">
                <span>Volver al Dashboard</span>
            </Link>
        </div>
    );
}
