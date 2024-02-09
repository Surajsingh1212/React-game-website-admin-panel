import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Flex, Modal } from 'antd';
import { FaMinus, FaPlus } from "react-icons/fa";
import aviator1 from '../../../assets/images/aviator/aviator1.png';
import aviator2 from '../../../assets/images/aviator/aviator2.png';
import aviator3 from '../../../assets/images/aviator/aviator3.png';
import aviator5 from '../../../assets/images/aviator/aviator5.png';
import aviator7 from '../../../assets/images/aviator/aviator7.png';
import aviator8 from '../../../assets/images/aviator/aviator4.png';
import aviatorwin from '../../../assets/images/aviator/aviatorwin.png';
import aviator from '../../../assets/images/aviator/aviatorGif.gif';

const AviatorGame = () => {
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
                            <label htmlFor="numbers">Select Range </label>
                            <select className='spin-select' id="numbers"  >
                                <option value=''>select</option>
                                <option value='1'>0 To 10</option>
                                <option value='2'>10 To 20</option>
                                <option value='3'>20 To 30</option>
                                <option value='4'>30 To 40</option>
                                <option value='5'>40 To 50 </option>
                                <option value='5'>50 To 60 </option>
                                <option value='5'>60 To 70 </option>
                                <option value='5'>70 To 80 </option>
                                <option value='5'>80 To 90 </option>
                                <option value='5'>90 To 100 </option>
                            </select>
                        </Col>
                    </Row>
                    {/*Bet Button Section */}
                    <Row className='mt-4 align-item-center '>
                        <Col>
                            <button className='shadow-lg filter-btn w-100'>Bet </button>
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
                        <p><b>JOIN ANY RANGE :</b> If you join any range and your selected range is win so you win and get amount 2x of your bet amount.</p>
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
                                            <p>0 To 10</p>
                                            <p>10 To 20</p>
                                            <p>20 To 30</p>
                                            <p>30 To 40</p>
                                            <p>40 To 50</p>
                                            <p>50 To 60</p>
                                            <p>60 To 70</p>
                                            <p>70 To 80</p>  
                                            <p>80 To 90</p>
                                            <p>90 To 10</p>
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
                        <img src={aviator} alt='aviator img ' />
                    </div>
                    <div className='row mt-2'>
                        <div>
                            <h3 className='color-white'>Winners</h3>
                        </div>
                    </div>
                    <div className='row  mb-0'>
                        <div className='text-center card-game-winner-bg py-4'>
                            <img src={aviator1} alt='aviatorImg' className='slot-game-img' />
                            <img src={aviator5} alt='aviatorImg' className='slot-game-img' />
                            <img src={aviator8} alt='aviatorImg' className='slot-game-img' />
                            <img src={aviator7} alt='aviatorImg' className='slot-game-img' />
                            <img src={aviator1} alt='aviatorImg' className='slot-game-img' />
                            <img src={aviator2} alt='aviatorImg' className='slot-game-img' />
                            <img src={aviator1} alt='aviatorImg' className='slot-game-img' />
                            <img src={aviator3} alt='aviatorImg' className='slot-game-img' />
                            <img src={aviatorwin} alt='aviatorImg' className='slot-game-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AviatorGame
