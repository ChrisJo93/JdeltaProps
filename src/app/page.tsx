import React from "react"
import Header from "@/components/Header"
import About from "@/components/About"
import Banner from "@/components/Banner"
import CurrentListing from "@/components/CurrentListing"

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <Banner />
      </section>
      <section>
        <About />
      </section>
      <section id="listings">
        <CurrentListing />
      </section>
      <section>services</section>
      <section>contact info</section>
    </main>
  )
}
