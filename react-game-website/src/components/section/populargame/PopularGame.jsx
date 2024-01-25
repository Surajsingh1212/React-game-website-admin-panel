import React from 'react';
import { Link } from 'react-router-dom';
import game1 from '../../../assets/images/popular-game-image-1.png'
import game2 from '../../../assets/images/popular-game-image-2.png'
import game3 from '../../../assets/images/popular-game-image-3.png'
import game4 from '../../../assets/images/popular-game-image-4.png'
import game5 from '../../../assets/images/popular-game-image-5.png'
import game6 from '../../../assets/images/popular-game-image-6.png'
import gameitem from '../../../assets/images/popular-game-item.png'
import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PopularGame = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    laptop: {
      breakpoint: { max: 1024, min: 840 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 840, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="popular-game">
        <div className="overlay pt-120 pb-120">
          <div className="abs-item">
            <img src={gameitem} alt="icon" />
          </div>
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-lg-6 text-center">
                <div className="section-text">
                  <h5 className="sub-title">Easy way for crypto Play</h5>
                  <h2 className="title" style={{ fontSize: '3.5rem', color: 'white' }}>Popular Game</h2>
                  <p>Unparalleled slots to give lovers of the gambling world an exciting gaming experience par excellence</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div style={{ position: "relative" }}>
                <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000} arrows={false}>
                  <div>
                    <div className="single">
                      <div className="single-box">
                        <img src={game1} alt="#" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single">
                      <div className="single-box">
                        <img src={game2} alt="#" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single">
                      <div className="single-box">
                        <img src={game3} alt="#" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single">
                      <div className="single-box">
                        <img src={game4} alt="#" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single">
                      <div className="single-box">
                        <img src={game5} alt="#" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single">
                      <div className="single-box">
                        <img src={game6} alt="#" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single">
                      <div className="single-box">
                        <img src={game3} alt="#" />
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
              <div className="col-lg-12">
                <div className="btn-area mt-40 text-center">
                  <Link to="/games" className="cmn-btn link">
                    All Games
                    <FaArrowRightLong className='ms-2' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularGame
