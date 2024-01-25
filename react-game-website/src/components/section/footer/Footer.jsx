import React from 'react';
import { Link } from 'react-router-dom';
import sendicon from '../../../assets/images/icon/send-icon.png';
import Logo1 from '../../../assets/images/logo2.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="footer-form">
                <div className="section-area mb-30 text-center">
                  <h4 className="title"style={{fontSize:'2rem',color:'white'}}>To Get Exclusive Benefits</h4>
                </div>
                <form action="#">
                  <div className="form-group input-area d-flex align-items-center" style={{fontFamily:'poppins'}}>
                    <input type="text" placeholder="Enter your email address"/>
                      <button className="btn-area"><img src={sendicon} alt="#"/></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-area pt-120">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-top d-flex align-items-center justify-content-between">
                  <Link to="#" className='link'>
                    <img src={Logo1} className="logo" alt="logo"/>
                  </Link>
                  <div className="footer-box">
                    <ul className="footer-link d-flex align-items-center gap-4">
                      <li><Link to="/about" className='link'>About Us</Link></li>
                      <li><Link to="/contact" className='link'>Contact</Link></li>
                      <li><Link to="/privacypolicy" className='link'>Privacy Policy</Link></li>
                      <li><Link to="/termandcondition" className='link'>Terms of Service</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-7 d-flex justify-content-center justify-content-lg-start order-lg-0 order-1">
                  <div className="copyright text-center">
                    <p>© MRX 2024 All rights reserved | Design by Team Dizital Dream .</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 d-flex justify-content-center justify-content-lg-end">
                <div className="social">
                  <ul className="footer-link gap-2 d-flex align-items-center">
                  <li><Link to="#" className='link'><FaFacebook /></Link></li>
                  <li><Link to="#" className='link'><FaInstagram /></Link></li>
                  <li><Link to="#" className='link'><FaXTwitter /></Link></li>
                  <li><Link to="#" className='link'><FaLinkedinIn /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
 </>
  )
}

export default Footer