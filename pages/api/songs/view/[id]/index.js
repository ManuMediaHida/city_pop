import prisma from '@/libs/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query; 

    try {
      const song = await prisma.song.findUnique({
        where: { id: Number(id) }, 
      });

      if (song) {
        res.json(song); 
      } else {
        res.status(404).json({ message: 'Song not found' }); 
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve song', error: error.message }); 
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`); 
  }
}
