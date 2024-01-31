import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import cardgameimage from '../../../assets/images/games/Card-1.png';


const CardGame = () => {
    return (
        <div className="game-card-section">
            <div className="overlay top-bottom-padding">
                <div className="container ">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 order-lg-0 order-1 mt-3">
                            <div className="section-text">
                                <h5 className="sub-title mb-2 pop-font-size3">Earn more with</h5>
                                <h2 className="title color-white pop-font-size2">Choose And Win</h2>
                                <p>The Card Game is a simple and fun game where you pick a card, and if your card matches the special card, you win! It's all about choosing the right card and having a good time with friends.he special card can be anything chosen before the game starts. The excitement comes from not knowing which card will be the winning one.Click on Play Now to play.</p>
                            </div>
                            <div className="btn-area">
                                <Link to="/login" className="cmn-btn reg link">
                                    paly Now
                                    <FaArrowRightLong className='ms-2' />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-area">
                                <div className="icon-img"><img src={cardgameimage} alt="#" className='games-img-border-radius' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardGame
