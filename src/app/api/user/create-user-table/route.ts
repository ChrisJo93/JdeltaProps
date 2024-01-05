import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const result = await sql`CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      first_name varchar(255),
      last_name varchar(255),
      email varchar(255) UNIQUE,
      hashed_password varchar(255),
      created_date TIMESTAMP DEFAULT current_timestamp
    )`

    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
