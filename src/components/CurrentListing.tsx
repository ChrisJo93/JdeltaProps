import React from "react"

//need an endpoint for listings in database
//endpoint needs to make new instances of a Card/Listing component

const Listing = () => {
  return (
    <div className="flex min-h-52	w-full">
      <div
        className="w-6/12 p-52 flex rounded-lg bg-cover bg-center m-5"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww")`,
        }}
      ></div>

      <div className="grid w-6/12 grid p-32 justify-items-center ">
        <p className="self-center w-fit mb-3">
          mi proin sed libero enim sed faucibus. Orci dapibus ultrices in
          iaculis nunc. Quisque id diam vel quam elementum pulvinar etiam non
          quam. Ornare aenean euis mi proin sed libero enim sed faucibus. Orci
          dapibus ultrices in iaculis nunc. Quisque id diam vel quam elementum
          pulvinar etiam non quam. Ornare aenean euis
        </p>

        <button className="py-2 px-5 h-fit w-fit rounded-lg bg-blue-500 border-blue-500 border-2 border-solid">
          Inquire
        </button>
      </div>
    </div>
  )
}

const CurrentListing = () => {
  return (
    <div>
      <div className="flex text-6xl	justify-center">Current Listings</div>
      <Listing />
      <Listing />
      <Listing />
      <Listing />
    </div>
  )
}

export default CurrentListing
