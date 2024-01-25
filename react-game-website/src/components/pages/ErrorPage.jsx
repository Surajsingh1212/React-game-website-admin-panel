import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/images/404.png';
import { FaArrowLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
  return (
   <>
   <div className="error-section">
   <div className="overlay pt-120 pb-120">
       <div className="container">
           <div className="row justify-content-center align-items-center">
               <div className="col-lg-7">
                   <div className="section-area pt-120 pb-120 text-center">
                       <div className="img-box">
                           <img src={error} alt="Error"/>
                       </div>
                       <h3 className="title" style={{ color: 'white', fontSize: '2.5rem', fontWeight: '600' }}>Oops, Something went wrong !</h3>
                       <div className="btn-area mt-30">
                           <Link to="/" className="cmn-btn link">
                           <FaArrowLeftLong className='fs-4 me-2'/>
                               Back To Home
                           </Link>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
   </>
  )
}

export default ErrorPage
