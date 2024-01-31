import React from 'react';
import { Link } from 'react-router-dom';
import aviator from '../../../assets/images/games/aviator-1.png';
import { FaArrowRightLong } from "react-icons/fa6";


const AviatorGame = () => {
    return (
        <div className="popular-game">
            <div className="overlay top-bottom-padding">
                <div className="container ">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 order-lg-0 order-1 mt-3">
                            <div className="section-area">
                                <div className="icon-img"><img src={aviator} alt="#" className='games-img-border-radius' /></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-text">
                                <h5 className="sub-title mb-2 pop-font-size3">Earn more with</h5>
                                <h2 className="title color-white pop-font-size2">Aviator Game</h2>
                                <p>The Aviator Game is super simple and lots of fun! Imagine you have a graph, a cool helicopter, and you get to predict how high the helicopter will fly. If your prediction matches the actual height, you win!.You can predict the height in any units you like – it could be numbers, stars, or even smiley faces. The goal is to guess where the helicopter will reach on the graph.Click on Play Now to play.</p>
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

export default AviatorGame
