
import prisma from '@/libs/prisma'; // Ajusta el importe según tu estructura de carpetas

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const songs = await prisma.song.findMany();
      res.status(200).json(songs);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las canciones' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
