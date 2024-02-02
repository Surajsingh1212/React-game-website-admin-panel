import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../section/header/Header';
import Footer from '../section/footer/Footer';
import image1 from '../../assets/images/table-image-1.png';
import image2 from '../../assets/images/table-image-2.png';
import image3 from '../../assets/images/table-image-3.png';
import image4 from '../../assets/images/table-image-4.png';
import image5 from '../../assets/images/table-image-5.png';
import image6 from '../../assets/images/table-image-6.png';
import image7 from '../../assets/images/table-image-7.png';
import image8 from '../../assets/images/table-image-8.png';
import image9 from '../../assets/images/table-image-9.png';
import work1 from '../../assets/images/icon/how-works-icon-4.png';
import work2 from '../../assets/images/icon/how-works-icon-5.png';
import work3 from '../../assets/images/icon/how-works-icon-6.png';
import { useTime } from 'react-timer-hook';
import Backtotop from '../section/backtotop/Backtotop';

const Lottery = () => {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour' });
  return (
    <>
      <Header />
      <div className="banner-section inner-banner lottery">
        <div className="overlay">
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10">
                  <div className="main-content">
                    <h1 className='color-white pop-font-weight pop-font-size4'>Lottery</h1>
                    <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-flex align-items-center">
                          <li className="breadcrumb-item"><Link to="/home" className='link'>Home</Link></li>
                          <li className="breadcrumb-item"><Link to="#" className='link'>Pages</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Lottery</li>
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
      <div className="weekly-lottery">
        <div className="overlay pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="lottery-content">
                  <div className="section-text text-center">
                    <h3 className="title pop-font-weight pop-font-size color-white">Weekly Lottery</h3>
                    <h5 className="sub-title">Game #379</h5>
                  </div>
                  <div className="prize-pool d-flex align-items-center justify-content-between">
                    <div className="left-area color-white">
                      <h5 className="sub-title xlr">Prize Pool</h5>
                      <h4>19.41146725 BTC</h4>
                      <p>143577 Tickets in Game</p>
                    </div>
                    <div className="right-area text-center color-white">
                      <h6 className="sub-title">Lottery Draw Starts In:</h6>
                      <div className="countdown d-flex align-items-center">
                        <h5><span>0d {hours}h {minutes}m {seconds}s {ampm}</span></h5>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-area text-center">
                    <p>While you are still thinking, <span>6028 tickets</span> have already been so</p>
                    <Link to="/signup" className="cmn-btn link fw-bold">
                      buy  Ticket for just ₹ 100
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-bets latest-winners">
        <div className="overlay pb-120">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-header text-center">
                  <h5 className="sub-title">Latest Winners</h5>
                  <h2 className="title pop-font-weight pop-font-size color-white">Latest Bets</h2>
                  <p>More and more winners are added every time! To locate the most recent winner's information</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">User</th>
                        <th scope="col">Date</th>
                        <th scope="col">Purchased</th>
                        <th scope="col">Winners</th>
                        <th scope="col">My Tickets</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div className="icon-box">
                            <img src={image1} alt="#" />
                            <span>Tom Bass</span>
                          </div>
                        </th>
                        <td>05/16/22</td>
                        <td>14,979</td>
                        <td className="game">8,022</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="icon-box">
                            <img src={image2} alt="#" />
                            <span>Karl Day </span>
                          </div>
                        </th>
                        <td>05/25/22</td>
                        <td>13,854</td>
                        <td className="game">7,521</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="icon-box">
                            <img src={image3} alt="#" />
                            <span>Jon Arnold</span>
                          </div>
                        </th>
                        <td>05/01/22</td>
                        <td>14,979</td>
                        <td className="game">8,569</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="icon-box">
                            <img src={image4} alt="#" />
                            <span>Kim Clark</span>
                          </div>
                        </th>
                        <td>05/23/22</td>
                        <td>21,979</td>
                        <td className="game">8,574</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="icon-box">
                            <img src={image5} alt="#" />
                            <span>Sergio Roy</span>
                          </div>
                        </th>
                        <td>05/14/22</td>
                        <td>14,979</td>
                        <td className="game">8,523</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="icon-box">
                            <img src={image6} alt="#" />
                            <span>Wm Dixon</span>
                          </div>
                        </th>
                        <td>05/05/22</td>
                        <td>15,979</td>
                        <td className="game">8,457</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="icon-box">
                            <img src={image7} alt="#" />
                            <span>Leo Berry</span>
                          </div>
                        </th>
                        <td>05/09/22</td>
                        <td>11,979</td>
                        <td className="game">8,358</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="icon-box">
                            <img src={image8} alt="#" />
                            <span>Ross Ryan</span>
                          </div>
                        </th>
                        <td>05/14/22</td>
                        <td>12,979</td>
                        <td className="game">4,133</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="icon-box">
                            <img src={image9} alt="#" />
                            <span>Alton Ray</span>
                          </div>
                        </th>
                        <td>05/21/22</td>
                        <td>21,979</td>
                        <td className="game">12,245</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-works-second">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-header text-center">
                  <h5 className="sub-title">How it works</h5>
                  <h2 className="title pop-font-weight pop-font-size color-white">It’s Really Easy!</h2>
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
                    <h5 className='pop-font-size8 color-white'>Buy tickets</h5>
                    <p>Buy ticket with ₹ 100, and choose numbers for ticket.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="single-box mid text-center">
                  <div className="thumb">
                    <img src={work2} alt="#" />
                  </div>
                  <div className="text-area">
                    <h5 className='pop-font-size8 color-white'>Wait For the Draw</h5>
                    <p>Wait for the draw at 15:00 UTC+0 daily.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="single-box text-center">
                  <div className="thumb">
                    <img src={work3} alt="#" />
                  </div>
                  <div className="text-area">
                    <h5 className='pop-font-size8 color-white'>Check For Prizes</h5>
                    <p>Once the draw is over,and check your prize.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faqs-section">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-7">
                <div className="section-header text-center">
                  <h2 className="title pop-font-weight pop-font-size color-white">A Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="accordion" id="accordionFaqs">
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingOne">
                      <button className="accordion-button collapsed color-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false"
                        aria-controls="collapseOne">
                        What is mrx Lottery?
                      </button>
                    </h6>
                    <div id="collapseOne" className="accordion-collapse collapse"
                      aria-labelledby="headingOne" data-bs-parent="#accordionFaqs">
                      <div className="accordion-body" >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed color-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo" >
                        How does mrx Lottery?
                      </button>
                    </h6>
                    <div id="collapseTwo" className="accordion-collapse collapse"
                      aria-labelledby="headingTwo" data-bs-parent="#accordionFaqs">
                      <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed color-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false"
                        aria-controls="collapseThree" >
                        When Lottery start?
                      </button>
                    </h6>
                    <div id="collapseThree" className="accordion-collapse collapse"
                      aria-labelledby="headingThree" data-bs-parent="#accordionFaqs">
                      <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed color-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false"
                        aria-controls="collapseFour" >
                        How can participate in Lottery?
                      </button>
                    </h6>
                    <div id="collapseFour" className="accordion-collapse collapse"
                      aria-labelledby="headingFour" data-bs-parent="#accordionFaqs">
                      <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed color-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFive" aria-expanded="false"
                        aria-controls="collapseFive">
                        What is the prize?
                      </button>
                    </h6>
                    <div id="collapseFive" className="accordion-collapse collapse"
                      aria-labelledby="headingFive" data-bs-parent="#accordionFaqs">
                      <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                      </div>
                    </div>
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

export default Lottery
