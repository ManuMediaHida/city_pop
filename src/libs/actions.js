import prisma from '@/libs/prisma'; 

export async function createSinger(data) {
  return await prisma.singer.create({
    data,
  });
}

export async function getAllSingers() {
  return await prisma.singer.findMany();
}

export async function getSingerById(id) {
  return await prisma.singer.findUnique({
    where: { id: parseInt(id, 10) },
  });
}

export async function updateSinger(id, data) {
  return await prisma.singer.update({
    where: { id: parseInt(id, 10) },
    data,
  });
}

export async function deleteSinger(id) {
  return await prisma.singer.delete({
    where: { id: parseInt(id, 10) },
  });
}

export async function createSong(data) {
  return await prisma.song.create({
    data,
  });
}

export async function getAllSongs() {
  return await prisma.song.findMany({
    include: {
      singer: true, 
    },
  });
}

export async function getSongById(id) {
  return await prisma.song.findUnique({
    where: { id: parseInt(id, 10) },
    include: {
      singer: true, 
    },
  });
}

export async function updateSong(id, data) {
  return await prisma.song.update({
    where: { id: parseInt(id, 10) },
    data,
  });
}

export async function deleteSong(id) {
  return await prisma.song.delete({
    where: { id: parseInt(id, 10) },
  });
}