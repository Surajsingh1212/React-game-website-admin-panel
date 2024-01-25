import { Flex } from 'antd';
import React,{useState,useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../../assets/css/spin.css';
import {makeWheel} from '../utils/Makewheel'

const Wheelplay = () => {

  const colorObj={
    purple:'#406c82',
    yellow:'#434c82',
    white:'#fdg345',
    warning:'#fca32f',
    green:'#00e403',
  }

 const [wheel, setWheel] = useState([])
 const [risk,setRisk] = useState('medium')
 const [segment,setSegment] = useState(10)

 const initialWheel=()=>{
  return makeWheel(segment,risk,colorObj)
 }
 useEffect(() => {
  const wheelValue = initialWheel();
  setWheel(wheelValue)
 })
 
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
                <select className='spin-select' value={risk} onChange={(e)=>setRisk(e.target.value)} id="risk" >
                  <option value='Low'>Low</option>
                  <option value='Medium'>Medium</option>
                  <option value='High'>High</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="segments">Segments</label>
                <select className='spin-select' value={segment} onChange={(e)=>setSegment(parseInt(e.target.value))} id="segments" >
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='30'>30</option>
                  <option value='50'>50</option>
                </select>
              </Col>
            </Row>
            <Row className='mt-4 '>
              <Col>
                <button className='shadow-lg filter-btn w-100'onClick={initialWheel} >Bet </button>
              </Col>
            </Row>
          </div>
          <div className='col-md-1 col-xl-1 col-sm-1'>

          </div>
          <div className='col-md-7 col-xl-7 col-sm-6' style={{ backgroundColor: '#3a2372', padding: '12px 30px', borderRadius: '10px' }}>
            <div className='d-flex justify-content-center align-items-center position-relative'>
            <div className='wheel'>
          {/*  {
              [...wheel]
            }*/}
            </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Wheelplay
