import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Addpyment = () => {
  return (
    <Container>
      <Row className='px-0'>
        <div className='col-md-3 '></div>
        <div className='col-md-6 p-5 admin-broder-rbg'>
          <h1 className='text-center mt-4 color-white'>Deposit Money</h1>
          <div className='mt-3 '>
            <Row>
              <Col className='pop-font'>
                <label for="amount">Enter Amount</label>
                <input type='number' required id='amount' placeholder='Enter Your Amount' />
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col className='pop-font'>
                <label for="camount">Confirm Amount</label>
                <input type='number' required id='camount' placeholder='Enter Your Confirm Amount' />
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col className='pop-font'>
                <label for="mobile">Enter Mobile</label>
                <input type='number' required id='mobile' placeholder='Enter Your Mobile' />
              </Col>
            </Row>
            <Row className='mt-4 '>
              <Col className='pop-font'>
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
