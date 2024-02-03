import { Flex } from 'antd';
import React from 'react';
import { Row } from 'react-bootstrap';

const Totalpayment = () => {
  return (
    <>
      <Row className='align-item-center d-flex admin-broder-rbg2' >
        <Flex justify='space-between'>
          <div>
            <h4 className='pt-3 fw-bold color-white'>Wallet</h4>
          </div>
          <div className='rightSection'>
            <span>Total Balance : ₹ 10000 </span>
          </div>
        </Flex>
      </Row>
      <Row className='align-item-center d-flex mt-3 admin-broder-rbg admin-table-padding1 '>
        <div className="transaction-box">
          <div className="top-filter d-flex align-items-end">
            <div className="single-filter pop-font" >
              <p>Month</p>
              <input type="text" placeholder="2023/01" />
            </div>
            <div className="single-filter">
              <p>Type</p>
              <select className='nice-select pop-font color-white admin-table-borderradius' >
                <option value="0" className='list'>All</option>
                <option value="1" className='list'>Type 1</option>
                <option value="2" className='list'>Type 2</option>
                <option value="3" className='list'>Type 3</option>
              </select>
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

export default Totalpayment
