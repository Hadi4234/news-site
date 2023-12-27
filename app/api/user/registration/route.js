import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function POST(request) {
  try {
    const reqBody = await request.json();
    reqBody.otp = '0';
    const result = await prisma.users.create({
      data: reqBody,
    });
    return NextResponse.json({ status: 'success', data: result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 'error', data: error });
  }
}