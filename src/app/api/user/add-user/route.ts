import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"
import { encryptPassword } from "@/app/modules/encrpytion"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const firstName = searchParams.get("firstName")
  const lastName = searchParams.get("lastName")
  const email = searchParams.get("email")
  const hashed_password = encryptPassword(searchParams.get("password"))

  try {
    if (!email || !hashed_password)
      throw new Error("email and password required")
    await sql`INSERT INTO users (first_name, last_name, email, hashed_password) VALUES (${firstName}, ${lastName}, ${email} ,${hashed_password});`
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  const users = await sql`SELECT * FROM users;`
  return NextResponse.json({ users }, { status: 200 })
}
