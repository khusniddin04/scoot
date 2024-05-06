import React from 'react'
import "../styles/reason.css"
import ReasonCard from './ReasonCard'
import reason_img1 from "../images/reason_img.png" 
import reason_img2 from "../images/reasonimg2.png" 
import reason_img3 from "../images/reasonimg3.png" 
import "../styles/reason.css"
function Reason({title}) {
  return (
    <section className='reason'>
        <div className="container">
            <h2>{title}</h2>
            <div className="reason__grid">
                <ReasonCard img={reason_img1} title="Our tech" text="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"/>
                <ReasonCard img={reason_img2} title="Our integrity" text="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."/>
                <ReasonCard img={reason_img3} title="Our community" text="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."/>
            </div>
        </div>
    </section>
  )
}

export default Reason