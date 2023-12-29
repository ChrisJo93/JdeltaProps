import React from "react"
const Header = () => {
  return (
    <div className="h-20 grid gap-4 grid-cols-2 bg-rose-50 text-slate-700">
      <div className="ml-8 text-2xl self-center">JDelta Properties</div>

      <button className="mr-8 text-2xl self-center justify-self-end">
        <a href="#listings">Listings</a>
      </button>
    </div>
  )
}

export default Header
