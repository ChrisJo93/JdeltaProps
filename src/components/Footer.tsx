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
        <p className="text-2xl">Address</p>
        <p className="text-sm">1111 JDELTA Drive</p>
        <p className="text-sm">Shreveport, Louisiana</p>
        <p className="text-sm">71101</p>
      </div>
      <Link href="mailto:JDELTA@gmail.com">
        <button>
          <span className="text-2xl">JDELTA@gmail.com</span>
        </button>
      </Link>
      <div>
        <span className="text-xl">Phone Number:</span>
        <p className="text-sm">318-555-5555</p>
      </div>
    </footer>
  )
}

export default Footer
