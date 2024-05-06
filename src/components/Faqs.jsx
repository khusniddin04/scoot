import React from 'react'
import "../styles/faqs.css"
import arrow from "../images/arrow.png"
import { useRef } from 'react'
function Faqs() {
    let faq = useRef()
    let faq2 = useRef()
    function openAccordion()  {
        faq.current.classList.toggle("active")
    }
    function openAccordion2()  {
        faq2.current.classList.toggle("active")
    }
  return (
    <section className='Faqs'>
        <div className="container">
            <h1>FAQs</h1>
            <div className="faqs__grid">
                <div className="faqs__title">
                    <h2>How it works</h2>
                </div>
                <div className="faq__wrapper">
                    <div onClick={openAccordion} ref={faq} className="faq">
                    <div className="faqs__question">
                        <h4>How do I download the app?</h4>
                        <img src={arrow} className='faqs_icon'  alt="" />
                    </div>
                    <div className="faqs__answer">
                        <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
                    </div>
                    </div>
                    <div className="faq">
                    <div className="faqs__question">
                        <h4>Can I find a nearby Scoots?</h4>
                        <img src={arrow} className='faqs_icon'  alt="" />
                    </div>
                    <div className="faqs__answer">
                        <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
                    </div>
                    </div>
                    <div className="faq">
                    <div className="faqs__question">
                        <h4>Do I need a license to ride?</h4>
                        <img src={arrow} className='faqs_icon'  alt="" />
                    </div>
                    <div className="faqs__answer">
                        <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="faqs__grid">
                <div className="faqs__title">
                    <h2>Safe driving</h2>
                </div> 
                <div className="faq__wrapper">
                    <div onClick={openAccordion2} ref={faq2} className="faq">
                    <div className="faqs__question">
                        <h4>Should I wear a helmet?</h4>
                        <img src={arrow} className='faqs_icon'  alt="" />
                    </div>
                    <div className="faqs__answer">
                        <p>Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.</p>
                    </div>
                    </div>
                    <div className="faq">
                    <div className="faqs__question">
                        <h4>How about the rules & regulations?</h4>
                        <img src={arrow} className='faqs_icon'  alt="" />
                    </div>
                    <div className="faqs__answer">
                        <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
                    </div>
                    </div>
                    <div className="faq">
                    <div className="faqs__question">
                        <h4>What if I damage my Scoot?</h4>
                        <img src={arrow} className='faqs_icon'  alt="" />
                    </div>
                    <div className="faqs__answer">
                        <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>
                    </div>
                    </div>
                </div>
            </div>
                
        </div>
    </section>
  )
}

export default Faqs