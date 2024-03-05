import Link from 'next/link'
import SingerCard from '@/components/SingerCard'
import { getAllSingers } from '@/libs/actions'

export default async function Home() {
    const singers = await getAllSingers();
  
    return (
      <div className="flex flex-col items-center space-y-8 my-10">
        <Link href="/singers/new" passHref className='inline-flex items-center space-x-2 text-blue-500 hover:text-blue-700 bg-blue-100 px-4 py-2 rounded-md shadow transition duration-300 ease-in-out transform hover:scale-105'>
            <span className="text-black font-semibold">Nuevo cantante</span>
        </Link>
        {singers.map((singer) => (
          <div key={singer.id} className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
            <SingerCard singer={singer} />
          </div>
        ))}
      </div>
    );
  }
  