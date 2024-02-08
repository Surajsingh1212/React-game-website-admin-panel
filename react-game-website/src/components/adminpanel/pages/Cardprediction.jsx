import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Flex, Modal } from 'antd';
import { FaMinus, FaPlus } from "react-icons/fa";
import '../../../assets/css/cardprediction.css';
import card1 from '../../../assets/images/card/card1.png';
import card2 from '../../../assets/images/card/card2.png';
import card3 from '../../../assets/images/card/card3.png';
import card4 from '../../../assets/images/card/card4.png';
import card5 from '../../../assets/images/card/card5.png';
import card6 from '../../../assets/images/card/card6.png';
import card7 from '../../../assets/images/card/card7.png';
import card8 from '../../../assets/images/card/card8.png';
import card9 from '../../../assets/images/card/card9.png';
import card10 from '../../../assets/images/card/card10.png';
import nextwin from '../../../assets/images/card/nextwin.png';

const Cardprediction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [betAmount, setBetAmount] = useState(0);

    // handle increament and decreament
    const increaseBetAmount = () => {
        setBetAmount((prevAmount) => prevAmount + 10);
    };

    const decreaseBetAmount = () => {
        if (betAmount >= 10) {
            setBetAmount((prevAmount) => prevAmount - 10);
        }
    };
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
    return (
        <>
            <div className='Container'>
                <div className='row'>
                    <div className='col-md-4 col-xl-4 col-sm-6' style={{ backgroundColor: '#3a2372', padding: '12px 30px', borderRadius: '10px' }}>
                        <Row className='align-item-center d-flex' style={{ borderRadius: "10px", padding: '12px 30px' }}>
                            <Flex justify='space-between'>
                                <div className='rightSection'>
                                    <span>Total Balance : ₹ 22344 </span>
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
                                <input type='number' readOnly id='nbet' value={betAmount / 10} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="numbers">Join Number</label>
                                <select className='spin-select' id="numbers"  >
                                    <option value=''>select</option>
                                    <option value='1'>Join Clubs King</option>
                                    <option value='2'>Join Clubs of 4 </option>
                                    <option value='3'>Join Clubs of 9</option>
                                    <option value='4'>Join Heart Jack</option>
                                    <option value='5'>Join Heart of 3 </option>
                                    <option value='6'>Join Heart of 10</option>
                                    <option value='7'>Join Spades Queen</option>
                                    <option value='8'>Join Spades of 5</option>
                                    <option value='9'>Join Diamond Ace</option>
                                    <option value='10'>Join Diamond of 7</option>
                                </select>
                            </Col>
                        </Row>
                        {/*Bet Button Section */}
                        <Row className='mt-4 align-item-center '>
                            <Col>
                                <button className='shadow-lg filter-btn w-100' >Bet </button>
                            </Col>

                        </Row>
                        {/*showing a rules span */}
                        <div className='row text-center'>
                            <span onClick={showModal} className='admin-game-rules mt-2'>Game Rules</span>
                        </div>

                        {/*showing a rules content */}
                        <Modal title="About Card Prediction Game" width={600} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                            <p>1 minutes 1 issue,54 seconds to order,6 seconds to show the lottery result. It opens all day. The total number of trade is 1440 issues. </p>
                            <p>If you spend 100 rupees to trade,after deducting 2 rupees service fee,your contract amount is 98 rupees:</p>
                            <p><b>JOIN ANY CARD :</b> If you join any card and your card is win so you win and get amount 2x of your bet amount.</p>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Select </th>
                                            <th>Multiplier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <p>Clubs King</p>
                                                <p>Clubs of 4</p>
                                                <p>Clubs of 9</p>
                                                <p>Heart Jack</p>
                                                <p>Heart of 3</p>
                                                <p>Heart of 10</p>
                                                <p>Spades Queen</p>
                                                <p>Spades of 5</p>
                                                <p>Diamond Ace</p>
                                                <p>Diamond of 7</p>
                                            </th>
                                            <td>
                                                <p>2X</p>
                                                <p>2X</p>
                                                <p>2X</p>
                                                <p>2X</p>
                                                <p>2X</p>
                                                <p>2X</p>
                                                <p>2X</p>
                                                <p>2X</p>
                                                <p>2X</p>
                                                <p>2X</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Modal>
                    </div>
                    <div className='col-md-1 col-xl-1 col-sm-1'></div>
                    <div className='col-md-7 col-xl-7 col-sm-6' style={{ backgroundColor: '#3a2372', padding: '12px 30px', borderRadius: '10px' }}>
                        <Row className='align-item-center d-flex p-4 mb-3'>
                            <Col className='col-sm-12 pt-4' lg='6'>
                                <div>
                                    <div className='color-white'>
                                        <h4>Period</h4>
                                        <h3>21223434565</h3>
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
                                                    <div className='counter-box-colourpick'>0</div>&nbsp;
                                                    <div className='counter-box-colourpick'>0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className='row'>
                            <div className='text-center'>
                                <img src={card1} alt='cardImg' className='card-game-img2' />
                                <img src={card2} alt='cardImg' className='card-game-img2' />
                                <img src={card3} alt='cardImg' className='card-game-img2' />
                                <img src={card4} alt='cardImg' className='card-game-img2' />
                                <img src={card8} alt='cardImg' className='card-game-img2' />
                            </div>
                            <div className='text-center'>
                                <img src={card5} alt='cardImg' className='card-game-img2' />
                                <img src={card10} alt='cardImg' className='card-game-img2' />
                                <img src={card9} alt='cardImg' className='card-game-img2' />
                                <img src={card6} alt='cardImg' className='card-game-img2' />
                                <img src={card7} alt='cardImg' className='card-game-img2' />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div>
                                <h3 className='color-white'>Winners</h3>
                            </div>
                        </div>
                        <div className='row  mb-0'>
                            <div className='text-center card-game-winner-bg py-4'>
                                <img src={card9} alt='cardImg' className='card-game-img' />
                                <img src={card1} alt='cardImg' className='card-game-img' />
                                <img src={card5} alt='cardImg' className='card-game-img' />
                                <img src={card3} alt='cardImg' className='card-game-img' />
                                <img src={card8} alt='cardImg' className='card-game-img' />
                                <img src={card2} alt='cardImg' className='card-game-img' />
                                <img src={card10} alt='cardImg' className='card-game-img' />
                                <img src={card4} alt='cardImg' className='card-game-img' />
                                <img src={nextwin} alt='cardImg' className='card-game-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardprediction
