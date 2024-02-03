import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../section/header/Header';
import Footer from '../section/footer/Footer';
import Backtotop from '../section/backtotop/Backtotop';

const GameRules = () => {
    return (
        <>
            <Header />
            <div className="banner-section inner-banner about-us">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2 className='color-white pop-font-weight pop-font-size4'>Game Rules </h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link to="/home" className='link'>Home</Link></li>
                                                    <li className="breadcrumb-item"><Link to="#" className='link'>Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Game Rules</li>
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
            <div className="privacy-content terms">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="top-wrapper">
                                    <h4 className='color-white pop-font-size7'>Spin Wheel Game Rules</h4>
                                    <p>Get ready for an exciting journey of colors and luck with our Color Spin Challenge game. Your mission is simple – predict the color where the spin wheel will land and win big! Here's a quick guide to get you started:</p>
                                    <ul>
                                        <li>1. Pick one colors you think the spin wheel will land on.</li>
                                        <li>2. Bet a small amount of money on your selected color.</li>
                                        <li>3. Watch the colorful wheel spin and hold your breath .</li>
                                        <li>4. Try our "Custom Spin" option! Select your favorite colors and spin the wheel .</li>
                                        <li>5. If your chosen color wins, you will receive a money.</li>
                                    </ul>
                                </div>
                                <div className="top-wrapper mt-5">
                                    <h4 className='color-white pop-font-size7'>Pick Color And Win Game Rules.</h4>
                                    <p>Prepare for a thrilling experience in our Color Pick Game, where luck and your favorite colors come together! Here's a quick guide to get you started .</p>
                                    <ul>
                                        <li>1. Pick from our three vibrant colors – Red, Green, or Blue. Select the one that you think will bring you luck</li>
                                        <li>2. Bet a small amount of money on your chosen color. It's like putting your luck on the line.</li>
                                        <li>3. Your chosen color is generated randomly, just like magic! If it matches your pick, congratulations – you win and receive double the amount you bet.</li>
                                        <li>4. Winning is twice the fun! If luck is on your side, we'll double your bet amount, making your victory even sweeter.</li>
                                    </ul>
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

export default GameRules
