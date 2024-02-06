import { Flex } from 'antd';
import React, { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { Col, Row } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import '../../../assets/css/colourpickgame.css';
import voilet from '../../../assets/images/colourpick/Violet.png';
import blue from '../../../assets/images/colourpick/blue.png';
import red from '../../../assets/images/colourpick/red.png';
import waiting from '../../../assets/images/colourpick/waiting.png';
import winblue from '../../../assets/images/colourpick/winblue.png';
import winred from '../../../assets/images/colourpick/winred.png';
import winvoilet from '../../../assets/images/colourpick/winvoilet.png';

const ColorpickGame = () => {
    const [result, setResult] = useState(null);
    const [userBet, setUserBet] = useState('');
    const [userBalance, setUserBalance] = useState(100);
    const [companyBalance, setCompanyBalance] = useState(1000);
    const [betAmount, setBetAmount] = useState(0);
    const [message, setMessage] = useState('');
    const [secondsLeft, setSecondsLeft] = useState(59);
    const [isGameRunning, setIsGameRunning] = useState(true);
    const [betCounter, setBetCounter] = useState(0);
    const [hasPlacedBet, setHasPlacedBet] = useState(false);
    const [isExploading, setIsExploading] = useState(false);
    const [numberOfBet,setNumberOfBet] = useState(0)

    useEffect(() => {
        // Set up an interval to call restartGame every 1 minute
        const interval = setInterval(() => {
            restartGame();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let timer;
        if (isGameRunning) {
            timer = setInterval(() => {
                setSecondsLeft((prevSeconds) => {
                    if (prevSeconds > 0) {
                        return prevSeconds - 1;
                    } else {
                        clearInterval(timer);
                        setIsGameRunning(false);
                        setIsExploading(true);
                        return 0;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [secondsLeft, isGameRunning]);

    const restartGame = () => {
        setSecondsLeft(59);
        setIsGameRunning(true);
        setResult(null);
        setUserBet('');
        setBetAmount(0);
        setMessage('');
        setHasPlacedBet(false); // Allow placing bet again in the new round
        setIsExploading(false);
        setNumberOfBet(0)
    };

    const drawLotteryResult = () => {
        const randomResult = Math.floor(Math.random() * 10);
        setResult(randomResult);
    };

    //handle click
    const handleBet = () => {
        if (!hasPlacedBet && secondsLeft > 0 && secondsLeft <= 54) {
            // User can only place a bet once in the first 54 seconds
            setHasPlacedBet(true);

            const isNumeric = /^[0-9]+$/.test(betAmount);
            const minBetAmount = 10;

            if (!isNumeric || betAmount < minBetAmount) {
                setMessage(`Please enter a valid bet amount (minimum ${minBetAmount} rupees).`);
                return;
            }

            if (userBalance < betAmount) {
                setMessage('Insufficient balance. Please add more funds.');
                return;
            }

            setUserBalance((prevBalance) => prevBalance - betAmount);
            setBetCounter((prevCount) => prevCount + 1);

            drawLotteryResult();

            const calculatedBetAmount = betAmount;
            let winnings = 0;

            switch (userBet) {
                case 'BLUE':
                    if ([1, 3, 7, 9].includes(result)) {
                        winnings = calculatedBetAmount * 2;
                    } else if (result === 5) {
                        winnings = calculatedBetAmount * 1.5;
                    }
                    break;
                case 'RED':
                    if ([2, 4, 6, 8].includes(result)) {
                        winnings = calculatedBetAmount * 2;
                    } else if (result === 0) {
                        winnings = calculatedBetAmount * 1.5;
                    }
                    break;
                case 'VIOLET':
                    if ([0, 5].includes(result)) {
                        winnings = calculatedBetAmount * 4.5;
                    }
                    break;
                default:
                    setMessage('Invalid bet selection.');
                    return;
            }

            if (winnings > 0) {
                setCompanyBalance((prevBalance) => prevBalance - winnings);
                setUserBalance((prevBalance) => prevBalance + winnings);
            } else {
                setCompanyBalance((prevBalance) => prevBalance + calculatedBetAmount);
            }

            setBetAmount(0);
            setMessage(`You ${winnings > 0 ? 'won ' + winnings + ' rupees' : 'lost ' + calculatedBetAmount + ' rupees'}.`);
        } else {
            setMessage('You can place a bet only once in the first 54 seconds.');
        }
    };

    const increaseBetAmount = () => {
        setBetAmount((prevAmount) => prevAmount + 10);
        updateNumberOfBet();
    };

    const decreaseBetAmount = () => {
        if (betAmount >= 10) {
            setBetAmount((prevAmount) => prevAmount - 10);
            updateNumberOfBet();
        }
    };
    const updateNumberOfBet=()=>{
        const numberOfBet = Math.floor(betAmount/10);
        setNumberOfBet(numberOfBet) 
    }
    return (
        <>
            <div className='Container'>
                <div className='row'>
                    <div className='col-md-4 col-xl-4 col-sm-6' style={{ backgroundColor: '#3a2372', padding: '12px 30px', borderRadius: '10px' }}>
                        <Row className='align-item-center d-flex' style={{ borderRadius: "10px", padding: '12px 30px' }}>
                            <Flex justify='space-between'>
                                <div className='rightSection'>
                                    <span>Total Balance : ₹ {userBalance} </span>
                                </div>
                            </Flex>
                            <p>Current result:  {result}</p>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="betamount">Bet Amount</label>
                                <div className='d-flex align-items-center pop-font position-relative'>
                                    <button onClick={increaseBetAmount} className='colorpick-betamount-increase-button'> <FaPlus className=' fs-5' /> </button>
                                    <input type='number' readOnly id='betamount' value={isNaN(betAmount) ? '' : betAmount.toString()}
                                        onChange={(e) => setBetAmount(parseInt(e.target.value, 10))} className='ps-5' />
                                    <button onClick={decreaseBetAmount} className='colorpick-betamount-decrease-button' type='button' > <FaMinus className=' fs-5' /> </button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="nbet">Number of Bet</label>
                                <input type='number' readOnly id='nbet' value={numberOfBet}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="colours">Join Colour</label>
                                <select className='spin-select' id="colours" value={userBet} onChange={(e) => setUserBet(e.target.value)} >
                                    <option value='null'>select</option>
                                    <option value='BLUE'>Blue</option>
                                    <option value='VIOLET'>Violet</option>
                                    <option value='RED'>Red</option>
                                </select>
                            </Col>
                        </Row>
                        {/*Bet Button Section */}
                        <Row className='mt-4 '>
                            <Col>
                                <button className='shadow-lg filter-btn w-100' onClick={handleBet} disabled={secondsLeft <= 6 || !isGameRunning}>Bet </button>
                            </Col>
                            <Col>
                                {secondsLeft === 0 && !isGameRunning && (
                                    <>
                                        <button onClick={restartGame}>Restart Game</button>
                                        {isExploading && <ConfettiExplosion duration={3000} particleCount={100} />}
                                    </>
                                )}
                            </Col>
                        </Row>
                        {/*showing a message */}
                        <p>{message}</p>
                    </div>
                    <div className='col-md-1 col-xl-1 col-sm-1'></div>
                    <div className='col-md-7 col-xl-7 col-sm-6' style={{ backgroundColor: '#3a2372', padding: '12px 30px', borderRadius: '10px' }}>
                        <Row className='align-item-center d-flex p-4'>
                            <Flex justify='space-between'>
                                <div>
                                    <div className='color-white'>
                                        <h4>Period</h4>
                                        <h3>202402050658</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className='color-white'>
                                        <h4>Count Down</h4>
                                        <div>
                                            <div className='rightSection'>
                                                <div className='d-flex align-item-center'>
                                                    <div className='counter-box-colourpick'>0</div>&nbsp;
                                                    <div className='counter-box-colourpick'>0</div>&nbsp; <span> : </span> &nbsp;
                                                    <div className='counter-box-colourpick'>0</div>&nbsp;
                                                    <div className='counter-box-colourpick'>{secondsLeft}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Flex>
                        </Row>
                        <Row>
                            <div className='d-flex align-item-center justify-content-center'>
                                <div className='d-flex'>
                                    <div>
                                        <img src={blue} alt='colouricons' className='colourpick-game-ui-image' />
                                    </div>
                                    <div>
                                        <img src={voilet} alt='colouricons' className='colourpick-game-ui-image' />
                                    </div>
                                    <div>
                                        <img src={red} alt='colouricons' className='colourpick-game-ui-image' />
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <hr />
                        <Row>
                            <Col className='ps-4'>
                                <h3 className='color-white'>Latest Winner</h3>
                            </Col>
                        </Row>
                        <Row>
                            <div className='d-flex align-item-center justify-content-center'>
                                <div className='d-flex'>
                                    <div>
                                        <img src={winvoilet} alt='colouricons' className='colourpick-game-latestwin-image' />
                                    </div>
                                    <div>
                                        <img src={winblue} alt='colouricons' className='colourpick-game-latestwin-image' />
                                    </div>
                                    <div>
                                        <img src={winred} alt='colouricons' className='colourpick-game-latestwin-image' />
                                    </div>
                                    <div>
                                        <img src={winvoilet} alt='colouricons' className='colourpick-game-latestwin-image' />
                                    </div>
                                    <div>
                                        <img src={winblue} alt='colouricons' className='colourpick-game-latestwin-image' />
                                    </div>
                                    <div>
                                        <img src={winred} alt='colouricons' className='colourpick-game-latestwin-image' />
                                    </div>
                                    <div>
                                        <img src={waiting} alt='colouricons' className='colourpick-game-latestwin-image' />
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColorpickGame