import prisma from '@/libs/prisma';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const { name, birthdayAge, birthdayCity } = req.body;

    try {
      const updatedSinger = await prisma.singer.update({
        where: { id: Number(id) },
        data: {
          name,
          birthdayAge: Number(birthdayAge),
          birthdayCity,
        },
      });
      res.json(updatedSinger);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update singer', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
