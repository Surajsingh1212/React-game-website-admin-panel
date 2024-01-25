import React from 'react'
import { useTime } from 'react-timer-hook';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap'
import { Flex } from 'antd';

const AdminLottery = () => {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour' });
  return (
    <>
      <Row className='align-item-center d-flex' style={{ borderRadius: "10px", backgroundColor: '#3a2372', padding: '12px 30px' }}>
        <Flex justify='space-between'>
          <div>
            <h4 style={{ color: 'white' }} className='pt-3 fw-bold'>Daily Lottery</h4>
            <div>
              <h6 className="sub-title">Lottery Draw Starts In:</h6>
              <div className=" d-flex align-items-center">
                <p> 0d {hours}h {minutes}m {seconds}s {ampm}</p>
              </div>
            </div>
          </div>
          <div className='rightSection'>
            <span>Prize Pool : ₹ 3453453 </span>
            <div className='mt-2'>
              <Link to="/signup" className="filter-btn link fw-bold">
                buy  Ticket for just ₹ 100
              </Link>
            </div>
          </div>
        </Flex>
      </Row>
      <Row className='align-item-center d-flex mt-3  ' style={{ borderRadius: "10px", backgroundColor: '#201048', padding: '12px 30px' }}>
        <div className="transaction-box">
          <div className="top-filter d-flex align-items-end">
            <div className="single-filter" >
              <p>Search By Name</p>
              <input type="text" placeholder="Enter Name" style={{ fontFamily: 'poppins' }} />
            </div>
            <div className="single-filter">
              <p>Ticket</p>
              <select className='nice-select' style={{ fontFamily: 'poppins', color: 'white', borderRadius: '10px' }}>
                <option value="0" className='list'>All</option>
                <option value="1" className='list'>1</option>
                <option value="2" className='list'>2</option>
                <option value="3" className='list'>3</option>
              </select>
            </div>
            <div className="single-filter">
              <p >Amount</p>
              <select className='nice-select' style={{ fontFamily: 'poppins', color: 'white', borderRadius: '10px' }}>
                <option value="0" className='list'>All</option>
                <option value="1" className='list'>High to Low</option>
                <option value="2" className='list'>Low to High</option>
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
                  <th>Lottery Name</th>
                  <th>Date/Time</th>
                  <th>Ticket</th>
                  <th>Win Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                  <p>Spin Wheel</p>
                  </th>
                  <td>
                    <p>2023-01-07  16-33-53</p>
                  </td>
                  <td>
                    <p>01</p>
                  </td>
                  <td>
                    <p>00</p>
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

export default AdminLottery
