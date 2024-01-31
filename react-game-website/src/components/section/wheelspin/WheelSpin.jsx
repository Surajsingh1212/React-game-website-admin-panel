import React from 'react';
import { Link } from 'react-router-dom';
import spinwheel from '../../../assets/images/games/spin-wheel-1.png';
import { FaArrowRightLong } from "react-icons/fa6";


const WheelSpin = () => {
    return (
        <div className="popular-game">
            <div className="overlay top-bottom-padding">
                <div className="container ">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 order-lg-0 order-1">
                            <div className="section-area">
                                <div className="icon-img"><img src={spinwheel} alt="#" className='games-img-border-radius' /></div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <div className="section-text">
                                <h5 className="sub-title mb-2 pop-font-size3">Earn more with</h5>
                                <h2 className="title color-white pop-font-size2">Wheel Spin Game</h2>
                                <p>The Wheel Spin Game is a fun and exciting way to win prizes. Imagine a big wheel with different colors and numbers. When you spin the wheel, it lands on a color or number, and that's how you know what prize you get.The wheel can have different colors or numbers, and each one represents a different prize. It could be a toy, a treat, or even a special game to play.Click on Play Now to play.
                                </p>
                            </div>
                            <div className="btn-area">
                                <Link to="/login" className="cmn-btn reg link">
                                    play Now
                                    <FaArrowRightLong className='ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WheelSpin
