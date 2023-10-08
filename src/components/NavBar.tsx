import React from "react"
import Link from "next/link"

function NavBar() {
  return (
    <header className="flex justify-center gap-10">
      <Link href="/services">
        <button>
          <span className="font-bold">Services</span>
        </button>
      </Link>
      <Link href="/listings">
        <button>
          <span className="font-bold">Listings</span>
        </button>
      </Link>
      <Link href="/properties">
        <button>
          <span className="font-bold">Properties</span>
        </button>
      </Link>
    </header>
  )
}

export default NavBar
