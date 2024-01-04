import React from "react"
import Link from "next/link"

function Footer() {
  return (
    <footer className="grid grid-cols-2 place-items-center gap-4 p-5">
      {/* Testing self-end with this div */}
      <div>
        <p className="text-3xl">JDELTA Properties</p>
      </div>
      <div>
        <p className="text-lg">1111 JDELTA Drive</p>
        <p className="text-md">Candyland, USA</p>
        <p className="text-md">Zip Code</p>
      </div>
      <Link href="">
        <button>
          <span className="text-2xl hover:bg-blue-600 ">JDELTA@gmail.com</span>
        </button>
      </Link>
      <div>
        <span className="text-xl">Phone Number:</span>
        <p className="text-md">555-555-5555</p>
      </div>
    </footer>
  )
}

export default Footer
