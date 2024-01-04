import React from "react"
import About from "@/components/About"
import Banner from "@/components/Banner"
import CurrentListing from "@/components/CurrentListing"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <section>
        <Banner />
      </section>
      <section>
        <About />
      </section>
      <section id="listings">
        <CurrentListing />
      </section>
      <section>
        <Footer />
     </section>
    </main>
  )
}
