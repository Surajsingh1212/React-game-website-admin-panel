import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileAvatar from '../../../assets/images/table-image-5.png';

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col className="order-xl-2 mb-5 mb-xl-0 " xl="4" style={{ borderRadius: "10px", backgroundColor: '#201048' }}>
          <Row className="justify-content-center mt-5">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image text-center">
                <img src={ProfileAvatar} alt='profle' height={180} width={180} />
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-center">
              <div className="h2">
                <p> Suraj Singh</p>
              </div>
              <div>
                <p> +91 63934045649 </p>
                <p> demo@gmail.com</p>
              </div>
              <hr className="my-4" />
              <p>
                Hello, I'm Suraj Kumar, a passionate and dedicated web developer with a flair.
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="order-xl-1" xl="8">
          <Row className="align-items-center">
            <Col>
              <h3 className="mb-0" style={{ color: 'white' }}>My account</h3>
            </Col>
          </Row>
          <div>
            <h6 className="heading-small  mb-4" style={{ color: 'white' }}>
              User information
            </h6>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <label for="input-username"> Full Name</label>
                  <input type='text' required id='input-username' placeholder='Enter Name' />
                </Col>
                <Col lg="6">
                  <label for="email">Email address</label>
                  <input type='email' required id='email' placeholder='Enter email' />
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <label for="mobile">Mobile</label>
                  <input type='text' required id='mobile' placeholder='Enter mobile' />
                </Col>
                <Col lg="6">
                  <label for="password">Password</label>
                  <input type='password' required id='password' placeholder='Enter Password' />
                </Col>
              </Row>
            </div>
            <hr className="my-4" />
            {/* Address */}
            <h6 className="heading-small mb-4" style={{ color: 'white' }}>
              Contact information
            </h6>
            <div className="pl-lg-4">
              <Row>
                <Col md="12">
                  <label for="address">Address</label>
                  <input type='text' required id='address' placeholder='Enter Address' />
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <label for="city">City</label>
                  <input type='text' required id='city' placeholder='Enter City' />
                </Col>
                <Col lg="4">
                  <label for="country">Country</label>
                  <input type='text' required id='country' placeholder='Enter Country' />
                </Col>
                <Col lg="4">
                  <label for="pincode">Postal code</label>
                  <input type='number' required id='pincode' placeholder='Enter Pincode' />
                </Col>
              </Row>
            </div>
            <hr className="my-4" />
            {/* Description */}
            <h6 className="heading-small mb-4" style={{ color: 'white' }}>About me</h6>
            <div className="pl-lg-4">
              <label for="about-us">About Me</label>
              <input type='text' required id='about-us' placeholder='About' />
            </div>
          </div>
          <Row className="align-items-center mt-4">
            <Col className="text-center">
              <button className='filter-btn'>
                Updated Now
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
