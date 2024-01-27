import { Card, Flex } from 'antd';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFileInvoice, FaUserPlus } from "react-icons/fa";
import { FaArrowDownLong, FaArrowUpLong, FaCartPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Deshboard = () => {
    return (
        <>
            <Row className='mb-3 row g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 mx-0'>
                <Col className='mb-2 col mx-0'>
                    <Card >
                        <Row >
                            <Col >
                                <h5 className="text-uppercase text-muted mb-0 card-title">INVOICE</h5><span
                                    className="h2 font-weight-bold mb-0">97</span>
                            </Col>
                            <Col className="col-auto col">
                                <div className="icon icon-shape bg-warning text-white rounded-circle shadow-sm p-2">
                                    <FaFileInvoice className='fs-4' />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="mt-3 mb-0 text-muted text-sm"><span className="text-success mr-2"><FaArrowUpLong className='mr-2' />
                                    5.48%</span> <span className="text-nowrap">Since last month</span></p>
                            </Col>
                            <Col className="col-auto col">
                                <Link to="" style={{ textDecoration: 'none' }}> <p className="mt-3 mb-0 text-muted text-sm">View More <IoIosArrowForward className='mb-1' /></p></Link>
                            </Col>
                        </Row>

                    </Card>
                </Col>
                <Col className='mb-2'>
                    <Card >
                        <Row >
                            <Col >
                                <h5 className="text-uppercase text-muted mb-0 card-title">ORDER</h5><span
                                    className="h2 font-weight-bold mb-0">897</span>
                            </Col>
                            <Col className="col-auto col">
                                <div className="icon icon-shape bg-success text-white rounded-circle shadow-sm p-2">
                                    <FaCartPlus className='fs-4' />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="mt-3 mb-0 text-muted text-sm"><span className="text-danger mr-2"><FaArrowDownLong className='mr-2' />
                                    3.48%</span> <span className="text-nowrap">Since last month</span></p>
                            </Col>
                            <Col className="col-auto col">
                                <Link to="" style={{ textDecoration: 'none' }}> <p className="mt-3 mb-0 text-muted text-sm">View More <IoIosArrowForward className='mb-1' /></p></Link>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col className='mb-2'>
                    <Card >
                        <Row >
                            <Col >
                                <h5 className="text-uppercase text-muted mb-0 card-title">USERS</h5><span
                                    className="h2 font-weight-bold mb-0">4005 </span>
                            </Col>
                            <Col className="col-auto col">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow-sm p-2">
                                    <FaUserPlus className='fs-4' />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="mt-3 mb-0 text-muted text-sm"><span className="text-danger mr-2"><FaArrowDownLong className='mr-2' />
                                    1.20%</span> <span className="text-nowrap">Since last month</span></p>
                            </Col>
                            <Col className="col-auto col">
                                <Link to="" style={{ textDecoration: 'none' }}> <p className="mt-3 mb-0 text-muted text-sm">View More <IoIosArrowForward className='mb-1' /></p></Link>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className='align-item-center d-flex' style={{ borderRadius: "10px", backgroundColor: '#3a2372', padding: '12px 30px' }}>
                <Flex justify='space-between'>
                    <div>
                        <h4 style={{ color: 'white' }} className='pt-3 fw-bold'>Wallet</h4>
                    </div>
                    <div className='rightSection'>
                        <span>Total Balance : ₹ 10000 </span>
                    </div>
                </Flex>
            </Row>
            <Row className='align-item-center d-flex mt-3  ' style={{ borderRadius: "10px", backgroundColor: '#201048', padding: '12px 30px' }}>
                <div className="transaction-box">
                    <div className="top-filter d-flex align-items-end">
                        <div className="single-filter" >
                            <p>Month</p>
                            <input type="text" placeholder="2023/01" style={{ fontFamily: 'poppins' }} />
                        </div>
                        <div className="single-filter">
                            <p>Type</p>
                            <select className='nice-select' style={{ fontFamily: 'poppins', color: 'white', borderRadius: '10px' }}>
                                <option value="0" className='list'>All</option>
                                <option value="1" className='list'>Type 1</option>
                                <option value="2" className='list'>Type 2</option>
                                <option value="3" className='list'>Type 3</option>
                            </select>
                        </div>
                        <div className="single-filter">
                            <p >Currency</p>
                            <select className='nice-select' style={{ fontFamily: 'poppins', color: 'white', borderRadius: '10px' }}>
                                <option value="0" className='list'>All</option>
                                <option value="1" className='list'>Currency 1</option>
                                <option value="2" className='list'>Currency 2</option>
                                <option value="3" className='list'>Currency 3</option>
                            </select>
                        </div>
                        <div>
                            <button className="filter-btn">Filter</button>
                        </div>
                    </div>
                    <div className="table-responsive mt-4">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date/Time</th>
                                    <th>Type</th>
                                    <th>Currency</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <p>2023-01-07  16-33-53</p>
                                    </th>
                                    <td>
                                        <p>Deposit</p>
                                    </td>
                                    <td>
                                        <p>BTC</p>
                                    </td>
                                    <td>
                                        <p>0.005210</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p>2023-01-07  16-33-53</p>
                                    </th>
                                    <td>
                                        <p>Withdrawal</p>
                                    </td>
                                    <td>
                                        <p>BTC</p>
                                    </td>
                                    <td>
                                        <p>0.005210</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p>2023-01-07  16-33-53</p>
                                    </th>
                                    <td>
                                        <p>Deposit</p>
                                    </td>
                                    <td>
                                        <p>BTC</p>
                                    </td>
                                    <td>
                                        <p>0.005210</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p>2023-01-07  16-33-53</p>
                                    </th>
                                    <td>
                                        <p>Withdrawal</p>
                                    </td>
                                    <td>
                                        <p>BTC</p>
                                    </td>
                                    <td>
                                        <p>0.005210</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p>2023-01-07  16-33-53</p>
                                    </th>
                                    <td>
                                        <p>Referral</p>
                                    </td>
                                    <td>
                                        <p>BTC</p>
                                    </td>
                                    <td>
                                        <p>0.005210</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p>2023-01-07  16-33-53</p>
                                    </th>
                                    <td>
                                        <p>Deposit</p>
                                    </td>
                                    <td>
                                        <p>BTC</p>
                                    </td>
                                    <td>
                                        <p>0.005210</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Row>
        </>
    )
}

export default Deshboard
