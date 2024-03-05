import prisma from '@/libs/prisma'; // Ajusta la ruta a tu configuración de Prisma

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, description, singerId } = req.body;

    try {
      const song = await prisma.song.create({
        data: {
          name,
          description,
          singer: {
            connect: { id: singerId },
          },
        },
      });

      return res.status(201).json(song);
    } catch (error) {
      console.error("Error al crear la canción:", error);
      return res.status(500).json({ message: "No se pudo crear la canción" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
