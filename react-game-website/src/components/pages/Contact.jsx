import React from 'react'
import Header from '../section/header/Header'
import Footer from '../section/footer/Footer'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import insta from '../../assets/images/icon/instagram.png';
import twitter from '../../assets/images/icon/twitter.png';
import facebook from '../../assets/images/icon/facebook.png';
import info1 from '../../assets/images/icon/info-icon-1.png';
import info2 from '../../assets/images/icon/info-icon-2.png';
import Backtotop from '../section/backtotop/Backtotop';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="banner-section inner-banner contact">
        <div className="overlay">
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10">
                  <div className="main-content">
                    <h1 style={{color:'white',fontSize:'4rem',fontWeight:'600'}}>Contact</h1>
                    <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-flex align-items-center">
                          <li className="breadcrumb-item"><Link to="/home" className='link'>Home</Link></li>
                          <li className="breadcrumb-item"><Link to="#" className='link'>Pages</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get-in-touch">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-text">
                  <h5 className="sub-title">Contact</h5>
                  <h2 className="title" style={{color:'white',fontSize:'4rem',fontWeight:'700'}}>Get in Touch</h2>
                </div>
                <div className="cus-mar d-flex justify-content-between align-items-center">
                  <div className="single-box">
                    <div className="icon-area">
                      <img src={info1} alt="icon"/>
                    </div>
                    <h5 style={{color:'white',fontSize:'2rem',fontWeight:'600'}}>Visit Us</h5>
                    <p>D77 VibhutiKhand Lucknow Uttar Pradesh Lucknow </p>
                  </div>
                  <div className="single-box">
                    <div className="icon-area">
                      <img src={info2} alt="icon"/>
                    </div>
                    <h5 style={{color:'white',fontSize:'2rem',fontWeight:'600'}}>Get in Touch</h5>
                    <p className="phone-email">+91 34452345423</p>
                    <p className="phone-email">info@dizibizz.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form action="#">
                  <div className="col-12">
                    <div className="single-input" style={{fontFamily:'poppins'}}>
                      <label for="name">Name</label>
                      <input type="text" id="name" placeholder="Suraj Singh " autocomplete="off"/>
                    </div>
                    <div className="single-input" style={{fontFamily:'poppins'}}>
                      <label for="email">Email</label>
                      <input type="text" id="email" placeholder="your@gmail.com" autocomplete="off"/>
                    </div>
                    <div className="single-input" style={{fontFamily:'poppins'}}>
                      <label for="message">Message</label>
                      <textarea cols="30" id="message" rows="4" placeholder="Type something here"></textarea>
                    </div>
                    <div className="btn-area text-center">
                      <button className="cmn-btn">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faqs-section contact">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="section-area">
                  <h5 className="sub-title">FAQ Questions</h5>
                  <h2 className="title" style={{color:'white',fontSize:'3.3rem',fontWeight:'700'}}>Discover the most commonly asked questions</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion" id="accordionFaqs">
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{color:'white'}}>
                        What is mrx Lottery?
                      </button>
                    </h6>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFaqs">
                      <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color:'white'}}>
                        How does mrx Lottery?
                      </button>
                    </h6>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFaqs">
                      <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color:'white'}}>
                        When Lottery start?
                      </button>
                    </h6>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaqs">
                      <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{color:'white'}}>
                        How can participate in Lottery?
                      </button>
                    </h6>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFaqs">
                      <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{color:'white'}}>
                        What is the prize?
                      </button>
                    </h6>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFaqs">
                      <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-media">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-12">
                <div className="section-text text-center">
                  <h5 className="sub-title">Social Media</h5>
                  <h2 className="title mt-0" style={{color:'white',fontSize:'4rem',fontWeight:'550'}}>Follow us on</h2>
                </div>
              </div>
            </div>
            <div className="row cus-mar">
              <div className="col-xl-4 col-md-6">
                <div className="single-box">
                  <div className="icon-area">
                    <img src={facebook} alt="#"/>
                  </div>
                  <h4 style={{color:'white',fontSize:'2.5rem',fontWeight:'400'}}>Facebook</h4>
                  <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores. </p>
                  <Link>
                    Follow US
                    <div className="icon-area">
                    <FaArrowRightLong className='ms-2 '/>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="single-box">
                  <div className="icon-area">
                    <img src={twitter} alt="#"/>
                  </div>
                  <h4 style={{color:'white',fontSize:'2.5rem',fontWeight:'400'}}>Twitter</h4>
                  <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores. </p>
                  <Link>
                    Follow US
                    <div className="icon-area">
                    <FaArrowRightLong className='ms-2 '/>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="single-box">
                  <div className="icon-area">
                    <img src={insta} alt="#"/>
                  </div>
                  <h4 style={{color:'white',fontSize:'2.5rem',fontWeight:'400'}}>Instagram</h4>
                  <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores. </p>
                  <Link>
                    Follow US
                    <div className="icon-area">
                      <FaArrowRightLong className='ms-2 '/>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Backtotop/>
    </>
  )
}

export default Contact
