import { newConnection } from "@/db/connection";
import { Projects } from "@/models/projects";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";

    await newConnection()

    try {
        const projects = await Projects.find()

        console.log('projects', projects)

        return NextResponse.json({
            example: 'Hello World!'
        })
    } catch (err) {
        console.log('error', err);
        return NextResponse.error()
    }
}