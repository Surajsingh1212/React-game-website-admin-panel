import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Flex } from 'antd';

const Withdraw = () => {
  return (
    <Container>
      <Row className='px-0'>
        <div className='col-md-3 '></div>
        <div className='col-md-6 p-5 admin-broder-rbg'>
          <h1 className='text-center mt-4 color-white'>Withdraw </h1>
          <div className='mt-3 '>
            <Row className='d-flex align-item-center justify-content-center'>
              <Col className='d-flex justify-content-center'>
                <Flex justify='space-between'>
                  <div className='rightSection'>
                    <span>Available Balance : ₹ 6531.00 </span>
                  </div>
                </Flex>
              </Col>
            </Row>
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
                <button className='shadow-lg filter-btn w-100' >Withdraw Now</button>
              </Col>
            </Row>
          </div>
        </div>
        <div className='col-md-3'></div>
      </Row>
      <Row className='align-item-center d-flex mt-3 admin-broder-rbg admin-table-padding1 '>
        <div className="transaction-box">
          <div className="top-filter d-flex align-items-end">
            <div className="single-filter pop-font" >
              <p>Transaction Id</p>
              <input type="text" placeholder="34DFGDG65GFNFD" />
            </div>
            <div className="single-filter">
              <p >Currency</p>
              <select className='nice-select pop-font color-white admin-table-borderradius'>
                <option value="0" className='list'>All</option>
                <option value="1" className='list'>Currency 1</option>
                <option value="2" className='list'>Currency 2</option>
                <option value="3" className='list'>Currency 3</option>
              </select>
            </div>
            <div className="single-filter">
              <p>Amount</p>
              <select className='nice-select pop-font color-white admin-table-borderradius' >
                <option value="0" className='list'>All</option>
                <option value="1" className='list'>High To Low</option>
                <option value="2" className='list'>Low To High</option>
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
                  <th>Transaction Id</th>
                  <th>Date</th>
                  <th>Currency</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <p>DF4DFG7865GFNFD</p>
                  </th>
                  <td>
                    <p>05/02/2024</p>
                  </td>
                  <td>
                    <p>INR</p>
                  </td>
                  <td>
                    <p>3435.00</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>78JFGDG65GFNFD</p>
                  </th>
                  <td>
                    <p>05/02/2024</p>
                  </td>
                  <td>
                    <p>INR</p>
                  </td>
                  <td>
                    <p>3435.00</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>8JDFGDG65GFNFD</p>
                  </th>
                  <td>
                    <p>05/02/2024</p>
                  </td>
                  <td>
                    <p>INR</p>
                  </td>
                  <td>
                    <p>3435.00</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>FGEFGDG65GFNFD</p>
                  </th>
                  <td>
                    <p>05/02/2024</p>
                  </td>
                  <td>
                    <p>INR</p>
                  </td>
                  <td>
                    <p>3435.00</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>MJHDFGDG65GFNFD</p>
                  </th>
                  <td>
                    <p>05/02/2024</p>
                  </td>
                  <td>
                    <p>INR</p>
                  </td>
                  <td>
                    <p>3435.00</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>34FGDDG65GFNFD</p>
                  </th>
                  <td>
                    <p>05/02/2024</p>
                  </td>
                  <td>
                    <p>INR</p>
                  </td>
                  <td>
                    <p>3435.00</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Row>
    </Container>

  )
}

export default Withdraw
