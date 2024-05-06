import React from 'react'
import Hero from '../components/Hero'
import bg_img from "../images/two_page_bg.png"
import Offer from '../components/Offer'
import offer_img from "../images/offer_img.jpg"
import offer_round from "../images/offer_rounds_img.png"
import responsive_img from "../images/responsive img.png"
import path from "../images/Path 4.png"
import Reason from '../components/Reason'
import Employees from '../components/Employees'
function CareersPage() {
  return (
    <main>
      <Hero bg_img={bg_img} text="Careers" />
      <Offer title="Care to join our mission?" text="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!" btn="Say Hello" img={offer_img} position_img={path} round_img={offer_round} responsive_img={responsive_img} />  
      <Reason title="Why join us?"/> 
      <Employees/>
    </main>
  )
}

export default CareersPage