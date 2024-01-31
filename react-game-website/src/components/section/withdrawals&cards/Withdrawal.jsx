import React from 'react';
import { Link } from 'react-router-dom';
import features1 from '../../../assets/images/icon/features-icon-1.png'
import features2 from '../../../assets/images/icon/features-icon-2.png'
import features3 from '../../../assets/images/icon/features-icon-3.png'
import features4 from '../../../assets/images/icon/features-icon-4.png'
import { FaArrowRightLong } from "react-icons/fa6";
import CountUp from 'react-countup';

const Withdrawal = () => {
  return (
    <>
      <div className="features">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-9">
                <div className="section-top">
                  <div className="section-text">
                    <h5 className="sub-title">The Fastest Withdrawals In The Gaming Platforms</h5>
                    <h2 className="title color-white pop-font-size" >Enjoy fast, secure withdrawals at Casino Mrx</h2>
                    <p>MrX Gaming Platform they've made it super easy to handle your money-your earnings in a safe and fast way withdrawals.</p>
                  </div>
                  <div className="btn-area">
                    <Link to="/signup" className="cmn-btn link">
                      Enter our Universe
                      <FaArrowRightLong className='ms-2' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row cus-mar pt-120">
              <div className="col-xl-3 col-sm-6">
                <div className="single-box">
                  <div className="icon-box">
                    <img src={features1} alt="#" />
                  </div>
                  <h3 className='fw-bold fs-1 color-white'><CountUp start={1} end={100} /></h3>
                  <p>Welcome Bonus</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="single-box second">
                  <div className="icon-box">
                    <img src={features2} alt="#" />
                  </div>
                  <h3 className='fw-bold fs-1 color-white'><CountUp start={1} end={10} />%</h3>
                  <p>Cash Back </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="single-box third">
                  <div className="icon-box">
                    <img src={features3} alt="#" />
                  </div>
                  <h3 className='fw-bold fs-1 color-white'><CountUp start={0} end={10} />+</h3>
                  <p>Games</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="single-box fourth">
                  <div className="icon-box">
                    <img src={features4} alt="#" />
                  </div>
                  <h3 className='fw-bold fs-1 color-white'><CountUp start={1} end={100} />%</h3>
                  <p>Scure & Stable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Withdrawal
