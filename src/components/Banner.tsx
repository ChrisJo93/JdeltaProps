import React from "react"

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen min-w-full"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1589577428135-ff35b724950b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdWlzaWFuYXxlbnwwfHwwfHx8MA%3D%3D")`,
      }}
    >
      <div className="bg-gradient-to-r from-rose-50 via-slate-100 text-slate-700 text-7xl absolute bottom-0 left-0	">
        <p className="max-w-screen">Turning keys to comfort</p>
      </div>
    </div>
  )
}

export default Banner
