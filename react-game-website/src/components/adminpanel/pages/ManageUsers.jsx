import React from 'react';
import { Row } from 'react-bootstrap';
  const ManageUsers = () => {
    return (
      <>
        <Row className='align-item-center d-flex mt-3 admin-broder-rbg admin-table-padding1 '>
          <div className="transaction-box">
            <div className="table-responsive mt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Member Code</th>
                    <th>Referral Code</th>
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
                      <p>234345554</p>
                    </td>
                    <td>
                      <p>344.54646</p>
                    </td>
                    <td>
                      <p>MRX342323</p>
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
