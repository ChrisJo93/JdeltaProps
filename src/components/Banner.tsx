import React from "react"
import Image from "next/image"

const Banner = (props) => {
  if (!props) {
    return <></>
  }

  return (
    <div>
      <Image
        src={props.image}
        width={0}
        height={0}
        style={{ width: "100%", height: "50vh" }}
        alt="placeholder"
      />
    </div>
  )
}

export default Banner
