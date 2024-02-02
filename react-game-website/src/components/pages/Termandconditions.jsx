import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../section/header/Header';
import Footer from '../section/footer/Footer';
import Backtotop from '../section/backtotop/Backtotop';

const Termandconditions = () => {
  return (
    <>
    <Header/>
      <div className="banner-section inner-banner about-us">
        <div className="overlay">
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10">
                  <div className="main-content">
                    <h2 className='color-white pop-font-weight pop-font-size4'>Terms Conditions</h2>
                    <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-flex align-items-center">
                          <li className="breadcrumb-item"><Link to="/home" className='link'>Home</Link></li>
                          <li className="breadcrumb-item"><Link to="#" className='link'>Pages</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Terms Conditions</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy-content terms">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="top-wrapper">
                  <h4 className='color-white pop-font-size7'>We're always looking for new ways to provide privacy for our customers.</h4>
                  <p>Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor.
                    Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.</p>
                  <ul>
                    <li>— Blandit dignissim nulla varius tristique a sed integer ut tempor.</li>
                    <li>— Augue interdum semper bibendum amet sed.</li>
                    <li>— Dis in at ultricies tortor sit tellus.</li>
                    <li>— Habitant ornare aenean maecenas pretium</li>
                  </ul>
                  <p>Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi. Eget consectetur risus nunc lorem sit consequat aliquet. Dolor velit consectetur etiam scelerisque. Integer interdum sodales scelerisque diam massa quam sit quis. Sed et dui a nam pulvinar. Tristique justo, donec lectus vitae, cursus ligula ridiculus lacus, tincidunt. Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo. Etiam dignissim orci dignissim vitae.</p>
                  <div className="safe-data">
                    <h4 className='color-white pop-font-size7'>Your data is safe with us, we will not share any information with external sources.</h4>
                    <p>Blandit dignissim nulla varius tristique a sed integer ut tempor. Augue interdum semper bibendum amet sed. Dis in at ultricies tortor sit tellus. Habitant ornare aenean maecenas pretium, dui ullamcorper quis. Egestas viverra et id aliquet faucibus rhoncus a. Sollicitudin nisl nulla tempor pretium lorem at mauris faucibus pulvinar.</p>
                    <ul>
                      <li>Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi.</li>
                      <li>Eget consectetur risus nunc lorem sit consequat aliquet. Dolor velit consectetur etiam scelerisque.</li>
                      <li>Integer interdum sodales scelerisque diam massa quam sit quis. Sed et dui a nam pulvinar. Tristique justo, donec lectus vitae, cursus ligula ridiculus lacus, tincidunt.</li>
                      <li>Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo. Etiam dignissim.</li>
                      <li> Aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      <Backtotop/>
    </>
  )
}

export default Termandconditions
