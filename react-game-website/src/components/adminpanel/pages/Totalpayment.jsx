import { Flex } from 'antd';
import React from 'react';
import { Row } from 'react-bootstrap';

const Totalpayment = () => {
  return (
    <>
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
        <div class="transaction-box">
          <div class="top-filter d-flex align-items-end">
            <div class="single-filter" >
              <p>Month</p>
              <input type="text" placeholder="2023/01" style={{ fontFamily: 'poppins' }} />
            </div>
            <div class="single-filter">
              <p>Type</p>
              <select className='nice-select' style={{ fontFamily: 'poppins', color: 'white', borderRadius: '10px' }}>
                <option value="0" className='list'>All</option>
                <option value="1" className='list'>Type 1</option>
                <option value="2" className='list'>Type 2</option>
                <option value="3" className='list'>Type 3</option>
              </select>
            </div>
            <div class="single-filter">
              <p >Currency</p>
              <select className='nice-select' style={{ fontFamily: 'poppins', color: 'white', borderRadius: '10px' }}>
                <option value="0" className='list'>All</option>
                <option value="1" className='list'>Currency 1</option>
                <option value="2" className='list'>Currency 2</option>
                <option value="3" className='list'>Currency 3</option>
              </select>
            </div>
            <div>
              <button class="filter-btn">Filter</button>
            </div>
          </div>
          <div class="table-responsive mt-4">
            <table class="table">
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

export default Totalpayment
