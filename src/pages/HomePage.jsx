import React from 'react'
import Offer from '../components/Offer'
import homepage_img from "../images/offer_homepage.png"
import offer_round from "../images/offer_rounds_img.png"
import responsive_img from "../images/responsive img.png"
import path from "../images/Path 4.png"
import HomeHero from '../components/HomeHero'
import OurService from '../components/OurService'
import ReverseOffer from '../components/ReverseOffer'
import reverse_round from "../images/reverse_round.png"
import path2 from "../images/path7.png"
import home_img from "../images/home_reverse_offer.png"
import LastOne from '../components/LastOne'

function HomePage() {
  return (
    <main>
      <HomeHero/>
      <OurService/>
      <Offer title="Easy to use riding telemetry" text="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app." btn="Learn More" img={homepage_img} position_img={path} round_img={offer_round} responsive_img={responsive_img}/>
      <ReverseOffer img={home_img} title="Coming to a city near you" text="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year." btn="Learn More" reverse_round={reverse_round} path2={path2} />
      <LastOne/>
    </main>
  )
}

export default HomePage