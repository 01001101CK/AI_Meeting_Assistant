import connectMongoDB from "@/libs/mongodb";
import Summary from "@/models/summary";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { meeting_title, summary } = await request.json();
    await connectMongoDB();
    await Summary.create({ meeting_title, summary });
    return NextResponse.json({ message: "Summary Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const summaries = await Summary.find();
    return NextResponse.json({ summaries });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Summary.findByIdAndDelete(id);
    return NextResponse.json({ message: "Summary deleted" }, { status: 200 });
}
