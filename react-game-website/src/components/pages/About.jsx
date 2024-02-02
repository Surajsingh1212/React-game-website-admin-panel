import React from 'react';
import CountUp from 'react-countup';
import Header from '../section/header/Header';
import Footer from '../section/footer/Footer';
import { Link } from 'react-router-dom';
import about1 from '../../assets/images/about-us-obj-2.png';
import about2 from '../../assets/images/about-us-illus.png';
import play1 from '../../assets/images/icon/play-icon.png';
import about3 from '../../assets/images/about-us-obj-1.png';
import icon1 from '../../assets/images/icon/why-choose-icon-1.png';
import icon2 from '../../assets/images/icon/why-choose-icon-2.png';
import icon3 from '../../assets/images/icon/why-choose-icon-3.png';
import icon4 from '../../assets/images/icon/why-choose-icon-4.png';
import icon5 from '../../assets/images/icon/why-choose-icon-5.png';
import icon6 from '../../assets/images/icon/why-choose-icon-6.png';
import Backtotop from '../section/backtotop/Backtotop';


const About = () => {
    return (
        <>
            <Header />
            <div class="banner-section inner-banner about-us">
                <div class="overlay">
                    <div class="banner-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 col-md-10">
                                    <div class="main-content">
                                        <h1 className='color-white pop-font-size4 pop-font-weight'>About Us</h1>
                                        <div class="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol class="breadcrumb d-flex align-items-center">
                                                    <li class="breadcrumb-item"><Link to="/home" className='link'>Home</Link></li>
                                                    <li class="breadcrumb-item"><Link to="#" className='link'>Pages</Link></li>
                                                    <li class="breadcrumb-item active" aria-current="page">About Us</li>
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
            <div class="about-us">
                <div class="overlay pt-120">
                    <div class="shape-item">
                        <img src={about1} alt="#" />
                    </div>
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-lg-5 position-relative order-lg-0 order-1">
                                <div class="sec-img position-relative d-rtl">
                                    <img src={about2} class="max-un bg-img" alt="#" />
                                    <div class="popup-area">
                                        <div class="magnific-area position-relative d-flex align-items-center justify-content-around">
                                            <Link class="mfp-iframe popupvideo position-absolute" to="/">
                                                <img src={play1} alt="icon" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="shape-area">
                                    <img src={about3} alt="#" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="lottery-content">
                                    <div class="section-header">
                                        <h5 class="sub-title">An adventure to explore the galaxy</h5>
                                        <h2 class="title color-white pop-font-size4">Bringing open-world galaxy to all gamers worldwide</h2>
                                        <p>Bizera is a community-based crypto casino that offers their players the best online casino experience possible!At Bizera, we are convinced that blockchain will change the online crypto gambling industry forever! Jump in and check it out for yourself! Have fun and earn crypto!</p>
                                    </div>
                                    <div class="counter-area">
                                        <div class="row cus-mar">
                                            <div class="col-6">
                                                <div class="single-box">
                                                    <h3 className='fs-2 fw-bold'><CountUp start={4000} end={5000} className='fs-2 fw-bold' /> +</h3>
                                                    <p>Premium casino games</p>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="single-box">
                                                    <h3 className='fs-2 fw-bold'><CountUp start={12} end={24} className='fs-2 fw-bold' />/<CountUp start={1} end={7} className='fs-2 fw-bold' /></h3>
                                                    <p>Industry Best Support</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="why-choose">
                <div class="overlay pt-120 pb-120">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-lg-12">
                                <div class="section-header text-center">
                                    <h5 class="sub-title">Why choose it</h5>
                                    <h2 class="title color-white pop-font-weight pop-font-size">We value all our players and we understand the thrill of online gaming</h2>
                                    <p>Mind-blowing bonuses. Zero withdrawal fees. Flash-like customer support.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row cus-mar">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-box">
                                    <div class="icon-area">
                                        <img src={icon1} alt="#" />
                                    </div>
                                    <h5 className=' color-white pop-font-weight5 pop-font-size'>VIP Membership</h5>
                                    <p>Become a Premium VIP Member for a month and enjoy the benefits that will enrich your gambling adventures.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-box">
                                    <div class="icon-area">
                                        <img src={icon2} alt="#" />
                                    </div>
                                    <h5 className=' color-white pop-font-weight5 pop-font-size'>Provably fair</h5>
                                    <p>We utilize the industry standard for provably fair gaming. Verify drawings with our or 3rd party verification tools.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-box">
                                    <div class="icon-area">
                                        <img src={icon3} alt="#" />
                                    </div>
                                    <h5 className=' color-white pop-font-weight5 pop-font-size'>Fast Withdrawals</h5>
                                    <p>Get your winnings paid out to your wallet on your own terms. Simply select the withdrawal speed and confirm.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-box">
                                    <div class="icon-area">
                                        <img src={icon4} alt="#" />
                                    </div>
                                    <h5 className=' color-white pop-font-weight5 pop-font-size'>Progressive jackpots</h5>
                                    <p>With every bet on dice and roulette you have the chance to win our ever growing jackpot.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-box">
                                    <div class="icon-area">
                                        <img src={icon5} alt="#" />
                                    </div>
                                    <h5 className=' color-white pop-font-weight5 pop-font-size'>Low house edge</h5>
                                    <p>You’re here to win often and a lot. Our games have extremely low house edge, starting at only 1%.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-box">
                                    <div class="icon-area">
                                        <img src={icon6} alt="#" />
                                    </div>
                                    <h5 className=' color-white pop-font-weight5 pop-font-size'>Secure and private</h5>
                                    <p>We don’t collect sensitive private information such as bank accounts, which makes your stay with us safe and private.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Backtotop />
        </>
    )
}

export default About
