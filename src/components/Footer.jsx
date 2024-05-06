import React from 'react'
import "../styles/footer.css"
import logo from "../images/scoot2.png"
import { NavLink } from 'react-router-dom'
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import appstore from "../images/appstore.png"
import googleplay from "../images/google_play.png"
function Footer() {
  return (
    <footer>
        <div className="footer__wrapper">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__top__wrapper">
                        <h1>Sign up and Scoot off today</h1>
                        <div className="footer__imgs">
                          <img className='stores' src={googleplay} alt="" />
                          <img className='stores' src={appstore} alt="" />
                        </div>  
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
               <div className="container">
                <div className="footer__bottom__wrapper">
                <div className="footer__nav">
                    <img src={logo} alt="" />
                    <nav>
                        <ul>
                           <li><NavLink className="footer_title" to="/about">About</NavLink></li> 
                           <li><NavLink className="footer_title" to="/location">Locations</NavLink></li> 
                           <li><NavLink  className="footer_title"to="/career">Careers</NavLink></li> 
                        </ul>     
                    </nav>
                </div>
                <div className="footer__cta">
                    <IoLogoFacebook className='footer_icon'/>
                    <FaTwitter className='footer_icon'/>
                    <FaInstagram className='footer_icon'/>
                </div>
                </div>
               </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer