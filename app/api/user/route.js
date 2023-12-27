import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(){
try {
    const result = await prisma.users.findMany({})
    return NextResponse.json({status:"success",data:result})

} catch (error) {
    return NextResponse.json({status:"error",data: error}) 
}

}
