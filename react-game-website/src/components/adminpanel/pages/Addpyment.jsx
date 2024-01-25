import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Addpyment = () => {
  return (
    <Container>
      <Row className='px-0'>
        <div className='col-md-3 '></div>
        <div className='col-md-6 p-5' style={{ borderRadius: "10px", backgroundColor: '#201048' }}>
          <h1 className='text-center mt-4' style={{ color: 'white' }}>Deposit Money</h1>
          <div className='mt-3 '>
            <Row>
              <Col>
                <label for="amount">Enter Amount</label>
                <input type='number' required id='amount' placeholder='Enter Your Amount' />
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <label for="camount">Confirm Amount</label>
                <input type='number' required id='camount' placeholder='Enter Your Confirm Amount' />
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <label for="mobile">Enter Mobile</label>
                <input type='number' required id='mobile' placeholder='Enter Your Mobile' />
              </Col>
            </Row>
            <Row className='mt-4 '>
              <Col>
                <button className='shadow-lg filter-btn w-100' >Deposit Now</button>
              </Col>
            </Row>
          </div>

        </div>
        <div className='col-md-3'></div>
      </Row>
    </Container>
  )
}

export default Addpyment
