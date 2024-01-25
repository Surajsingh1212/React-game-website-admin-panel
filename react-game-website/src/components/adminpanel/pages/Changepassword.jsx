import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Changepassword = () => {
  return (
    <>
      <Container>
        <Row className='px-0'>
          <div className='col-md-3 '></div>
          <div className='col-md-6 p-5' style={{ borderRadius: "10px", backgroundColor: '#201048' }}>
            <h1 className='text-center mt-4' style={{ color: 'white' }}>Change Password</h1>
            <div className='mt-3 '>
                <Row>
                  <Col>
                    <label for="oldpassword">Old Password</label>
                    <input type='password' required id='oldpassword'  />
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col>
                    <label for="newpassword">New Password</label>
                    <input type='password' required id='newpassword'  />
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col>
                    <label for="password">Confirm Password</label>
                    <input type='password' required id='password'  />
                  </Col>
                </Row>
                <Row className='mt-4 '>
                  <Col>
                    <button className='shadow-lg filter-btn w-100' >Change Now </button>
                  </Col>
                </Row>
            </div>

          </div>
          <div className='col-md-3'></div>
        </Row>
      </Container>
    </>
  )
}

export default Changepassword
