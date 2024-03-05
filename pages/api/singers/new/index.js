import prisma from '@/libs/prisma'; // Ajusta la ruta a tu archivo prisma

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extrae los datos del cuerpo de la solicitud
    const { name, birthdayAge, birthdayCity } = req.body;

    try {
      // Utiliza Prisma para crear un nuevo cantante en la base de datos
      const singer = await prisma.singer.create({
        data: {
          name,
          birthdayAge,
          birthdayCity,
        },
      });

      return res.status(201).json(singer);
    } catch (error) {
      console.error("Error al crear el cantante:", error);
      return res.status(500).json({ message: "No se pudo crear el cantante" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
