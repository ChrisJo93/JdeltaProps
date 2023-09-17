import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <header>Home Page</header>

      <Link href="/services">
        <button className="btn btn-blue">
          <span className="font-bold">Services</span>
        </button>
      </Link>
      <Link href="/listings">
        <button className="btn btn-blue">
          <span className="font-bold">Listings</span>
        </button>
      </Link>
    </main>
  )
}
