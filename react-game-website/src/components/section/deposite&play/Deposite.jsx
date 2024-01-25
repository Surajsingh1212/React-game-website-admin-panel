import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { useTime } from 'react-timer-hook';
import CountUp from 'react-countup';

const Deposite = () => {
  const {
    seconds,
    minutes,
    hours
  } = useTime({ format: '12-hour'});
  return (
    <>
      <div className="drops-wins">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xxl-5 col-xl-6 col-md-6">
                <div className="section-header">
                  <h5 className="sub-title">Drops & Wins ( Live Casino)</h5>
                  <h2 style={{color:'white',fontSize:'4rem',fontWeight:'600'}}>Easy way for crypto  Play</h2>
                </div>
                <h2 className='fs-1 fw-bold currency'>₹ <CountUp start={4000} end={6000}/></h2>
                <div className="countdown d-flex align-items-center">
                  <span>Finishes in:</span>
                  <h6>
                    <span className="days">00</span><span>Days:</span>
                  </h6>
                  <h6>
                    <span className="hours">{hours}</span><span>Hrs:</span>
                  </h6>
                  <h6>
                    <span className="minutes">{minutes}</span><span>Mins</span>
                  </h6>
                  <h6>
                    <span className="minutes">{seconds}</span><span>Sec</span>
                  </h6>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-5 col-md-6">
                <div className="right-box">
                  <h4 className="mb-5 fs-2" style={{color:'white'}}>Deposit and Play</h4>
                  <form action="#">
                    <div className="input-field thumb-select d-flex" style={{fontFamily:'poppins'}}>
                      <input type="text" placeholder="0.001" />
                      <select className='nice-select' style={{color:'white'}}>
                        <option value="1">Rupees</option>
                        <option value="2">Doller</option>
                        <option value="3">LTC</option>
                      </select>
                    </div>
                    <div className=" mt-5 mb-4">
                      <Link to="/login" className="cmn-btn w-100 h-100 link">
                        Start Playing
                        <FaArrowRightLong className='ms-2'/>
                      </Link>
                    </div>
                    <p className='mb-1'>By Clicking you agree with our</p>
                    <div className="link-area gap-1 d-flex align-items-center justify-content-center">
                    <Link to="#" className='link'>Terms and Conditions,</Link>
                    <Link to="#" className='link'>Privacy Policy</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Deposite
