import React from 'react'
import "../styles/reverseOffer.css"
function ReverseOffer({img, path2, reverse_round, title, text, btn}) {
  return (
    <section className='reverse_offer'>
        <div className="container">
        <div className='reverse_offer__grid'>
                <div className="reverse_offer__imgs">
                    <img className='reverse_offer_user_img' src={img} alt="" />
                    <img className='reverse_offer_line' src={path2} alt="" />
                    <img className='reverse_offer_round' src={reverse_round} alt="" />
                </div>
                <div className="reverse_offer__content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <button>{btn}</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ReverseOffer