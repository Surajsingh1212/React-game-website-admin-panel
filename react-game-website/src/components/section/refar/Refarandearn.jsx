import React from 'react';
import { Link } from 'react-router-dom';
import shap1 from '../../../assets/images/refer-shape.png';
import shap2 from '../../../assets/images/refer-illus.png';
import { FaArrowRightLong } from "react-icons/fa6";

const Refarandearn = () => {
  return (
 <>
 <div className="refer-section">
 <div className="overlay pt-120 pb-120">
     <div className="container ">
         <div className="shape-area">
             <img src={shap1} alt="#"/>
         </div>
         <div className="row justify-content-center align-items-center">
             <div className="col-lg-6 order-lg-0 order-1">
                 <div className="bg-img d-rtl">
                     <img src={shap2} alt="#" className="max-un"/>
                 </div>
             </div>
             <div className="col-lg-6">
                 <div className="section-text">
                     <h5 className="sub-title mb-2" style={{fontSize:'1.5rem'}}>Earn more with</h5>
                     <h2 className="title" style={{fontSize:'4rem',color:'white'}}>Refer and Earn</h2>
                     <p>When you successfully join bizera Partners, you will automatically receive an amazing 30% to 50% Revenue Share based on the number of New Depositing Customers you send our way.</p>
                 </div>
                 <div className="btn-area">
                     <Link to="/signup" className="cmn-btn reg link" data-bs-toggle="modal" data-bs-target="#loginMod">
                         Join Now
                         <FaArrowRightLong className='ms-2'/>
                     </Link>
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>
 </>
  )
}

export default Refarandearn
