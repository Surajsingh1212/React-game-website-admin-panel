import React from 'react';
import work1 from '../../../assets/images/icon/how-works-icon-1.png'
import work2 from '../../../assets/images/icon/how-works-icon-2.png'
import work3 from '../../../assets/images/icon/how-works-icon-3.png'

const Testimonial = () => {
  return (
    <>
      <div className="how-works">
        <div className="overlay pb-120">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-header text-center">
                  <h5 className="sub-title">How it works</h5>
                  <h2 className="title" style={{fontSize:'3.5rem',color:'white'}}>It’s Really Easy!</h2>
                  <p>It’s easier than you think.Follow 3 simple easy steps</p>
                </div>
              </div>
            </div>
            <div className="row cus-mar">
              <div className="col-xl-4 col-sm-6">
                <div className="single-box text-center">
                  <div className="thumb">
                    <img src={work1} alt="#" />
                  </div>
                  <div className="text-area">
                    <h5 style={{color:'white'}} className='fw-bold fs-4'>Instant Register</h5>
                    <p>Instant Register within 5 minutes</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="single-box mid text-center">
                  <div className="thumb">
                    <img src={work2} alt="#" />
                  </div>
                  <div className="text-area">
                    <h5 style={{color:'white'}} className='fw-bold fs-4'>Fastest Deposit</h5>
                    <p>Deposit with Fastest Lightning Network</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="single-box text-center">
                  <div className="thumb">
                    <img src={work3} alt="#" />
                  </div>
                  <div className="text-area">
                    <h5 style={{color:'white'}} className='fw-bold fs-4'>Play and get Win</h5>
                    <p>Get fastest Withdraw with Lightning Network</p>
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

export default Testimonial
