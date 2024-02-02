import React from 'react'
import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap'
import { Switch } from 'antd';
const onChange = (checked) => {
  console.log(`switch to ${checked}`);}

  const ManageUsers = () => {
    return (
      <>
        <Row className='align-item-center d-flex admin-broder-rbg2'>
          <Flex justify='space-between'>
            <div>
              <h4 className='pt-3 fw-bold color-white'>Manage Users</h4>
            </div>
            <div className='rightSection'>
              <span><Link to='/admin/createusers'><button className="filter-btn">Add User</button></Link></span>
            </div>
          </Flex>
        </Row>
        <Row className='align-item-center d-flex mt-3 admin-broder-rbg admin-table-padding1 '>
          <div className="transaction-box">
            <div className="top-filter d-flex align-items-end">
              <div className="single-filter pop-font" >
                <p>Search By Name</p>
                <input type="text" placeholder="Enter Name"  />
              </div>
              <div className="single-filter">
                <p>Profile</p>
                <select className='nice-select pop-font color-white admin-table-borderradius'>
                  <option value="0" className='list'>All</option>
                  <option value="1" className='list'>Active</option>
                  <option value="1" className='list'>Inactive</option>
                </select>
              </div>
              <div className="single-filter">
                <p >Amount</p>
                <select className='nice-select pop-font color-white admin-table-borderradius'>
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
                    <th>User Name</th>
                    <th>Register Date</th>
                    <th>Profile</th>
                    <th>Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <p>Suraj Singh</p>
                    </th>
                    <td>
                      <p>27/01/2024</p>
                    </td>
                    <td>
                      <p><Switch defaultChecked onChange={onChange} /></p>
                    </td>
                    <td>
                      <p>1234567890</p>
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

  export default ManageUsers
