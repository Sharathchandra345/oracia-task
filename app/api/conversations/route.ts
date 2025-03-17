import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages, user, timestamp } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { message: "Missing or invalid conversation messages" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const conversation = {
      user,
      messages,
      timestamp: timestamp ? new Date(timestamp) : new Date(),
    };

    const result = await db.collection("conversations").insertOne(conversation);
    return NextResponse.json(
      { message: "Conversation saved", result },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error in POST /api/conversations:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
