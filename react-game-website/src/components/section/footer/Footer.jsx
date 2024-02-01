import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import sendicon from '../../../assets/images/icon/send-icon.png';
import Logo1 from '../../../assets/images/logo2.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const footerMenu = [
    { label: 'About Us', to: '/about', exact: true },
    { label: 'Contact', to: '/contact', exact: true },
    { label: 'Privacy Policy', to: '/privacypolicy', exact: true },
    { label: 'Terms of Service', to: '/termandcondition', exact: true },
  ]
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="footer-form">
                <div className="section-area mb-30 text-center">
                  <h4 className="title color-white pop-font-size5">To Get Exclusive Benefits</h4>
                </div>
                <form action="#">
                  <div className="form-group input-area d-flex align-items-center pop-font ">
                    <input type="text" placeholder="Enter your email address" />
                    <button className="btn-area"><img src={sendicon} alt="#" /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-area pt-120">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-top d-flex align-items-center justify-content-between">
                  <Link to="/" className='link'>
                    <img src={Logo1} className="logo" alt="logo" />
                  </Link>
                  <div className="footer-box">
                    <ul className="footer-link d-flex align-items-center gap-4">
                      {footerMenu.map((item, index) => (
                        <li key={index} className='nav-item'><NavLink to={item.to} className='nav-link link' exact={item.exact.toString()}>{item.label}</NavLink></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-7 d-flex justify-content-center justify-content-lg-start order-lg-0 order-1">
                  <div className="copyright text-center">
                    <p>© MRX 2024 All rights reserved . </p>
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
