import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/libs/db";


export async function POST(request) {
  try {
    const data = await request.json();

    const userFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return new NextResponse(JSON.stringify({
        message: "Email already exists",
      }), { status: 400 });
    }

    const usernameFound = await db.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (usernameFound) {
      return new NextResponse(JSON.stringify({
        message: "Username already exists",
      }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    const { password: _, ...user } = newUser;

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("Error in /api/auth/register:", error); 
    return new NextResponse(JSON.stringify({
      message: "An error occurred during registration.",
      error: error.message, 
    }), { status: 500 });
  }
}
