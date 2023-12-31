import React from "react"

const Banner = () => {
  return (
    <div
      className="grid bg-cover bg-center bg-no-repeat min-h-screen min-w-full "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1589577428135-ff35b724950b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdWlzaWFuYXxlbnwwfHwwfHx8MA%3D%3D")`,
      }}
    >
      <div className="text-7xl absolute bottom-0 left-0 text-rose-100	">
        <p className="max-w-screen-sm">Turning keys into Comfort</p>
      </div>
    </div>
  )
}

export default Banner
