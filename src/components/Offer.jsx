import React from 'react'
import "../styles/offer.css"
function Offer({title, text, btn, img, position_img, round_img, responsive_img}) {
  return (
    <section className='offer'>
        <div className="container">
            <div className='offer__grid'>
                <div className="offer__content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <button>{btn}</button>
                </div>
                <div className="offer__imgs">
                    <img className='offer_user_img' src={img} alt="" />
                    <img className='offer_line' src={position_img} alt="" />
                    <img className='offer_round' src={round_img} alt="" />
                    <img className='responsive_img' src={responsive_img} alt="" />
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Offer