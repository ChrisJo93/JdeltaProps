import Link from "next/link"
import React from "react"
import NavBar from "../components/NavBar"
import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="">
      <Header />
      <NavBar />
      <Link href="/services">
        <button className="btn btn-blue">
          <span className="font-bold">Services</span>
        </button>
      </Link>
      <Link href="/listings">
        <button className="btn btn-blue">
          <span className="font-bold">Listings</span>
        </button>
      </Link>
    </main>
  )
}
