import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Createuser = () => {
  return (
    <Container>
    <Row className='px-0'>
        <div className='col-md-3 '></div>
        <div className='col-md-6 p-5' style={{ borderRadius: "10px", backgroundColor: '#201048' }}>
            <h1 className='text-center mt-4' style={{ color: 'white' }}>Create User </h1>
            <div className='mt-3 '>
                <Row className='mt-3'>
                    <Col>
                        <label for="name">User Name</label>
                        <input type='text' required id='name' placeholder='Enter User Name' />
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <label for="email">Email</label>
                        <input type='email' required id='email' placeholder='Enter Email' />
                    </Col>
                </Row>
                <Row className='mt-3'>
                <Col>
                    <label for="password">Password</label>
                    <input type='password' required id='password' placeholder='Enter password' />
                </Col>
            </Row>
                <Row className='mt-3'>
                    <Col>
                        <label for="mobile">Mobile</label>
                        <input type='text' required id='mobile' placeholder='Enter Mobile' />
                    </Col>
                </Row>
                <Row className='mt-4 '>
                    <Col className='text-center'>
                        <Link to="/admin/manageusers"><button className='shadow-lg filter-btn w-100' >Create Now</button></Link>
                    </Col>
                </Row>
            </div>

        </div>
        <div className='col-md-3'></div>
    </Row>
</Container>
  )
}

export default Createuser
