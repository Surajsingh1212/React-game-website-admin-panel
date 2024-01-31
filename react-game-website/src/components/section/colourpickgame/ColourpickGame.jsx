import React from 'react';
import { Link } from 'react-router-dom';
import colorpick from '../../../assets/images/games/color-pick-1.png';
import { FaArrowRightLong } from "react-icons/fa6";


const ColourpickGame = () => {
    return (
        <div className="game-colourpick-section">
            <div className="overlay top-bottom-padding">
                <div className="container ">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 order-lg-0 order-1 mt-3">
                            <div className="section-text">
                                <h5 className="sub-title mb-2 pop-font-size3">Earn more with</h5>
                                <h2 className="title color-white pop-font-size2">Pick Color And win</h2>
                                <p>The Parity Game is super easy and tons of fun! It's all about picking your favorite color, and if your color matches a special color, you win! Let's dive into this simple and exciting game.The special color can be anything fun and exciting. The mystery and surprise make the game extra special.Click on Play Now to play.</p>
                            </div>
                            <div className="btn-area">
                                <Link to="/login" className="cmn-btn reg link">
                                    play Now
                                    <FaArrowRightLong className='ms-2' />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-area">
                                <div className="icon-img"><img src={colorpick} alt="#" className='games-img-border-radius' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColourpickGame
