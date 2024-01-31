import React from 'react';
import { Link } from 'react-router-dom';
import jackpot from '../../../assets/images/jackpot-icon.png';
import showGame1 from '../../../assets/images/showAllGames/show-game-1.png';
import showGame2 from '../../../assets/images/showAllGames/show-game-2.png';
import showGame3 from '../../../assets/images/showAllGames/show-game-3.png';
import showGame4 from '../../../assets/images/showAllGames/show-game-4.png';
import showGame5 from '../../../assets/images/showAllGames/show-game-5.png';
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
  const sliderItem = [
    { image1: showGame1, image2: showGame2 },
    { image1: showGame3, image2: showGame4 },
    { image1: showGame5, image2: showGame1 },
  ]
  return (
    <>
      <div className="total-jackpot">
        <div className="overlay pt-120 pb-120">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-area text-center">
                  <motion.h5 className="sub-title">Latest Winning Amount</motion.h5>
                  <h3 className="title color-white pop-font-size6">₹ 122 738,00 </h3>
                  <div className="btn-area mt-40">
                    <Link to="/games" className="cmn-btn link">
                      All Mrx Games
                      <FaArrowRightLong className='ms-2' />
                    </Link>
                  </div>
                  <div className="icon-img"><img src={jackpot} alt="mrxgame" /></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="title mb-0 d-flex justify-content-between">
                  <h4 className='color-white pop-font-size5'>Mrx All Games</h4>
                  <Link to="/games" className='link color-white text-end'  >Show All</Link>
                </div>
                <div className="row">
                  <div style={{ position: "relative" }}>
                    <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000} arrows={false} >
                      {sliderItem.map((item, index) => (
                        <div key={index}>
                          <div className="box">
                            <div className="img-box show-game-all-section-img" >
                              <img src={item.image1} alt="#" />
                            </div>
                            <div className="img-box show-game-all-section-img" >
                              <img src={item.image2} alt="#" />
                            </div>
                          </div>
                        </div>
                      ))}
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
