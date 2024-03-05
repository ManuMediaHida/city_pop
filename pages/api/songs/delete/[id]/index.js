import prisma from '@/libs/prisma'; 

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const songId = parseInt(id, 10);
      if (isNaN(songId)) {
        return res.status(400).json({ error: 'Invalid ID' });
      }

      await prisma.song.delete({
        where: { id: songId },
      });

      res.status(200).json({ message: 'Song deleted successfully' });
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ message: 'Song not found' });
      }
      res.status(500).json({ error: 'Failed to delete the song', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
