import React from 'react'
import Hero from '../components/Hero'
import map from "../images/about_bg.png"
import aboutpage_img from "../images/user_aboutpage.png"
import offer_round from "../images/offer_rounds_img.png"
import responsive_img from "../images/path5.png"
import path from "../images/Group 13.png"
import Offer from '../components/Offer'
import "../styles/aboutpage.css"
import ReverseOffer from '../components/ReverseOffer'
import Reason from '../components/Reason'
import img from "../images/reverse_img.png"
import reverse_round from "../images/reverse_round.png"
import path2 from "../images/path7.png"
import Faqs from '../components/Faqs'
function AboutPage() {
  return (
    <main className='aboutpage'>
      <Hero bg_img={map} text="About" />
      <Offer title="Mobility for the digital era" text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips." img={aboutpage_img} round_img={offer_round} responsive_img={responsive_img} position_img={path} />
      <ReverseOffer img={img} reverse_round={reverse_round} path2={path2} title="Better urban living" text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride." btn="Learn More" />
      <Reason title="Our values"/> 
      <Faqs/>
    </main>
  )
}

export default AboutPage