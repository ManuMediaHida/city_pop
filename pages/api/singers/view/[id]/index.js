import prisma from '@/libs/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query; 

    try {
      const singer = await prisma.singer.findUnique({
        where: { id: Number(id) }, 
      });

      if (singer) {
        res.json(singer); 
      } else {
        res.status(404).json({ message: 'Singer not found' }); 
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve singer', error: error.message }); 
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`); 
  }
}
