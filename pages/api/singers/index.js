import prisma from '@/libs/prisma'; 

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const singers = await prisma.singer.findMany();
      res.status(200).json(singers);
    } catch (error) {
      res.status(500).json({ error: "No se pudieron obtener los cantantes" });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} No Permitido`);
  }
}
