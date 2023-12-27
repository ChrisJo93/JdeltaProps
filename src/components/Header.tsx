import React from "react"

const Header = () => {
  return (
    <div className="h-20 grid grid gap-4 grid-cols-2 bg-white text-slate-900">
      <div className="ml-8 text-2xl self-center">JDelta Properties</div>

      <button className="mr-8 text-2xl self-center justify-self-end">
        Listings
      </button>
    </div>
  )
}

export default Header
