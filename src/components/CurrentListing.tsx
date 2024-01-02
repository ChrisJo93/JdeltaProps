import React from "react"

//need an endpoint for listings in database
//endpoint needs to make new instances of a Card/Listing component

const Listing = () => {
  return (
    <div className="flex min-h-screen w-full  rounded-lg border-amber-600 border-2	border-solid	">
      <div className="w-6/12 rounded-lg border-white border-2	border-solid">
        <p>Some Image</p>
      </div>
      <div className="w-6/12 grid  justify-center rounded-lg border-amber-600 border-2	border-solid">
        <p className="self-end w-fit	">
          mi proin sed libero enim sed faucibus. Orci dapibus ultrices in
          iaculis nunc. Quisque id diam vel quam elementum pulvinar etiam non
          quam. Ornare aenean euis mi proin sed libero enim sed faucibus. Orci
          dapibus ultrices in iaculis nunc. Quisque id diam vel quam elementum
          pulvinar etiam non quam. Ornare aenean euis
        </p>
        <button>Inquire Button</button>
      </div>
    </div>
  )
}

const CurrentListing = () => {
  return (
    <div className="min-h-screen">
      <Listing />
      <Listing />
      <Listing />
      <Listing />
    </div>
  )
}

export default CurrentListing
