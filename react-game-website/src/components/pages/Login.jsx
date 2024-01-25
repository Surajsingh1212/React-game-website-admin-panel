import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const Login = () => {
  return (
    <div className='main'>
      <div className='box12 p-5'>
        <div className="form-area">
          <form action="#">
            <div className="section-text text-center">
              <h3 className="title pt-2" style={{ fontSize: '2.5rem', color: 'white' }}>Welcome Back</h3>
              <p>Not a member ? <Link to="/signup" className="reg-btn link" style={{color:'#a1ff00'}}>Register</Link></p>
            </div>
            <div className="input-area d-flex align-items-center" style={{fontFamily:'poppins'}}>
              <CiMail className='fs-3' style={{color:'white'}}/>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-area d-flex align-items-center" style={{fontFamily:'poppins'}}>
              <CiLock className='fs-3' style={{color:'white'}}/>
              <input type="text" placeholder="Password"/>
            </div>
            <div className="checkbox-item d-flex justify-content-between">
              <label className="checkbox-single d-flex align-items-center">
                <span className="content-area">
                  <span className="checkbox-area d-flex">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </span>
                  <span className="item-title d-flex align-items-center">
                    <span>Remember</span>
                  </span>
                </span>
              </label>
              <p><Link to='#' className='link' style={{ color: 'white' }}>Forget Password</Link></p>
            </div>
            <div className="btn-area text-center">
              <Link to="/admin/dashboard" className="cmn-btn mt-4 link">Login
                <FaArrowRightLong className='ms-2' />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
