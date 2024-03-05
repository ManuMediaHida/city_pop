import prisma from '@/libs/prisma';

export default async function handler(req, res) {
  const { id } = req.query;
  const singerId = Number(id);

  if (isNaN(singerId)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  if (req.method === 'PUT') {
    const { name, birthdayAge, birthdayCity } = req.body;

    if (!name || !birthdayAge || !birthdayCity) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const updatedSinger = await prisma.singer.update({
        where: { id: singerId },
        data: {
          name,
          birthdayAge: Number(birthdayAge),
          birthdayCity,
        },
      });

      res.json(updatedSinger);
    } catch (error) {

      if (error.code === 'P2025') {
        return res.status(404).json({ message: 'Singer not found' });
      }
      res.status(500).json({ message: 'Failed to update singer', error: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.singer.delete({
        where: { id: singerId },
      });
      res.status(200).json({ message: 'Singer deleted successfully' });
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ message: 'Singer not found' });
      }
      res.status(500).json({ message: 'Failed to delete the singer', error: error.message });
    }
  } else {

    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
