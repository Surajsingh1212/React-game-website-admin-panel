import React,{useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileAvatar from '../../../assets/images/table-image-5.png';
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import axiosInstance from '../../../api';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    Name: '', Email: '', Mobile: ''
  })
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const Navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.Name || !formData.Email || !formData.Mobile) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill in all fields.',
        icon: 'error',
        confirmButtonColor: '#35bf08',
      });
      return;
    }
    try {
      const UpdateProfile = await axiosInstance.post('Members/UpdateProfile', {
        MemberId:userData.MemberId,
        FullName:formData.Name,
        Email:formData.Email ,
        Mobile:formData.Mobile
      })
      if(UpdateProfile.data &&  UpdateProfile.data.StatusCode === 1){
        Swal.fire({
          icon: 'success',
          title: ' Update Successful!',
          text: 'Your profile update successfully.',
          confirmButtonColor: '#35bf08',
        })
        Navigate('/admin/dashboard')
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Chnage Fialed!',
          text: 'Your credentials invalid.',
          confirmButtonColor: '#35bf08',
        })
      }
      setFormData({Name: '', Email: '', Mobile: ''})
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
    <Container>
      <Row>
        <Col className="order-xl-2 mb-5 mb-xl-0 admin-broder-rbg" xl="4">
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
                  <label for="input-username"> Full Name</label>
                  <input type='text' required id='input-username' placeholder='Enter Name' name='Name' value={formData.Name} onChange={handleInputChange}/>
                </Col>
                <Col lg="6" className='pop-font'>
                  <label for="email">Email address</label>
                  <input type='email' required id='email' placeholder='Enter email' name='Email' value={formData.Email} onChange={handleInputChange} />
                </Col>
              </Row>
              <Row>
                <Col lg="6" className='pop-font'>
                  <label for="mobile">Mobile</label>
                  <input type='text' required id='mobile' placeholder='Enter mobile' name='Mobile' value={formData.Mobile} onChange={handleInputChange}/>
                </Col>
                <Col lg="6" className='pop-font'>
                  <label for="password">Password</label>
                  <input type={showPassword ? 'text' : 'password'} autoComplete='current-password' required id='oldpassword' placeholder=' Old Password' onChange={handleInputChange} />
                  <button className='admin-toggle-password-button fs-5 ' type='button' onClick={passwordTogglevisible}>{showPassword ? <IoEye /> : <FaEyeSlash />}</button>
                </Col>
              </Row>
            </div>
            <hr className="my-4" />
            {/* Address */}
            <h6 className="heading-small mb-4 color-white">
              Contact information
            </h6>
            <div className="pl-lg-4">
              <Row>
                <Col md="12" className='pop-font'>
                  <label for="address">Address</label>
                  <input type='text' required id='address' placeholder='Enter Address' />
                </Col>
              </Row>
              <Row>
                <Col lg="4" className='pop-font'>
                  <label for="city">City</label>
                  <input type='text' required id='city' placeholder='Enter City' />
                </Col>
                <Col lg="4" className='pop-font'>
                  <label for="country">Country</label>
                  <input type='text' required id='country' placeholder='Enter Country' />
                </Col>
                <Col lg="4" className='pop-font'>
                  <label for="pincode">Postal code</label>
                  <input type='number' required id='pincode' placeholder='Enter Pincode' />
                </Col>
              </Row>
            </div>
            <hr className="my-4" />
            {/* Description */}
            <h6 className="heading-small mb-4 color-white">About me</h6>
            <div className="pl-lg-4 pop-font">
              <label for="about-us">About Me</label>
              <input type='text' required id='about-us' placeholder='About' />
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
