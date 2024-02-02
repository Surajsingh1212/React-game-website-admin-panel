import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { RiUserShared2Line } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Swal from  'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api'

const Signup = () => {
  const [showPassword,setShowPassword] = useState(false)
  //for validaion error 
  const [validateError,setValidateError] = useState({
    Name:'',Email:'',Mobile:'',Password:'',CPassword:'',RCode:''
  })
  const validateField=(fieldName,value)=>{
    let errorMessage='';
    switch(fieldName){
      case 'Name': 
      errorMessage= !/^[a-zA-Z ]{5,}$/.test(value) ? 'Name must be at least 5 characters long':'';
      break;
      case 'Email':
        errorMessage = !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value) ? 'Invalid Email Address':'';
        break;
      case 'Mobile':
        errorMessage= !/^\d{10,}$/.test(value) ? 'Invalid mobile number':'';
        break;
      case 'Password':
        errorMessage= value.length <= 8 ? 'Password must be at least 8 characters long':'';
        break;
      case 'CPassword':
        errorMessage= value !==formData.Password ? 'Passwords do not match':'';
        break;
      case 'RCode':
        errorMessage= value.length<=7 ? 'Invalid Refferal Code ':'';
        break;
        default:
      break;
    }
    setValidateError({
      ...validateError,
      [fieldName]:errorMessage,
    })
  }
  // handle form for getting data for input field 
  const [formData,setFormData] = useState({
    Name:'',Email:'',Mobile:'',Password:'',CPassword:'',RCode:'',agreementChecked:true,promotionsChecked:false
  })
  // handle input change
  const handleInputChange=(e)=>{
    setFormData({
      ...formData,[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    })
    validateField(e.target.name,e.target.value)
  }
  const Navigate = useNavigate()
  // handle input feilds submit
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (!formData.Name || !formData.Email || !formData.Mobile || !formData.Password || !formData.CPassword) {
      Swal.fire({
        icon: 'error',
        title:'All Fields Required !',
        text:'Please Fill The All Fields.',
        confirmButtonColor: '#35bf08',
      })
    };
    try{
      const response = await axiosInstance.post('Members/signUp',{
        ReferralCode: formData.RCode,
        FullName: formData.Name,
        Email: formData.Email,
        Mobile: formData.Mobile,
        Password: formData.Password,
        ConfirmPassword: formData.CPassword,
        TransPassword: null,
        Longitude: '123',
        Latitude: '23312',
        IPAddress: '1232313',
        MacAddress: '231123',
      })
      
      if(response.data && response.data.StatusCode===1){
        Swal.fire({
          icon: 'success',
          title:'Signup Successful!',
          text:'You can now log in with your credentials.',
          confirmButtonColor: '#35bf08',
          confirmButtonText: 'Login',
        }).then((result)=>{
          if(result.isConfirmed){
            Navigate('/login')
          }
        })
        
      }
      else{
        Swal.fire({
          icon: 'error',
          title:'Signup Fialed!',
          text:'There was an error during signup. Please try again.',
          confirmButtonColor: '#35bf08',
        })
      }
     
      setFormData({Name:'',Email:'',Mobile:'',Password:'',CPassword:'',RCode:'',agreementChecked:true,promotionsChecked:false})
    }
    catch(error){
      console.error("Signup Error",error)
      Swal.fire({
        icon: 'error',
        title: 'Internal Server Error',
        text: 'There was an internal server error. Please try again later.',
        confirmButtonColor: '#35bf08',
      })
    }
  }
  
  const passwordTogglevisible=()=>{
    setShowPassword(!showPassword)
  }
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='box12 p-5'>
            <div className="form-area">
              <form>
                <div className="section-text text-center">
                  <h3 className="title color-white pop-font-size6" >Ready to get started?</h3>
                  <p>Already have an member ? <Link to="/login" className="log-btn link" style={{ color: '#a1ff00' }}>Login</Link></p>
                </div>
                <div className="input-area d-flex align-items-center pop-font" >
                  <CiUser className='fs-3 color-white' />
                  <input type="text" placeholder="Full Name" value={formData.Name} onChange={handleInputChange} name='Name'/>
                  </div>
                  {validateError.Name && <span className="color-red">{validateError.Name}</span>}
                <div className="input-area d-flex align-items-center pop-font" >
                  <IoCallOutline className='fs-3 color-white' />
                  <input type="text" placeholder="Mobile"  value={formData.Mobile} onChange={handleInputChange} name='Mobile'/>
                </div>
                {validateError.Mobile && <span className="color-red">{validateError.Mobile}</span>}
                <div className="input-area d-flex align-items-center pop-font" >
                  <CiMail className='fs-3 color-white' />
                  <input autoComplete='useremail' type="email" placeholder="Email" value={formData.Email} onChange={handleInputChange} name='Email'/>
                </div>
                {validateError.Email && <span className="color-red">{validateError.Email}</span>}
                <div className="input-area d-flex align-items-center pop-font" >
                  <CiLock className='fs-3 color-white' />
                  <input autoComplete='new-password' type={showPassword ? 'text':'password'} placeholder="Password" value={formData.Password} onChange={handleInputChange} name='Password'/>
                  <button className='toggle-password-button color-white fs-5' type='button' onClick={passwordTogglevisible}>{showPassword? <IoEye />:<FaEyeSlash />}</button>
                </div>
                {validateError.Password && <span className="color-red">{validateError.Password}</span>}
                <div className="input-area d-flex align-items-center pop-font" >
                  <CiLock className='fs-3 color-white' />
                  <input autoComplete='new-password' type={showPassword ? 'text':'password'} placeholder="Confirm Password" value={formData.CPassword} onChange={handleInputChange} name='CPassword'/>
                  <button className='toggle-password-button color-white fs-5' type='button' onClick={passwordTogglevisible}>{showPassword? <IoEye />:<FaEyeSlash />}</button>
                </div>
                {validateError.CPassword && <span className="color-red">{validateError.CPassword}</span>}
                <div className="input-area d-flex align-items-center pop-font" >
                  <RiUserShared2Line   className='fs-3 color-white' />
                  <input type="text" placeholder="Refferal Code (MRX5107)" value={formData.RCode} onChange={handleInputChange} name='RCode'/>
                </div>
                {validateError.RCode && <span className="color-red">{validateError.RCode}</span>}
                <div className="sidebar-single-item">
                  <label className="checkbox-single d-flex">
                    <span className="content-area">
                      <span className="checkbox-area d-flex">
                        <input type="checkbox" checked="checked" name='agreementChecked' value={formData.agreementChecked} onChange={handleInputChange}/>
                        <span className="checkmark"></span>
                      </span>
                      <span className="item-title d-flex align-items-center">
                        <span>I am at least 18 years of age and I have read,
                          accepted and agreed to the <u><Link to="/termandcondition" className='link'>Privacy Policy</Link>,
                            Bonus T&C, <Link to="/privacypolicy" className='link'>Terms and Conditions</Link></u>
                        </span>
                      </span>
                    </span>
                  </label>
                  <label className="checkbox-single d-flex align-items-center">
                    <span className="content-area">
                      <span className="checkbox-area d-flex">
                        <input type="checkbox" onChange={handleInputChange} value={formData.promotionsChecked} name='promotionsChecked'/>
                        <span className="checkmark"></span>
                      </span>
                      <span className="item-title d-flex align-items-center">
                        <span>I want to receive promotions by e-mail.</span>
                      </span>
                    </span>
                  </label>
                  <div className="btn-area text-center">
                    <div  className="cmn-btn mt-4 link" onClick={handleSubmit}>Get Start Now
                      <FaArrowRightLong className='ms-2' />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>

  )
}

export default Signup
