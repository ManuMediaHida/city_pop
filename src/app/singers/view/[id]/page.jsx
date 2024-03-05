import FormSinger from "@/components/FormSinger"
import prisma from '@/libs/prisma'
import { getAllSingers } from "@/libs/actions" 

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const singer = await prisma.singer.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Ver Cantante</h3>
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <FormSinger action={getAllSingers} singer={singer} disabled={true} />
      </div>
    </div>
  )
}

export default page
