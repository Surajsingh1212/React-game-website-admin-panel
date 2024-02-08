import { Flex, Modal } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaMinus, FaPlus } from "react-icons/fa";
import '../../../assets/css/spin.css';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import arrow from '../../../assets/images/icon/arrow.png';

const Wheelplay = () => {
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
      { minDegree: 61, maxDegree: 90, value: 100 },
      { minDegree: 31, maxDegree: 60, value: 200 },
      { minDegree: 0, maxDegree: 30, value: 300 },
      { minDegree: 331, maxDegree: 360, value: 400 },
      { minDegree: 301, maxDegree: 330, value: 500 },
      { minDegree: 271, maxDegree: 300, value: 600 },
      { minDegree: 241, maxDegree: 270, value: 700 },
      { minDegree: 211, maxDegree: 240, value: 800 },
      { minDegree: 181, maxDegree: 210, value: 900 },
      { minDegree: 151, maxDegree: 180, value: 1000 },
      { minDegree: 121, maxDegree: 150, value: 1100 },
      { minDegree: 91, maxDegree: 120, value: 1200 },
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
      { minDegree: 61, maxDegree: 90, value: 100 },
      { minDegree: 31, maxDegree: 60, value: 200 },
      { minDegree: 0, maxDegree: 30, value: 300 },
      { minDegree: 331, maxDegree: 360, value: 400 },
      { minDegree: 301, maxDegree: 330, value: 500 },
      { minDegree: 271, maxDegree: 300, value: 600 },
      { minDegree: 241, maxDegree: 270, value: 700 },
      { minDegree: 211, maxDegree: 240, value: 800 },
      { minDegree: 181, maxDegree: 210, value: 900 },
      { minDegree: 151, maxDegree: 180, value: 1000 },
      { minDegree: 121, maxDegree: 150, value: 1100 },
      { minDegree: 91, maxDegree: 120, value: 1200 },
    ];

    const size = Array(spinValues.length).fill(10);

    const spinColors = [
      "#ee82ee",
      "#008000",
      "#ffa500",
      "#adff2f",
      "#ffc0cb",
      "#8a2be2",
      "#3cb371",
      "#7b68ee",
      "#f08080",
      "#f4a460",
      "#adff2f",
      "#ffff00",
    ];

    const spinChartOptions = {
      responsive: true,
      animation: { duration: 0 },
      plugins: {
        tooltip: false,
        legend: { display: false },
        datalabels: {
          rotation: 90,
          color: 'black',
          formatter: (_, context) => context.chart.data.labels[context.dataIndex],
          font: { size: 24 },
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
                <button className='shadow-lg filter-btn w-100' id="spin_btn" disabled={disabled} onClick={clickHandler}>Bet </button>
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
            <div className='align-item-center text-center ' >
              <div className='d-flex justify-content-center align-item-center mt-5'>
              <div className='position-relative'>
              <div className='circle2'>
                  <canvas id="spinWheel" ref={spinWheelRef}></canvas>
                </div>
                <img src={arrow} alt='arrowImg' className='circle-arrow'/>
              </div>
              </div>
              <div id="text">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wheelplay;
