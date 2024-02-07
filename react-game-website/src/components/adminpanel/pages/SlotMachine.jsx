import React,{useState} from 'react';
import { Row,Col } from 'react-bootstrap';
import { Flex,Modal } from 'antd';
import { FaMinus, FaPlus } from "react-icons/fa";

const SlotMachine = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [betAmount, setBetAmount] = useState(0);
   

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
                                    onChange={(e) => setBetAmount(parseInt(e.target.value, 10))}  className='ps-5' />
                                    <button onClick={decreaseBetAmount} className='colorpick-betamount-decrease-button' type='button' > <FaMinus className=' fs-5' /> </button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="nbet">Number of Bet</label>
                                <input type='number' readOnly id='nbet' value={betAmount / 10}  />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="numbers">Join Number</label>
                                <select className='spin-select' id="numbers"  >
                                    <option value=''>select</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
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
                    </div>
                    <div className='col-md-1 col-xl-1 col-sm-1'></div>
                    <div className='col-md-7 col-xl-7 col-sm-6' style={{ backgroundColor: '#3a2372', padding: '12px 30px', borderRadius: '10px' }}>   </div>
                </div>
            </div>
        </>
    )
}
export default SlotMachine