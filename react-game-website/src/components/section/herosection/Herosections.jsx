import React from 'react'
import { Link } from 'react-router-dom';
import counter1 from '../../../assets/images/icon/counter-icon-1.png'
import counter2 from '../../../assets/images/icon/counter-icon-2.png'
import { FaArrowRightLong } from "react-icons/fa6";
import CountUp from 'react-countup';
import { useTime } from 'react-timer-hook';

const Herosections = () => {
    const {
        seconds,
        minutes,
        hours,
        ampm,
    } = useTime({ format: '12-hour' });
    return (
        <>
            <div className="banner-section index">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-8">
                                    <div className="main-content">
                                        <div className="top-area section-text">
                                            <h5 className="sub-title">Welcome To Mrx Gaming World</h5>
                                            <h1 className="title color-white pop-font-size4">Next Level <span>Mrx Gaming</span> Platform</h1>
                                            <p className="xlr">Mind-blowing bonuses. Zero withdrawal fees. Flash-like customer</p>
                                            <div className="btn-area mt-30">
                                                <Link to="/signup" className="cmn-btn reg link">Sign Up
                                                    <FaArrowRightLong className='ms-2' />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter-section">
                    <div className="container ">
                        <div className="main-content">
                            <div className="row cus-mar">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-box d-flex align-items-center">
                                        <div className="img-area">
                                            <img src={counter1} alt="icon" />
                                        </div>
                                        <div className="text-area">
                                            <h5 className='color-white'>Weekly Draw Prizes</h5>
                                            <h3 className='fs-2 fw-bold'>₹ <CountUp start={1200} end={1350} /></h3>
                                            <p>Next Draw in <span>0d {hours}h {minutes}m {seconds}s {ampm}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-box second d-flex align-items-center">
                                        <div className="img-area">
                                            <img src={counter2} alt="icon" />
                                        </div>
                                        <div className="text-area">
                                            <h5 className='color-white'>Paid Overall</h5>
                                            <h3 className='fs-2 fw-bold'>₹ <CountUp start={11000} end={19230433} /></h3>
                                            <p>Overall Winnings <span>paid to players</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosections
