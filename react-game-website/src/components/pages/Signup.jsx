import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Signup = () => {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='box12 p-5'>
            <div className="form-area">
              <form action="#">
                <div className="section-text text-center">
                  <h3 className="title" style={{ fontSize: '2.5rem', color: 'white' }}>Ready to get started?</h3>
                  <p>Already have an member ? <Link to="/login" className="log-btn link" style={{ color: '#a1ff00' }}>Login</Link></p>
                </div>
                <div className="input-area d-flex align-items-center"style={{fontFamily:'poppins'}}>
                  <CiUser className='fs-3' style={{ color: 'white' }} />
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="input-area d-flex align-items-center" style={{fontFamily:'poppins'}}>
                  <IoCallOutline className='fs-3' style={{ color: 'white' }} />
                  <input type="text" placeholder="Mobile" />
                </div>
                <div className="input-area d-flex align-items-center" style={{fontFamily:'poppins'}}>
                  <CiMail className='fs-3' style={{ color: 'white' }} />
                  <input type="text" placeholder="Email" />
                </div>
                <div className="input-area d-flex align-items-center" style={{fontFamily:'poppins'}}>
                  <CiLock className='fs-3' style={{ color: 'white' }} />
                  <input type="text" placeholder="Password" />
                </div>
                <div className="sidebar-single-item">
                  <label className="checkbox-single d-flex">
                    <span className="content-area">
                      <span className="checkbox-area d-flex">
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </span>
                      <span className="item-title d-flex align-items-center">
                        <span>I am at least 18 years of age and I have read,
                          accepted and agreed to the <u><Link to="#" className='link'>Privacy Policy</Link>,
                            Bonus T&C, <Link to="#" className='link'>Terms and Conditions</Link></u>
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="checkbox-single d-flex align-items-center">
                    <span className="content-area">
                      <span className="checkbox-area d-flex">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </span>
                      <span className="item-title d-flex align-items-center">
                        <span>I want to receive promotions by e-mail.</span>
                      </span>
                    </span>
                  </label>
                  <div className="btn-area text-center">
                    <Link to='#' className="cmn-btn mt-4 link">Get Start Now
                      <FaArrowRightLong className='ms-2' />
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>

  )
}

export default Signup
