import React from 'react'
import "../styles/ourService.css"
import line from "../images/service_line.png"
import vertical_line from "../images/service_tablet_line.png"
import phone from "../images/phone_img.png"
import scooter from "../images/scooter.png"
import ride from "../images/ride.png"
import OurServiceCard from './OurServiceCard'
function OurService() {
  return (
    <section className='ourService'>
        <div className="container">
            <div className="ourService__wrapper">
                <div className="ourService__grid">
                    <img className='ourService__line' src={line} alt="line" />
                    <img className='ourService_line_up' src={vertical_line} alt="line" />
                    <OurServiceCard title="Locate with app" text="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away." img={phone} />
                    <OurServiceCard title="Pick your scooter" text="We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost." img={scooter}/>
                    <OurServiceCard title="Enjoy the ride" text="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps." img={ride}/>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default OurService