import Link from 'next/link';
import SingerCard from '@/components/SingerCard'; // Asegúrate de importar SingerCard si aún no lo has hecho
import { getAllSingers } from '@/libs/actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
    const singers = await getAllSingers();

    return (
        <div className="flex flex-col items-center bg-teal-500 min-h-screen p-4">
            <Link href="/singers/new" className='mb-8 inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md shadow transition duration-300 ease-in-out'>
                <span>Nuevo Cantante</span>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {singers.map((singer) => (
                    <div key={singer.id} className="mx-auto">
                        <SingerCard singer={singer} />
                    </div>
                ))}
            </div>
        </div>
    );
}
