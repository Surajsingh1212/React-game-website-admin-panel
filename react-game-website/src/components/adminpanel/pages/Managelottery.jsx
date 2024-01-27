import React from 'react'
import {Flex} from 'antd';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap'
import { Switch } from 'antd';
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const Managelottery = () => {
  return (
  <>
  <Row className='align-item-center d-flex' style={{ borderRadius: "10px", backgroundColor: '#3a2372', padding: '12px 30px' }}>
  <Flex justify='space-between'>
      <div>
          <h4 style={{ color: 'white' }} className='pt-3 fw-bold'>Manage Lottery</h4>
      </div>
      <div className='rightSection'>
          <span><Link to='/admin/createlottery'><button className="filter-btn">Create Lottery</button></Link></span>
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
            <th>Action</th>
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
              <p><Switch defaultChecked onChange={onChange} /></p>
            </td>
            <td>
              <p>30000000</p>
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

export default Managelottery
