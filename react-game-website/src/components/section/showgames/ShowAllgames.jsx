import React from 'react';
import { Link } from 'react-router-dom';
import jackpot from '../../../assets/images/jackpot-icon.png';
import jackpot1 from '../../../assets/images/jackpot-image-1.png';
import jackpot2 from '../../../assets/images/jackpot-image-2.png';
import jackpot3 from '../../../assets/images/jackpot-image-3.png';
import jackpot4 from '../../../assets/images/jackpot-image-4.png';
import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';

const ShowAllgames = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="total-jackpot">
        <div className="overlay pt-120 pb-120">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-area text-center">
                  <motion.h5   className="sub-title">Latest Winners</motion.h5>
                  <h3 className="title " style={{ fontSize: '2.5rem', color: 'white' }}>122 163 738,00 EUR</h3>
                  <div className="btn-area mt-40">
                    <Link to="/games" className="cmn-btn link">
                      All Jackpot Games
                      <FaArrowRightLong className='ms-2' />
                    </Link>
                  </div>
                  <div className="icon-img"><img src={jackpot} alt="#" /></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="title mb-0 d-flex justify-content-between">
                  <h4 style={{ fontSize: '1.6rem', color: 'white' }}>Jackpot Games</h4>
                  <Link to="/games" className='link' style={{ color: 'white',alignItems:'end' }}>Show All</Link>
                </div>
                <div className="row">
                  <div style={{ position: "relative" }}>
                    <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000} arrows={false} >
                      <div>
                        <div className="box">
                          <div className="img-box" style={{cursor:'pointer'}}>
                            <img src={jackpot1} alt="#" />
                          </div>
                          <div className="img-box" style={{cursor:'pointer'}}>
                            <img src={jackpot2} alt="#" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="box">
                          <div className="img-box" style={{cursor:'pointer'}}>
                            <img src={jackpot3} alt="#" />
                          </div>
                          <div className="img-box" style={{cursor:'pointer'}}>
                            <img src={jackpot1} alt="#" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="box">
                          <div className="img-box" style={{cursor:'pointer'}}>
                            <img src={jackpot4} alt="#" />
                          </div>
                          <div className="img-box" style={{cursor:'pointer'}}>
                            <img src={jackpot3} alt="#" />
                          </div>
                        </div>
                      </div>
                    </Carousel>
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

export default ShowAllgames
