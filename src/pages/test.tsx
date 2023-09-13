import Link from "next/link"
import React from "react"

const Test = () => {
  return (
    <>
      rainbows testing precommit install{" "}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href={"/ServicesPage"}>Services Page Button</Link>
      </button>
    </>
  )
}

export default Test
