import React from 'react';
import { Link } from 'react-router-dom';
import slotmachine from '../../../assets/images/games/7-casino-2.png';
import { FaArrowRightLong } from "react-icons/fa6";


const SlotmachineGame = () => {
    return (
        <div className="game-slotmachine-section">
            <div className="overlay top-bottom-padding">
                <div className="container ">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 order-lg-0 order-1 mt-3">
                            <div className="section-area">
                                <div className="icon-img"><img src={slotmachine} alt="#" className='games-img-border-radius' /></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-text">
                                <h5 className="sub-title mb-2 pop-font-size3">Earn more with</h5>
                                <h2 className="title color-white pop-font-size2"> 777 Casino Game</h2>
                                <p>The 777 Casino Game is a super simple and exciting game where you try to match three lucky sevens to win big! It's like a virtual slot machine that you can play for fun.The magic number in this game is "777." When you see three sevens in a row, you win virtual coins or tokens. The more you play, the more chances you have to win cool prizes.Click on Play Now to play.</p>
                            </div>
                            <div className="btn-area">
                                <Link to="/login" className="cmn-btn reg link" >
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

export default SlotmachineGame
