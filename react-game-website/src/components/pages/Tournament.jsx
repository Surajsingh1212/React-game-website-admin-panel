import React from 'react';
import Header from '../section/header/Header';
import Footer from '../section/footer/Footer';
import { Link } from 'react-router-dom';
import { useTime } from 'react-timer-hook';
import image1 from '../../assets/images/tournament-illus.png';
import search from '../../assets/images/icon/search-icon-2.png';
import tournament1 from '../../assets/images/finished-tournaments-img-1.png';
import tournament2 from '../../assets/images/finished-tournaments-img-2.png';
import tournament3 from '../../assets/images/finished-tournaments-img-3.png';
import tournament4 from '../../assets/images/finished-tournaments-img-4.png';
import tournament5 from '../../assets/images/tournament-img-4.png';
import playerbg1 from '../../assets/images/players-circle.png';
import player1 from '../../assets/images/players-img-1.png';
import player2 from '../../assets/images/players-img-2.png';
import player3 from '../../assets/images/players-img-3.png';
import Backtotop from '../section/backtotop/Backtotop';

const Tournament = () => {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour' });
  return (
    <>
      <Header />
      <div className="banner-section inner-banner tournaments">
        <div className="overlay">
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10">
                  <div className="main-content">
                    <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: '600' }}>Tournaments</h1>
                    <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-flex align-items-center">
                          <li className="breadcrumb-item"><Link to="/home" className='link'>Home</Link></li>
                          <li className="breadcrumb-item"><Link to="#" className='link'>Pages</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Tournaments</li>
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
      <div className="tournaments">
        <div className="overlay pt-120 pb-120">
          <div className="container cus-mar">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="lottery-content">
                  <div className="section-text text-center">
                    <h5 className="sub-title">Join Your  Best Tournament</h5>
                    <h2 className="title" style={{ color: 'white', fontSize: '3rem', fontWeight: '600' }}>Tournaments Games</h2>
                    <p>Play in multi-player tournaments  or head  to head for cash prizes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 nav-head mb-40 gap-4 d-flex align-items-center justify-content-between">
                <div className="input-field">
                  <select className='nice-select ' style={{ fontFamily: 'poppins', color: 'white' }}>
                    <option value="1" className='list'>Upcoming</option>
                    <option value="2" className='list'>Upcoming 1</option>
                    <option value="3" className='list'>Upcoming 2</option>
                    <option value="4" className='list'>Upcoming 3</option>
                  </select>
                </div>
                <div className="input-field">
                  <select className='nice-select ' style={{ fontFamily: 'poppins', color: 'white' }}>
                    <option value="1" className='list'>Select Team Size</option>
                    <option value="2" className='list'>1</option>
                    <option value="3" className='list'>2</option>
                    <option value="4" className='list'>3</option>
                  </select>
                </div>
                <div className="input-field">
                  <select className='nice-select' style={{ fontFamily: 'poppins', color: 'white' }}>
                    <option value="1" className='list'>Select Entry Fee</option>
                    <option value="2" className='list'>1</option>
                    <option value="3" className='list'>2</option>
                    <option value="4" className='list'>3</option>
                  </select>
                </div>
                <div className="input-field">
                  <div className="input-area d-flex align-items-center">
                    <img src={search} alt="#" />
                    <input type="text" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-box">
              <div className="row">
                <div className="col-lg-8">
                  <img src={tournament1} alt="#" />
                </div>
                <div className="col-lg-4">
                  <div className="single-content" style={{ fontFamily: 'poppins', color: 'white' }}>
                    <h5>Weekend Runs</h5>
                    <div className="count-area mt-4 mb-4 text-center">
                      <h6>Ends in:</h6>
                      <div className="countdown mt-2 d-flex align-items-center justify-content-center">
                        <h5><span>0d {hours}h {minutes}m {seconds}s {ampm}</span></h5>
                      </div>
                    </div>
                    <div className="prize-pool">
                      <p className="mdr">Prize pool:</p>
                      <h5>₹10,000</h5>
                    </div>
                    <div className="btn-area mt-4">
                      <Link to="#" className="cmn-btn link fw-bold">Participate</Link>
                    </div>
                    <div className="abs-area">
                      <img src={image1} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-box">
              <div className="row">
                <div className="col-lg-8">
                  <img src={tournament2} alt="#" />
                </div>
                <div className="col-lg-4">
                  <div className="single-content" style={{ fontFamily: 'poppins', color: 'white' }}>
                    <h5>Late Spring Break</h5>
                    <div className="count-area mt-4 mb-4 text-center">
                      <h6>Ends in:</h6>
                      <div className="countdown mt-2 d-flex align-items-center justify-content-center">
                        <h5><span>0d {hours}h {minutes}m {seconds}s {ampm}</span></h5>
                      </div>
                    </div>
                    <div className="prize-pool">
                      <p className="mdr">Prize pool:</p>
                      <h5>₹10,000</h5>
                    </div>
                    <div className="btn-area mt-4">
                      <Link to="#" className="cmn-btn link fw-bold">Participate</Link>
                    </div>
                    <div className="abs-area">
                      <img src={image1} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-box">
              <div className="row">
                <div className="col-lg-8">
                  <img src={tournament3} alt="#" />
                </div>
                <div className="col-lg-4">
                  <div className="single-content" style={{ fontFamily: 'poppins', color: 'white' }}>
                    <h5>The Wild Week</h5>
                    <div className="count-area mt-4 mb-4 text-center">
                      <h6>Ends in:</h6>
                      <div className="countdown mt-2 d-flex align-items-center justify-content-center">
                        <h5><span>0d {hours}h {minutes}m {seconds}s {ampm}</span></h5>
                      </div>
                    </div>
                    <div className="prize-pool">
                      <p className="mdr">Prize pool:</p>
                      <h5>₹10,000</h5>
                    </div>
                    <div className="btn-area mt-4">
                      <Link to="#" className="cmn-btn link fw-bold">Participate</Link>
                    </div>
                    <div className="abs-area">
                      <img src={image1} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-box">
              <div className="row">
                <div className="col-lg-8">
                  <img src={tournament4} alt="#" />
                </div>
                <div className="col-lg-4">
                  <div className="single-content" style={{ fontFamily: 'poppins', color: 'white' }}>
                    <h5>Slot of the Week</h5>
                    <div className="count-area mt-4 mb-4 text-center">
                      <h6>Ends in:</h6>
                      <div className="countdown mt-2 d-flex align-items-center justify-content-center">
                        <h5><span>0d {hours}h {minutes}m {seconds}s {ampm}</span></h5>
                      </div>
                    </div>
                    <div className="prize-pool">
                      <p className="mdr">Prize pool:</p>
                      <h5>₹10,000</h5>
                    </div>
                    <div className="btn-area mt-4">
                      <Link to="#" className="cmn-btn link fw-bold">Participate</Link>
                    </div>
                    <div className="abs-area">
                      <img src={image1} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="finished-tournaments">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="con-lg-8">
                <div className="section-text text-center">
                  <h2 className="title" style={{ color: 'white', fontSize: '3rem', fontWeight: '600' }}>Finished Tournaments</h2>
                </div>
              </div>
            </div>
            <div className="row cus-mar" style={{ fontFamily: 'poppins', color: 'white' }}>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-box">
                  <div className="img-area">
                    <img src={tournament5} alt="#" />
                    <div className="abs-area">
                      <span className="mdr">Finished</span>
                    </div>
                  </div>
                  <div className="text-area">
                    <h5>Gamzix</h5>
                    <p className="mdr">19.05 - 27.05</p>
                    <div className="prize-pool">
                      <p className="mdr">Prize pool:</p>
                      <h5>₹10,000</h5>
                    </div>
                    <Link to="#" className='link text-white'>Result</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6" style={{ fontFamily: 'poppins', color: 'white' }}>
                <div className="single-box">
                  <div className="img-area">
                    <img src={tournament2} alt="#" />
                    <div className="abs-area">
                      <span className="mdr">Finished</span>
                    </div>
                  </div>
                  <div className="text-area">
                    <h5>Gamzix</h5>
                    <p className="mdr">19.05 - 27.05</p>
                    <div className="prize-pool">
                      <p className="mdr">Prize pool:</p>
                      <h5>₹10,000</h5>
                    </div>
                    <Link to="#" className="link text-white">Result</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6" style={{ fontFamily: 'poppins', color: 'white' }}>
                <div className="single-box">
                  <div className="img-area">
                    <img src={tournament3} alt="#" />
                    <div className="abs-area">
                      <span className="mdr">Finished</span>
                    </div>
                  </div>
                  <div className="text-area">
                    <h5>Gamzix</h5>
                    <p className="mdr">19.05 - 27.05</p>
                    <div className="prize-pool">
                      <p className="mdr">Prize pool:</p>
                      <h5>₹10,000</h5>
                    </div>
                    <Link to="#" className='link text-white'>Result</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6" style={{ fontFamily: 'poppins', color: 'white' }}>
                <div className="single-box">
                  <div className="img-area">
                    <img src={tournament4} alt="#" />
                    <div className="abs-area">
                      <span className="mdr">Finished</span>
                    </div>
                  </div>
                  <div className="text-area">
                    <h5>Gamzix</h5>
                    <p className="mdr">19.05 - 27.05</p>
                    <div className="prize-pool">
                      <p className="mdr">Prize pool:</p>
                      <h5>₹10,000</h5>
                    </div>
                    <Link to="#" className='link text-white'>Result</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="players-of-week">
        <div className="overlay pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="con-lg-8">
                <div className="section-header text-center">
                  <h2 className="title" style={{ color: 'white', fontSize: '3rem', fontWeight: '600' }}>Players of The Week</h2>
                  <p>We take a look at the best player of the week awarded </p>
                </div>
              </div>
            </div>
            <div className="row cus-mar" style={{ fontFamily: 'poppins', color: 'white' }}>
              <div className="col-xl-4 col-md-6">
                <div className="single-box">
                  <div className="abs-area d-flex align-items-center justify-content-center">
                    <span className="xlr">1</span>
                  </div>
                  <div className="img-area d-flex align-items-center justify-content-center">
                    <img src={playerbg1} className="img-bg" alt="#" />
                    <img src={player1} className="img-1" alt="#" />
                  </div>
                  <div className="text-area mt-4">
                    <h5>Suraj Singh</h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="single-box">
                  <div className="abs-area d-flex align-items-center justify-content-center">
                    <span className="xlr">2</span>
                  </div>
                  <div className="img-area d-flex align-items-center justify-content-center">
                    <img src={playerbg1} className="img-bg" alt="#" />
                    <img src={player2} className="img-1" alt="#" />
                  </div>
                  <div className="text-area mt-4">
                    <h5>Ankita Panday</h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="single-box">
                  <div className="abs-area d-flex align-items-center justify-content-center">
                    <span className="xlr">3</span>
                  </div>
                  <div className="img-area d-flex align-items-center justify-content-center">
                    <img src={playerbg1} className="img-bg" alt="#" />
                    <img src={player3} className="img-1" alt="#" />
                  </div>
                  <div className="text-area mt-4">
                    <h5>Sandeep maurya </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Backtotop/>
    </>
  )
}

export default Tournament
