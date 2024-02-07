import { Flex ,Modal} from 'antd';
import React, { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaMinus, FaPlus } from "react-icons/fa";
import '../../../assets/css/spin.css';
import arrow from '../../../assets/images/icon/arrow.png';

const Wheelplay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [betAmount, setBetAmount] = useState(0);
  const [rotatedeg, setRotatedeg] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const selectedSegmentRef = useRef(null);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  const segments = ['5X', '0X', '2X', '0X', '1/2X', '10X', '0X', '3X', '0X', '7X', '0X', '9X'];

  const shuffledSegments = shuffleArray(segments);
  const handleBetClick = () => {
    const spins = 10;
    let spinCount = 0;

    const wheel = document.getElementById('wheel');
    if (wheel) {
      wheel.classList.remove('spin-animation');
      void wheel.offsetWidth;
      wheel.classList.add('spin-animation');

      const spinInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * 12);
        selectedSegmentRef.current = randomIndex;

        spinCount++;

        if (spinCount === spins) {
          clearInterval(spinInterval);
          checkMatch();
        }
      }, 300);
    }
  };

  const checkMatch = () => {
    const winner =
      selectedSegmentRef.current !== null
        ? segments[selectedSegmentRef.current]
        : 'No Match';
    alert(`Winner: ${winner}`);
  };


   
    //handle increament or decreament
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
                <label htmlFor="segments">Segments</label>
                <select className='spin-select' id="segments" >
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='30'>30</option>
                  <option value='50'>50</option>
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
          <div className='col-md-7 col-xl-7 col-sm-6' style={{ backgroundColor: '#3a2372', padding: '12px 30px', borderRadius: '10px' }}>
            <div className='d-flex justify-content-center align-items-center position-relative' style={{ height: '450px' }}>
              <div className='circle-arrow'><img src={arrow} alt='arrow' /></div>
              <ul className="circle spin-animation" id="wheel">
                {shuffledSegments.map((segment, index) => (
                  <li key={index} className={index === selectedSegment ? 'selected' : ''}>
                    <div className="text">{segment}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wheelplay;
