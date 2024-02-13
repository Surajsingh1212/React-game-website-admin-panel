import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import axiosInstance from '../../../api';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners'

const Changepassword = () => {
  //htmlFor loader 
  const [loading, setLoading] = useState(false)
  // get user data from localstorage
  const userData = JSON.parse(localStorage.getItem('user'))
  const [showPassword, setShowPassword] = useState(false);
  // htmlForm validation 
  const [validateError, setValidateError] = useState({
    oldPassword: '', newPassword: '', cPassword: ''
  })
  const validateField = (fieldName, value) => {
    let errorMessage = ''
    switch (fieldName) {
      case 'oldPassword':
        errorMessage = value.length <= 7 ? 'Your old password minimum 8 characters long' : '';
        break;
      case 'newPassword':
        errorMessage = value.length <= 7 ? 'Password must be at least 8 characters long' : '';
        break;
      case 'cPassword':
        errorMessage = value !== htmlFormData.newPassword ? 'Passwords do not match' : '';
        break;
      default:
        break;
    }
    setValidateError({
      ...validateError,
      [fieldName]: errorMessage
    })
  }
  const [htmlFormData, sethtmlFormData] = useState({
    oldPassword: '', newPassword: '', cPassword: ''
  })
  const handleInputChange = (e) => {
    sethtmlFormData({
      ...htmlFormData,
      [e.target.name]: e.target.value
    })
    validateField(e.target.name, e.target.value)
  }
  const Navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (!htmlFormData.oldPassword || !htmlFormData.newPassword || !htmlFormData.cPassword) {
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
      const Changepassword = await axiosInstance.post('Members/ChangePassword', {
        MemberId: userData.MemberId,
        CurrentPassword: htmlFormData.oldPassword,
        NewPassword: htmlFormData.newPassword
      })
      if (Changepassword.data && Changepassword.data.StatusCode === 1) {
        setLoading(false)
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
        setLoading(false)
      }
      sethtmlFormData({ oldPassword: '', newPassword: '', cPassword: '' })
    }
    catch (error) {
      Swal.fire({
        icon: 'error',
        title: error,
        text: 'There was an internal server error. Please try again later.',
        confirmButtonColor: '#35bf08',
      })
      setLoading(false)
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
          <form>
            {loading && (
              <div className="loader-container">
                <FadeLoader color="#a1ff00" />
              </div>
            )}
            <h1 className='text-center mt-4 color-white'>Change Password</h1>
              <div className='mt-3 '>
                <Row>
                  <Col className='pop-font'>
                    <label htmlFor="oldpassword">Old Password</label>
                    <div className='d-flex align-item-center position-relative'>
                      <input type={showPassword ? 'text' : 'password'} autoComplete='current-password' required id='oldpassword' placeholder=' Old Password' name='oldPassword' value={htmlFormData.oldPassword} onChange={handleInputChange} />
                      <button className='admin-toggle-password-button fs-5 ' type='button' onClick={passwordTogglevisible}>{showPassword ? <IoEye /> : <FaEyeSlash />}</button>
                    </div>
                    {validateError.oldPassword && <span className='color-red'>{validateError.oldPassword}</span>}
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='pop-font'>
                    <label htmlFor="newpassword">New Password</label>
                    <div className='d-flex align-item-center position-relative'>
                      <input type={showPassword ? 'text' : 'password'} autoComplete='off' required id='newpassword' placeholder='New Password' name='newPassword' value={htmlFormData.newPassword} onChange={handleInputChange} />
                      <button className='admin-toggle-password-button fs-5 ' type='button' onClick={passwordTogglevisible}>{showPassword ? <IoEye /> : <FaEyeSlash />}</button>
                    </div>
                    {validateError.newPassword && <span className='color-red'>{validateError.newPassword}</span>}
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className='pop-font'>
                    <label htmlFor="password">Confirm Password</label>
                    <div className='d-flex align-item-center position-relative'>
                      <input type={showPassword ? 'text' : 'password'} autoComplete='off' required id='password' placeholder='Confirm Password' name='cPassword' value={htmlFormData.cPassword} onChange={handleInputChange} />
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
