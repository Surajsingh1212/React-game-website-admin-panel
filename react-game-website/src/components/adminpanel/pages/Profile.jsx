import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axiosInstance from '../../../api';
import ProfileAvatar from '../../../assets/images/table-image-5.png';
import { FadeLoader } from 'react-spinners'

const Profile = () => {
  // get data from localstorage 
  const userData = JSON.parse(localStorage.getItem('user'))
  // for loading 
  const [loading,setLoading] = useState(false)
  // Handle Form Validation 
  const [validateError, setValidateError] = useState({
    Name: '', Email: '', Mobile: ''
  })
  const validateField = (fieldName, value) => {
    let errorMessage = ''
    switch (fieldName) {
      case 'Name':
        errorMessage = !/^[a-zA-Z ]{5,}$/.test(value) ? 'Name must be at least 5 characters long' : '';
        break;
      case 'Email':
        errorMessage = !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value) ? 'Invalid Email Address' : '';
        break;
      case 'Mobile':
        errorMessage = !/^\d{10,}$/.test(value) ? 'Invalid mobile number' : '';
        break;
      default:
        break;
    }
    setValidateError({
      ...validateError,
      [fieldName]: errorMessage
    })
  }
  // for get data form input fields 
  const [formData, setFormData] = useState({
    Name: '', Email: '', Mobile: ''
  })
  // handel input filds change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    validateField(e.target.name,e.target.value)
  }


  // for map data 
  const [mapData, setMapData] = useState({
    Name: '', Email: '', Mobile: '', MCode: '', JoinDate: '', RCode: ''
  })
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'))
    if (userData) {
      setMapData({
        Name: userData.MemberName, Email: userData.Email, Mobile: userData.Mobile, MCode: userData.MemberCode, JoinDate: userData.JoiningDate, RCode: userData.ReferralCode,
      })
    }

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (!formData.Name || !formData.Email || !formData.Mobile) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill in all fields.',
        icon: 'error',
        confirmButtonColor: '#35bf08',
      });
      setLoading(false)
      return;
    }
    try {
      const UpdateProfile = await axiosInstance.post('Members/UpdateProfile', {
        MemberId: userData.MemberId,
        FullName: formData.Name,
        Email: formData.Email,
        Mobile: formData.Mobile
      })
      if (UpdateProfile.data && UpdateProfile.data.status === 'Success') {
        setLoading(false)
        Swal.fire({
          icon: 'success',
          title: ' Update Successful!',
          text: 'Your profile update successfully.',
          confirmButtonColor: '#35bf08',
        })
        const updatedUserData = {
          ...userData,
          MemberName: formData.Name,
          Email: formData.Email,
          Mobile: formData.Mobile
        }
        localStorage.setItem('user', JSON.stringify(updatedUserData))
        setMapData({
          Name: updatedUserData.MemberName, Email: updatedUserData.Email, Mobile: updatedUserData.Mobile, MCode: userData.MemberCode, JoinDate: userData.JoiningDate, RCode: userData.ReferralCode,
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Chnage Fialed!',
          text: UpdateProfile.data.statusText,
          confirmButtonColor: '#35bf08',
        })
        setLoading(false)
      }
      setFormData({ Name: '', Email: '', Mobile: '' })
    }
    catch (error) {
      Swal.fire({
        icon: 'error',
        title: error,
        text: 'There was an internal server error. Please try again later.',
        confirmButtonColor: '#35bf08',
      })
      setLoading(false);
    }
  }
  return (
    <Container>
      <Row className='d-flex align-item-center'>
        <Col className="order-xl-2 mb-5 mb-xl-0 admin-broder-rbg" xl="4">
          <Row className="justify-content-center mt-5">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image text-center">
                <img src={ProfileAvatar} alt='profle' height={180} width={180} />
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="ps-5">
              <div className="h2">
                <p> My Code : {mapData.MCode}</p>
                <p> Full Name : {mapData.Name} </p>
              </div>
              <div>
                <p> Mobile : +91 {mapData.Mobile} </p>
                <p> Email : {mapData.Email}</p>
              </div>
              <div>
                <p> JoinDate : {mapData.JoinDate} </p>

                <p> My Refferal Code : {mapData.RCode ? 'mapData.RCode' : 'No Refferal'} </p>
              </div>
            </Col>
          </Row>
        </Col>
          <Col className="order-xl-1" xl="8">
          {loading && (
            <div className="loader-container">
              <FadeLoader color="#a1ff00" />
            </div>
          )}
          <Row className="align-items-center">
            <Col>
              <h3 className="mb-0 color-white">My account</h3>
            </Col>
          </Row>
          <div>
            <h6 className="heading-small  mb-4 color-white">
              User information
            </h6>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6" className='pop-font'>
                  <label htmlFor="input-username"> Full Name</label>
                  <input type='text' required id='input-username' placeholder='Enter Name' name='Name' value={formData.Name} onChange={handleInputChange} />
                 {validateError.Name && <span className='color-red'>{validateError.Name}</span>}
                  </Col>
                <Col lg="6" className='pop-font'>
                  <label htmlFor="email">Email address</label>
                  <input type='email' required id='email' placeholder='Enter email' name='Email' value={formData.Email} onChange={handleInputChange} />
                  {validateError.Email && <span className='color-red'>{validateError.Email}</span>}
                  </Col>
              </Row>
              <Row>
                <Col lg="6" className='pop-font'>
                  <label htmlFor="mobile">Mobile</label>
                  <input type='text' required id='mobile' placeholder='Enter mobile' name='Mobile' value={formData.Mobile} onChange={handleInputChange} />
                  {validateError.Mobile && <span className='color-red'>{validateError.Mobile}</span>}
                  </Col>
                <Col lg="6" className='pop-font'>
                  <label htmlFor="password">Password</label>
                  <input type="password" autoComplete='current-password' readOnly id='oldpassword' placeholder='For Password Go To Change Password' />
                </Col>
              </Row>
            </div>
          </div>
          <Row className="align-items-center mt-4">
            <Col className="text-center">
              <button className='filter-btn' onClick={handleSubmit}>
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
