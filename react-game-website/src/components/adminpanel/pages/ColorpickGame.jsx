import { Flex, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FaMinus, FaPlus } from "react-icons/fa";
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
    const [secondsLeft, setSecondsLeft] = useState(59);
    const [isGameRunning, setIsGameRunning] = useState(true);
    const [hasPlacedBet, setHasPlacedBet] = useState(false);
    const [numberOfBet, setNumberOfBet] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // last six winner images 
    const [lastSixWinners, setLastSixWinners] = useState([
        winvoilet,
        winblue,
        winred,
        winvoilet,
        winblue,
        winred,
    ])

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
        setHasPlacedBet(false); // Allow placing bet again in the new round
        setNumberOfBet(0)
    };

    const drawLotteryResult = () => {
        const randomResult = Math.floor(Math.random() * 10);
        setResult(randomResult);
        //console.log(randomResult)
        // last six winner 
        setLastSixWinners(prevWinners => {
            const newWinners = [...prevWinners]
            newWinners.shift();
            newWinners.push(getWinnerImg(userBet, randomResult));
            return newWinners;
        })
    };

    //handle click
    const handleBet = () => {
        if (!hasPlacedBet && secondsLeft > 0) {
            // User can only place a bet once in the first 54 seconds
            setHasPlacedBet(true);

            const isNumeric = /^[0-9]+$/.test(betAmount);
            const minBetAmount = 10;

            if (!isNumeric || betAmount < minBetAmount) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Bet Amount',
                    text: `Please enter a valid bet amount (minimum ${minBetAmount} rupees).`,
                });
                return;
            }

            if (userBalance < betAmount) {
                Swal.fire({
                    icon: 'error',
                    title: 'Insufficient Balance',
                    text: 'Please add more funds to your account.',
                });
                return;
            }

            setUserBalance((prevBalance) => prevBalance - betAmount);
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
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid Bet Selection',
                        text: 'Please select a valid color to bet on.',
                    });
                    return;
            }

            if (winnings > 0) {
                setCompanyBalance((prevBalance) => prevBalance - winnings);
                setUserBalance((prevBalance) => prevBalance + winnings);
            } else {
                setCompanyBalance((prevBalance) => prevBalance + calculatedBetAmount);
            }
            setBetAmount(0);
            Swal.fire({
                icon: winnings > 0 ? 'success' : 'error',
                title: winnings > 0 ? 'Congratulations!' : 'Better luck next time!',
                text: winnings > 0 ? `You won ${winnings} rupees.` : `You lost ${calculatedBetAmount} rupees.`,
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Cannot Place Bet',
                text: 'You can place a bet only once in the first 54 seconds.',
            });
        }
    };
    // last six winner get image 
    const getWinnerImg = (userBet, result) => {
        let winnerImg = null;
        switch (userBet) {
            case 'BLUE':
                if ([1, 3, 7, 9].includes(result)) {
                    winnerImg = winblue;
                }
                else if (result === 5) {
                    winnerImg = winblue;
                }
                break;
            case 'RED':
                if ([2, 4, 6, 8].includes(result)) {
                    winnerImg = winred;
                }
                else if (result === 0) {
                    winnerImg = winred;
                }
                break;
            case 'VIOLET':
                if ([0, 5].includes(result)) {
                    winnerImg = winvoilet;
                }
                break;
            default:
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Bet Selection',
                    text: 'Please select a valid color to bet on.',
                });
                break;
        }
        return winnerImg;
    }
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
    const updateNumberOfBet = () => {
        const numberOfBet = Math.floor(betAmount / 10);
        setNumberOfBet(numberOfBet)
    }
    // hanle rules modal
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // get current period on bassed year
    const getCurrentPeroid = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear().toString().slice(-4);
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        const day = ('0' + currentDate.getDate()).slice(-2);
        const gameCount = ('0000' + secondsLeft).slice(-4);
        return `${year}${month}${day}${gameCount}`
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
                                <input type='number' readOnly id='nbet' value={numberOfBet} />
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
                                {secondsLeft === 0 && !isGameRunning && <button onClick={restartGame}>Restart Game</button>}
                            </Col>
                        </Row>
                        {/*showing a rules span */}
                        <div className='row text-center'>
                            <span onClick={showModal} className='admin-game-rules'>Game Rules</span>
                        </div>

                        {/*showing a rules content */}
                        <Modal title="About Colour Pick Game" width={600} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                            <p>1 minutes 1 issue,54 seconds to order,6 seconds to show the lottery result. It opens all day. The total number of trade is 1440 issues. </p>
                            <p>If you spend 100 rupees to trade,after deducting 2 rupees service fee,your contract amount is 98 rupees:</p>
                            <p><b>JOIN BLUE :</b>  if the result shows 1,3,7,9,you will get (98*2) 196 rupees;If the result shows 5,you will get (98*1.5) 147 rupees.</p>
                            <p><b>JOIN RED :</b>  if the result shows 2,4,6,8,you will get (98*2) 196 rupees;If the result shows 0,you will get (98*1.5) 147 rupees.</p>
                            <p><b>JOIN VIOLET :</b>  if the result shows 0 or 5,you will get (98*4.5) 441 rupees.</p>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Select </th>
                                            <th>Result</th>
                                            <th>Multiplier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <p>Join Blue</p>
                                            </th>
                                            <td>
                                                <p>1,3,7,9</p>
                                                <p>5</p>
                                            </td>
                                            <td>
                                                <p>2</p>
                                                <p>1.5</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <p>Join Red</p>
                                            </th>
                                            <td>
                                                <p>2,4,6,8</p>
                                                <p>0</p>
                                            </td>
                                            <td>
                                                <p>2</p>
                                                <p>1.5</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <p>Join Violet</p>
                                            </th>
                                            <td>
                                                <p>0,5</p>
                                            </td>
                                            <td>
                                                <p>4.5</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <p>Number</p>
                                            </th>
                                            <td>
                                                <p>n</p>
                                            </td>
                                            <td>
                                                <p>9</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Modal>
                        <p>Current result:  {result}</p>
                        <p>Company Balance:  {companyBalance}</p>
                    </div>
                    <div className='col-md-1 col-xl-1 col-sm-1'></div>
                    <div className='col-md-7 col-xl-7 col-sm-6' style={{ backgroundColor: '#3a2372', padding: '12px 30px', borderRadius: '10px' }}>
                        <Row className='align-item-center d-flex p-4 mb-3'>
                            <Col className='col-sm-12 pt-4' lg='6'>
                                <div>
                                    <div className='color-white'>
                                        <h4>Period</h4>
                                        <h3>{getCurrentPeroid()}</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-sm-12 pt-4' lg='6'>
                                <div>
                                    <div className='color-white'>
                                        <h4>Count Down</h4>
                                        <div>
                                            <div className='rightSection text-center'>
                                                <div className='d-flex align-item-center text-center'>
                                                    <div className='counter-box-colourpick'>0</div>&nbsp;
                                                    <div className='counter-box-colourpick'>0</div>&nbsp; <span> : </span> &nbsp;
                                                    <div className='counter-box-colourpick'>{Math.floor(secondsLeft / 10)}</div>&nbsp;
                                                    <div className='counter-box-colourpick'>{secondsLeft % 10}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
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
                        {/*show the latest six winner */}
                        <Row className='pt-3'>
                            <div className='d-flex align-item-center justify-content-center'>
                                <div className='d-flex'>
                                    {lastSixWinners.map((winner, index) => (
                                        <div key={index}>
                                            <img src={winner} alt={`winner-${index}`} className='colourpick-game-latestwin-image' />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <img src={waiting} alt='colouricons' className='colourpick-game-latestwin-image' />
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