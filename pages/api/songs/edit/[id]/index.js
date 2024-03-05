import prisma from '@/libs/prisma';

export default async function handler(req, res) {
  const { query: { id }, method, body } = req;

  if (method === 'PUT') {
    try {
      const updatedSong = await prisma.song.update({
        where: { id: parseInt(id) },
        data: {
          name: body.name,
          description: body.description,
          singerId: body.singerId,
        },
      });
      res.status(200).json(updatedSong);
    } catch (error) {
      console.error("Error updating song:", error);
      res.status(500).json({ message: "Failed to update the song", error: error.message });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
