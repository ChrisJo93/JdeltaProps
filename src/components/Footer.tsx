import React from "react"
import Link from "next/link"

function Footer() {
  return (
      <footer className="flex justify-center gap-4 p-5">
          {/* Testing self-end with this div */}
      <Link href="mailto:JDELTA@gmail.com">
        <button>
          <span>JDELTA@gmail.com</span>
        </button>
      </Link>
          <div className="flex self-end gap-4"> 
          <span>Phone: 318-555-5555</span>
              </div>
    </footer>
  )
}

export default Footer