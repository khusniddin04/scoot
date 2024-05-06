import React from 'react'
import "../styles/homeHero.css"
import bg_img from "../images/bg_homeHero.jpg"
import line from "../images/line.svg"
import homeHero_rounds from "../images/homeHero_rounds.png"
import arrow from "../images/homeHero__arrow.svg"
function HomeHero() {
  return (
    <section className='homeHero' style={{backgroundImage: `url(${bg_img})`}}>
        <div className="container">
            <h1>Scooter sharing made simple</h1>
            <div className="homeHero__content">
                <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                <button>Get Scootin</button>
                <img className='homeHero__line' src={line} alt="line" />
                <img className='homeHero_rounds' src={homeHero_rounds} alt="homeHero rounds" />
                <img className='homeHero__arrow' src={arrow} alt="line to arrow" />
            </div>
        </div>
    </section>
  )
}

export default HomeHero