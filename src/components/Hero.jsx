import React from 'react'
import "../styles/hero.css"
import rounds from "../images/Group 26.png"
function Hero({text, bg_img}) {
  return (
    <section className='hero' style={{backgroundImage:`url(${bg_img})`}}>
        <div className="container">
            <div className="hero__content">
                <h2>{text}</h2>
                <img src={rounds} alt="rounds" />
            </div>
        </div>
    </section>
  )
}

export default Hero