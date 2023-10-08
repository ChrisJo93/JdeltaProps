import React from "react"
import Link from "next/link"


function NavBar() {
  return (
    <div className="flex justify-center gap-3">
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
        <Link href="#">
      <button>
        <span className="font-bold">NavLink4</span>
      </button>
      </Link>
    </div>
  )
}

export default NavBar
