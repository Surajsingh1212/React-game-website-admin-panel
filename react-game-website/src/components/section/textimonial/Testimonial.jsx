import React from 'react';
import work1 from '../../../assets/images/icon/how-works-icon-1.png'
import work2 from '../../../assets/images/icon/how-works-icon-2.png'
import work3 from '../../../assets/images/icon/how-works-icon-3.png'

const Testimonial = () => {
  const stepItems = [
    { image: work1, title: 'Instant Register', para: 'Instant Register within 5 minutes and get ₹ 100 bonus' },
    { image: work2, title: 'Fastest Deposit', para: 'Deposit with Fastest Secure Payment Gateway' },
    { image: work3, title: 'Play and get Win', para: 'Get fastest Withdraw with Payment Gateway' },
  ]
  return (
    <>
      <div className="how-works">
        <div className="overlay pb-120">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-header text-center">
                  <h5 className="sub-title">How it works</h5>
                  <h2 className="title color-white pop-font-size2" >It’s Really Easy!</h2>
                  <p>It’s easier than you think Follow 3 simple easy steps</p>
                </div>
              </div>
            </div>
            <div className="row cus-mar">
              {stepItems.map((item, index) => (
                <div className="col-xl-4 col-sm-6">
                  <div className="single-box text-center" key={index}>
                    <div className="thumb">
                      <img src={item.image} alt="#" />
                    </div>
                    <div className="text-area">
                      <h5 className='fw-bold fs-4 color-white'>{item.title}</h5>
                      <p>{item.para}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
