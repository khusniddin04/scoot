import React from 'react'

function OurServiceCard({title, text, img}) {
  return (
    <div className="ourService__content">
        <div className="ourService__imgs">
            <img src={img} alt="" />
        </div>
        <div className="ourService__text">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default OurServiceCard