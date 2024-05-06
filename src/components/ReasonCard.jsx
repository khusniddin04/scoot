import React from 'react'

function ReasonCard({img, title, text}) {
  return (
    <div className='reason__card'>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <p>{text}</p>
    </div>
  )
}

export default ReasonCard