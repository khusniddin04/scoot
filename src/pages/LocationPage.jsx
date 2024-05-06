import React from 'react'
import Hero from '../components/Hero'
import Map from '../components/Map'
import bg_img from "../images/two_page_bg.png"
function LocationPage() {
  return (
    <main>
      <Hero bg_img={bg_img} text="Locations"/>
      <Map/>
    </main>
  )
}

export default LocationPage