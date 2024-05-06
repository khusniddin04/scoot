import React from 'react'
import "../styles/map.css"
import map from "../images/map_img.png"
import map2 from "../images/mapimg2.png"
function Map() {
  return (
    <section className='map'>
        <div className="container">
            <div className="map__img">
                <img className='map_pic' src={map} alt="map images" />
                <img className='map_pic2' src={map2} alt="map images" />
                <ul className='map_list'>
                    <li>New York</li>
                    <li>London</li>
                    <li>Jakarta</li>
                    <li>Yokohama</li>
                </ul>
            </div>
            <div className="map__grid">
                <div className="map__title">
                    <h2>Your City Not Listed?</h2>
                </div>
                <div className="map__text">
                    <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                </div>
                <div className="map__btn">
                <button>Message Us</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Map