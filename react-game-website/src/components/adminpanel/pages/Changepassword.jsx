import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import axiosInstance from '../../../api';
import { useNavigate } from 'react-router-dom';

const Changepassword = () => {
  // get user data from localstorage
  const userData = JSON.parse(localStorage.getItem('user'))
  const [showPassword, setShowPassword] = useState(false);
  // Form validation 
  const [validateError, setValidateError] = useState({
    oldPassword: '', newPassword: '', cPassword: ''
  })
  const validateField = (fieldName, value) => {
    let errorMessage = ''
    switch (fieldName) {
      case 'oldPassword':
        errorMessage = value.length <= 8 ? 'Your old password minimum 8 characters long' : '';
        break;
      case 'newPassword':
        errorMessage = value.length <= 8 ? 'Password must be at least 8 characters long' : '';
        break;
      case 'cPassword':
        errorMessage = value !== formData.newPassword ? 'Passwords do not match' : '';
        break;
      default:
        break;
    }
    setValidateError({
      ...validateError,
      [fieldName]: errorMessage
    })
  }
  const [formData, setFormData] = useState({
    oldPassword: '', newPassword: '', cPassword: ''
  })
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    validateField(e.target.name,e.target.value)
  }
  const Navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.oldPassword || !formData.newPassword || !formData.cPassword) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill in all fields.',
        icon: 'error',
        confirmButtonColor: '#35bf08',
      });
      return;
    }
    try {
      const Changepassword = await axiosInstance.post('Members/ChangePassword', {
        MemberId: userData.MemberId,
        CurrentPassword: formData.oldPassword,
        NewPassword: formData.newPassword
      })
      if (Changepassword.data && Changepassword.data.StatusCode === 1) {
        Swal.fire({
          icon: 'success',
          title: 'Successful!',
          text: 'Your password change successfully.',
          confirmButtonColor: '#35bf08',
        })
        Navigate('/admin/profile')
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Chnage Fialed!',
          text: 'Your credentials invalid.',
          confirmButtonColor: '#35bf08',
        })
      }
      setFormData({ oldPassword: '', newPassword: '', cPassword: '' })
    }
    catch (error) {
      Swal.fire({
        icon: 'error',
        title: error,
        text: 'There was an internal server error. Please try again later.',
        confirmButtonColor: '#35bf08',
      })
    }
  }
  const passwordTogglevisible = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
      <Container>
        <Row className='px-0'>
          <div className='col-md-3 '></div>
          <div className='col-md-6 p-5 admin-broder-rbg'>
            <h1 className='text-center mt-4 color-white'>Change Password</h1>
            <form>
              <div className='mt-3 '>
                <Row>
                  <Col className='pop-font'>
                    <label for="oldpassword">Old Password</label>
                    <div className='d-flex align-item-center position-relative'>
                      <input type={showPassword ? 'text' : 'password'} autoComplete='current-password' required id='oldpassword' placeholder=' Old Password' name='oldPassword' value={formData.oldPassword} onChange={handleInputChange} />
                      <button className='admin-toggle-password-button fs-5 ' type='button' onClick={passwordTogglevisible}>{showPassword ? <IoEye /> : <FaEyeSlash />}</button>
                    </div>
                    {validateError.oldPassword && <span className='color-red'>{validateError.oldPassword}</span>}
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='pop-font'>
                    <label for="newpassword">New Password</label>
                    <div className='d-flex align-item-center position-relative'>
                      <input type={showPassword ? 'text' : 'password'} autoComplete='off' required id='newpassword' placeholder='New Password' name='newPassword' value={formData.newPassword} onChange={handleInputChange} />
                      <button className='admin-toggle-password-button fs-5 ' type='button' onClick={passwordTogglevisible}>{showPassword ? <IoEye /> : <FaEyeSlash />}</button>
                    </div>
                    {validateError.newPassword && <span className='color-red'>{validateError.newPassword}</span>}
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='pop-font'>
                    <label for="password">Confirm Password</label>
                    <div className='d-flex align-item-center position-relative'>
                      <input type={showPassword ? 'text' : 'password'} autoComplete='off' required id='password' placeholder='Confirm Password' name='cPassword' value={formData.cPassword} onChange={handleInputChange} />
                    </div>
                    {validateError.cPassword && <span className='color-red'>{validateError.cPassword}</span>}
                  </Col>
                </Row>
                <Row className='mt-4 '>
                  <Col>
                    <button className='shadow-lg filter-btn w-100' onClick={handleSubmit}>Change Now </button>
                  </Col>
                </Row>
              </div>
            </form>
          </div>
          <div className='col-md-3'></div>
        </Row>
      </Container>
    </>
  )
}

export default Changepassword
