import { Flex } from 'antd';
import React,{useState,useRef} from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../../assets/css/spin.css';
import arrow from '../../../assets/images/icon/arrow.png'

const Wheelplay = () => {
  const [rotatedeg, setRotatedeg] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState(null);
    const selectedSegmentRef = useRef(null);

    const handleBetClick=()=>{
      const spins = 10;
      let spinCount = 0;
  
      const wheel = document.getElementById('wheel');
      if (wheel) {
        wheel.classList.remove('spin-animation'); // Remove the spin class to restart the animation
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
        }, 300); // Adjust the interval as needed
      }
    };
    const checkMatch = () => {
      const winner = selectedSegmentRef.current !== null ? segments[selectedSegmentRef.current] : 'No Match';
      alert(`Winner: ${winner}`);
    };
    const segments = ['5X', '0X', '2X', '0X', '1/2X', '10X', '0X', '3X', '0X', '7X', '0X', '9X'];
  return (
    <>

      <div className='Container'>
        <div className='row'>
          <div className='col-md-4 col-xl-4 col-sm-6' style={{ backgroundColor: '#3a2372', padding: '12px 30px', borderRadius: '10px' }}>
            <Row className='align-item-center d-flex' style={{ borderRadius: "10px", padding: '12px 30px' }}>
              <Flex justify='space-between'>
                <div className='rightSection'>
                  <span>Total Balance : ₹ 10000 </span>
                </div>
              </Flex>
            </Row>
            <Row>
              <Col>
                <label htmlFor="betamount">Bet Amount</label>
                <input type='number' required id='betamount' />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="risk">Risk</label>
                <select className='spin-select' id="risk" >
                  <option value='Low'>Low</option>
                  <option value='Medium'>Medium</option>
                  <option value='High'>High</option>
                </select>
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
            <Row className='mt-4 '>
              <Col>
                <button className='shadow-lg filter-btn w-100' onClick={handleBetClick} >Bet </button>
              </Col>
            </Row>
          </div>
          <div className='col-md-1 col-xl-1 col-sm-1'>

          </div>
          <div className='col-md-7 col-xl-7 col-sm-6' style={{ backgroundColor: '#3a2372', padding: '12px 30px', borderRadius: '10px' }}>
            <div className='d-flex justify-content-center align-items-center position-relative' style={{height:'450px'}}>
            <div className='circle-arrow'><img src={arrow} alt='arrow'/></div>
            <ul className="circle spin-animation" id='wheel'>
            {segments.map((segment,index)=>(
              <li key={index} className={index === selectedSegment ? 'selected':''}>
                <div className='text'>{segment}</div>
              </li>
            ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Wheelplay
