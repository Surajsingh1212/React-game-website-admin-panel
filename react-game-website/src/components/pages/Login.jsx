import React, { useState } from 'react';
import { CiLock, CiMail } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosInstance from '../../api';

const Login = () => {
  // handle show password 
  const [showPassword, setShowPassword] = useState(false)
  // Handle Form Validation 
  const [validateError,setValidateError] = useState({
    Email: '', Password: ''
  })
  const validateField=(fieldName,value)=>{
    let errorMessage = ''
    switch(fieldName){
      case 'Email':
      errorMessage = !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value) ? 'Invalid Email Address':'';
      break;
      case 'Password':
        errorMessage= value.length <= 7 ? 'Password must be at least 8 characters long':'';
        break;
      default:
        break;
    }
    setValidateError({
      ...validateError,
      [fieldName]:errorMessage
    })
  }
  // Handle Form data
  const [formData, setFormData] = useState({
    Email: '', Password: ''
  })
  // Handle Input Change 
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    validateField(e.target.name,e.target.value)
  }
  const Navigate = useNavigate()
  // Handle Form Submit 
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.Email || !formData.Password) {
      Swal.fire({
        icon: 'error',
        title: 'All Fields Required !',
        text: 'Please Fill The All Fields.',
        confirmButtonColor: '#35bf08',
      })
    };
    try {
      const userLogin = await axiosInstance.post('Members/CheckLogin', {
        UserName: formData.Email,
        Password: formData.Password,
        Longitude: '123',
        Latitude: '23312',
        IPAddress: '1232313',
        MacAddress: '231123',
      })
      if (userLogin.data && userLogin.data.StatusCode === 1) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'You can now Change in with your credentials.',
          confirmButtonColor: '#35bf08',
        })
        // user local storage user data and access tocken 
        localStorage.setItem('user',JSON.stringify(userLogin.data.UD))
        localStorage.setItem('authToken',userLogin.data.access_token)

        // redirect bassed on the user login
        const userEmail = userLogin.data.UD?.Email
        const userMemberId = userLogin.data.UD?.MemberId
        if(userEmail==='mrx@gmail.com' && userMemberId==='hpoTowNTzvNX8Y18dVcN/g=='){
          Navigate('/admin/dashboard')
        }
        else{
          Navigate('/admin/games')
        }
        setFormData({ Email: '', Password: '' })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Login Fialed!',
          text: 'Enter correct login creadentials. Please try again.',
          confirmButtonColor: '#35bf08',
        })
      }
      
    }
    catch (error) {
      console.error("Login Error", error)
      Swal.fire({
        icon: 'error',
        title: 'Internal Server Error',
        text: 'There was an internal server error. Please try again later.',
        confirmButtonColor: '#35bf08',
      })
    }
  }
  const passwordTogglevisible = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className='main'>
      <div className='box12 p-5'>
        <div className="form-area">
          <form>
            <div className="section-text text-center">
              <h3 className="title pt-2 color-white pop-font-size6">Welcome Back</h3>
              <p>Not a member ? <Link to="/signup" className="reg-btn link" style={{ color: '#a1ff00' }}>Register</Link></p>
            </div>
            <div className="input-area  d-flex align-items-center pop-font">
              <CiMail className='fs-3 color-white' />
              <input type="email" placeholder="Email" autoComplete='useremail' name='Email' onChange={handleInputChange} value={formData.Email} />
            </div>
            {validateError.Email && <span className='color-red'>{validateError.Email}</span>}
            <div className="input-area d-flex align-items-center pop-font">
              <CiLock className='fs-3 color-white' />
              <input type={showPassword ? 'text' : 'password'} placeholder="Password" autoComplete='current-password' name='Password' onChange={handleInputChange} value={formData.Password} />
              <button className='toggle-password-button color-white fs-5' type='button' onClick={passwordTogglevisible}>{showPassword ? <IoEye /> : <FaEyeSlash />}</button>
            </div>
            {validateError.Password && <span className='color-red'>{validateError.Password}</span>}
            <div className="checkbox-item d-flex justify-content-between">
              <label className="checkbox-single d-flex align-items-center">
                <span className="content-area">
                  <span className="checkbox-area d-flex">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </span>
                  <span className="item-title d-flex align-items-center">
                    <span>Remember</span>
                  </span>
                </span>
              </label>
              <p><Link to='#' className='link color-white'>Forget Password</Link></p>
            </div>
            <div className="btn-area text-center">
              <div className="cmn-btn mt-4 link" onClick={handleSubmit}>Login
                <FaArrowRightLong className='ms-2' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
