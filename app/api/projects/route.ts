import { newConnection } from "@/db/connection";
import { Projects } from "@/models/project";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";

  await newConnection()

  try {
    const projects = await Projects.find()

    return NextResponse.json({
      projects: projects,
    })
  } catch (err) {
    console.log('error', err);
    return NextResponse.error()
  }
}