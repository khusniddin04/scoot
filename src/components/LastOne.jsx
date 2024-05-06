import React from 'react'
import special_img from "../images/special__img.png"
import special from "../images/special.png"
import offer_round from "../images/offer_rounds_img.png"
import "../styles/lastone.css"
function LastOne() {
  return (
    <section className='last'>
        <div className="container">
        <div className="container">
            <div className='last__grid'>
                <div className="last__content">
                    <h2>Zero hassle payments</h2>
                    <p>Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                    <button>Learn More</button>
                </div>
                <div className="last__imgs">
                    <img className='last_user_img' src={special_img} alt="" />
                    <img className='last_line' src={special} alt="" />
                    <img className='last_round' src={offer_round} alt="" />
                    {/* <img className='responsive_img' src={responsive_img} alt="" /> */}
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default LastOne