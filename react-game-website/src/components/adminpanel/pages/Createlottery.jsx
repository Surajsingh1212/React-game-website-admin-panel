import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Createlottery = () => {
    return (
        <Container>
            <Row className='px-0'>
                <div className='col-md-3 '></div>
                <div className='col-md-6 p-5' style={{ borderRadius: "10px", backgroundColor: '#201048' }}>
                    <h1 className='text-center mt-4' style={{ color: 'white' }}>Create Lottery </h1>
                    <div className='mt-3 '>
                        <Row className='mt-3'>
                            <Col>
                                <label for="name">Lotter Name</label>
                                <input type='text' required id='name' placeholder='Enter Lottery Name' />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col>
                                <label for="description">Lotter Description</label>
                                <input type='text' required id='description' placeholder='Enter Lottery Description' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label for="amount">Enter Winning Amount </label>
                                <input type='number' required id='amount' placeholder='Enter Winning Amount' />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col>
                                <label for="date">Select Start Date-Time</label>
                                <input type='datetime-local' required id='date' />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col>
                                <label for="date">Select End Data-Time</label>
                                <input type='datetime-local' required id='date' />
                            </Col>
                        </Row>
                        <Row className='mt-4 '>
                            <Col className='text-center'>
                                <Link to="/admin/managelottery"><button className='shadow-lg filter-btn w-100' >Create Now</button></Link>
                            </Col>
                        </Row>
                    </div>

                </div>
                <div className='col-md-3'></div>
            </Row>
        </Container>
    )
}

export default Createlottery
