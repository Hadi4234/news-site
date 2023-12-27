import { NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){
  try {

    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.subscribers.create({
      data:reqBody
    });

    return NextResponse.json({ status:"success",data: result})

  } catch (error) {
    return NextResponse.json({status:"error",data:error})
    
  }
}

