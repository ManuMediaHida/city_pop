import Link from 'next/link'
import SongCard from '@/components/SongCard'
import { getAllSongs } from '@/libs/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const songs = await getAllSongs();

    return (
        <div className="flex flex-col items-center space-y-8">
            <Link href="/songs/new" className='inline-flex items-center space-x-2 text-blue-500 hover:text-blue-700 bg-blue-100 px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105'>
                <span className="text-black">Nueva Cancion</span>
            </Link>

            {songs.map((song) => (
                <div key={song.id} className="w-full max-w-lg">
                    <div className="mx-auto">
                        <SongCard song={song} />
                    </div>
                </div>
            ))}
        </div>
    )
}
