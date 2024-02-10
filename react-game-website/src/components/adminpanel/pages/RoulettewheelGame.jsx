import { Flex, Modal } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaMinus, FaPlus } from "react-icons/fa";
import '../../../assets/css/roulettegame.css';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const RoulettewheelGame = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [betAmount, setBetAmount] = useState(0);
  const spinWheelRef = useRef(null);
  const [text, setText] = useState(<p>Best Of Luck!</p>);
  const [disabled, setDisabled] = useState(false);


  let spinWheelChart;
  let initialDegree = 0;
  let rotationInterval;

  const spinBtnClickHandler = () => {
    setDisabled(true);
    setText(<p>Best Of Luck!</p>);
    let count = 0;
    let resultValue = 101;

    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);

    rotationInterval = setInterval(() => {
      spinWheelChart?.options && (spinWheelChart.options.rotation += resultValue);
      spinWheelChart?.update();

      if (spinWheelChart?.options?.rotation >= 360) {
        count += 1;
        resultValue -= 5;
        spinWheelChart?.options && (spinWheelChart.options.rotation = 0);
      } else if (
        count > 15 &&
        spinWheelChart?.options?.rotation === randomDegree
      ) {
        generateValue(randomDegree);
        clearInterval(rotationInterval);
        count = 0;
        resultValue = 101;
        setTimeout(() => {
          resetWheel();
        }, 3000);
      }
    }, 10);
  };

  const generateValue = (angleValue) => {
    const spinValues = [
      { minDegree: 0, maxDegree: 10, value: 1 },
      { minDegree: 11, maxDegree: 20, value: 2 },
      { minDegree: 21, maxDegree: 30, value: 3 },
      { minDegree: 31, maxDegree: 40, value: 4 },
      { minDegree: 41, maxDegree: 50, value: 5 },
      { minDegree: 51, maxDegree: 60, value: 6 },
      { minDegree: 61, maxDegree: 70, value: 7 },
      { minDegree: 71, maxDegree: 80, value: 8 },
      { minDegree: 81, maxDegree: 90, value: 9 },
      { minDegree: 91, maxDegree: 100, value: 10 },
      { minDegree: 101, maxDegree: 110, value: 11 },
      { minDegree: 111, maxDegree: 120, value: 12 },
      { minDegree: 121, maxDegree: 130, value: 13 },
      { minDegree: 131, maxDegree: 140, value: 14 },
      { minDegree: 141, maxDegree: 150, value: 15 },
      { minDegree: 151, maxDegree: 160, value: 16 },
      { minDegree: 161, maxDegree: 170, value: 17 },
      { minDegree: 171, maxDegree: 180, value: 18 },
      { minDegree: 181, maxDegree: 190, value: 19 },
      { minDegree: 191, maxDegree: 200, value: 20 },
      { minDegree: 201, maxDegree: 210, value: 21 },
      { minDegree: 211, maxDegree: 220, value: 22 },
      { minDegree: 221, maxDegree: 230, value: 23 },
      { minDegree: 231, maxDegree: 240, value: 24 },
      { minDegree: 241, maxDegree: 250, value: 25 },
      { minDegree: 251, maxDegree: 260, value: 26 },
      { minDegree: 261, maxDegree: 270, value: 27 },
      { minDegree: 271, maxDegree: 280, value: 28 },
      { minDegree: 281, maxDegree: 290, value: 29 },
      { minDegree: 291, maxDegree: 300, value: 30 },
      { minDegree: 301, maxDegree: 310, value: 31 },
      { minDegree: 311, maxDegree: 320, value: 32 },
      { minDegree: 321, maxDegree: 330, value: 33 },
      { minDegree: 331, maxDegree: 340, value: 34 },
      { minDegree: 341, maxDegree: 350, value: 35 },
      { minDegree: 351, maxDegree: 360, value: 36 },
    ];

    for (let i of spinValues) {
      if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
        setText(<p>Congratulations, You Have Won Rs : {i.value} ! </p>);
        setDisabled(false);
        clearInterval(rotationInterval);
        setTimeout(() => {
          resetWheel();
        }, 3000);
        break;
      }
    }
  };

  // resetting the wheel 
  const resetWheel = () => {
    setText(<p>Best Of Luck!</p>);
    setDisabled(false);
    spinWheelChart.options.rotation = initialDegree; // Set the wheel's rotation to the initial degree
    spinWheelChart.update();
  };

  // Declare clickHandler outside useEffect
  const clickHandler = spinBtnClickHandler;

  useEffect(() => {
    const spinValues = [
      { minDegree: 0, maxDegree: 10, value: 1 },
      { minDegree: 11, maxDegree: 20, value: 2 },
      { minDegree: 21, maxDegree: 30, value: 3 },
      { minDegree: 31, maxDegree: 40, value: 4 },
      { minDegree: 41, maxDegree: 50, value: 5 },
      { minDegree: 51, maxDegree: 60, value: 6 },
      { minDegree: 61, maxDegree: 70, value: 7 },
      { minDegree: 71, maxDegree: 80, value: 8 },
      { minDegree: 81, maxDegree: 90, value: 9 },
      { minDegree: 91, maxDegree: 100, value: 10 },
      { minDegree: 101, maxDegree: 110, value: 11 },
      { minDegree: 111, maxDegree: 120, value: 12 },
      { minDegree: 121, maxDegree: 130, value: 13 },
      { minDegree: 131, maxDegree: 140, value: 14 },
      { minDegree: 141, maxDegree: 150, value: 15 },
      { minDegree: 151, maxDegree: 160, value: 16 },
      { minDegree: 161, maxDegree: 170, value: 17 },
      { minDegree: 171, maxDegree: 180, value: 18 },
      { minDegree: 181, maxDegree: 190, value: 19 },
      { minDegree: 191, maxDegree: 200, value: 20 },
      { minDegree: 201, maxDegree: 210, value: 21 },
      { minDegree: 211, maxDegree: 220, value: 22 },
      { minDegree: 221, maxDegree: 230, value: 23 },
      { minDegree: 231, maxDegree: 240, value: 24 },
      { minDegree: 241, maxDegree: 250, value: 25 },
      { minDegree: 251, maxDegree: 260, value: 26 },
      { minDegree: 261, maxDegree: 270, value: 27 },
      { minDegree: 271, maxDegree: 280, value: 28 },
      { minDegree: 281, maxDegree: 290, value: 29 },
      { minDegree: 291, maxDegree: 300, value: 30 },
      { minDegree: 301, maxDegree: 310, value: 31 },
      { minDegree: 311, maxDegree: 320, value: 32 },
      { minDegree: 321, maxDegree: 330, value: 33 },
      { minDegree: 331, maxDegree: 340, value: 34 },
      { minDegree: 341, maxDegree: 350, value: 35 },
      { minDegree: 351, maxDegree: 360, value: 36 },
    ];

    const size = Array(spinValues.length).fill(10);

    const spinColors = [
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
      "#182120",
      "#b50000",
    ];

    const spinChartOptions = {
      responsive: true,
      animation: { duration: 0 },
      plugins: {
        tooltip: false,
        legend: { display: false },
        datalabels: {
          display: false,
        },
      },
    };

    spinWheelChart = new Chart(spinWheelRef.current, {
      plugins: [ChartDataLabels],
      type: 'pie',
      data: {
        labels: spinValues.map((_, index) => index + 1),
        datasets: [
          {
            backgroundColor: spinColors,
            data: size,
          },
        ],
      },
      options: spinChartOptions,
    });

    return () => {
      if (spinWheelChart) {
        spinWheelChart.destroy();
      }
    };
  }, []);
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
              <button className='shadow-lg filter-btn w-100' id="spin_btn" disabled={disabled} onClick={clickHandler}>Bet </button>
            </Col>

          </Row>
          {/*showing a rules span */}
          <div className='row text-center'>
            <span onClick={showModal} className='admin-game-rules mt-2'>Game Rules</span>
          </div>
          <div className='row text-center'>
          <div id="text">{text}</div>
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
          <div className='align-item-center text-center ' >
            <div className='d-flex justify-content-center align-item-center mt-5'>
              <div className='position-relative'>
                <div className='circle-roulete'>
                  <canvas id="spinWheel" ref={spinWheelRef} className='canva-roulete'></canvas>
                  <div className='second-roulete'><div className='d-flex ju'></div></div>
                  <div className='third-roulete'></div>
                </div>
                
              </div>
              
            </div>
            <div className='d-flex align-item-center justify-content-between'>
              <div className='text-center color-white mt-4 ms-2 pop-font game-roulete-bg'>
                <div className='d-flex align-item-center text-center'>
                  <div className='counter-box-colourpick p-2'>0</div>&nbsp;
                  <div className='counter-box-colourpick p-2'>0</div>&nbsp; <span> : </span> &nbsp;
                  <div className='counter-box-colourpick p-2'>0</div>&nbsp;
                  <div className='counter-box-colourpick p-2'>0</div>
                </div>
              </div>
              <div className='text-center color-white mt-4 ms-2 pop-font game-roulete-bg'>
              <div className='d-flex align-item-center text-center'>
                <span>Multiplier : 4X</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoulettewheelGame
