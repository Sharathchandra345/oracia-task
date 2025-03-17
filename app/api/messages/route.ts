import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text } = body;

    if (!text) {
      return NextResponse.json(
        { message: "Missing message text" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(); 

    const message = {
      user: "Fabio Rossi",
      text,
      timestamp: new Date(),
    };

    const result = await db.collection("messages").insertOne(message);
    return NextResponse.json(
      { message: "Message saved", result },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
