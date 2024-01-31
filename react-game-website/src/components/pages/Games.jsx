import React from 'react';
import { Link } from 'react-router-dom';
import playicon from '../../assets/images/icon/play-icon.png';
import search from '../../assets/images/icon/search-icon.png';
import websitegame1 from '../../assets/images/showAllGames/website-game-1.png';
import websitegame2 from '../../assets/images/showAllGames/website-game-2.png';
import websitegame3 from '../../assets/images/showAllGames/website-game-3.png';
import websitegame4 from '../../assets/images/showAllGames/website-game-4.png';
import websitegame5 from '../../assets/images/showAllGames/website-game-5.png';
import Backtotop from '../section/backtotop/Backtotop';
import Footer from '../section/footer/Footer';
import Header from '../section/header/Header';

const Games = () => {
    return (
        <>
            <Header />
            <div className="banner-section inner-banner games">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: '600' }}>Games</h1>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link to="/home" className='link'>Home</Link></li>
                                                    <li className="breadcrumb-item"><Link to="#" className='link'>Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Games</li>
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
            <div className="games-section">
                <div className="overlay pb-120">
                    <div className="container pt-120">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="slots" role="tabpanel" aria-labelledby="slots-tab">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-xl-4 col-md-7">
                                        <ul className="nav bottom-nav gap-3" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="slots-all-tab" data-bs-toggle="tab" data-bs-target="#slots-all" type="button"
                                                    role="tab" aria-controls="slots-all" aria-selected="true">All</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="slots-popular-tab" data-bs-toggle="tab" data-bs-target="#slots-popular" type="button"
                                                    role="tab" aria-controls="slots-popular" aria-selected="false">Popular</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="slots-new-tab" data-bs-toggle="tab" data-bs-target="#slots-new" type="button"
                                                    role="tab" aria-controls="slots-new" aria-selected="false">New</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-5">
                                        <form action="#">
                                            <div className="form-group input-area d-flex align-items-center">
                                                <input type="text" placeholder="Search Game" autocomplete="off" />
                                                <button className="btn-area"><img src={search} alt="icon" /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="slots-all" role="tabpanel" aria-labelledby="slots-all-tab">
                                        <div className="all-items">
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame5} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe  position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame1} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame2} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img " src={websitegame3} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame4} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame5} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="btn-area mt-3 text-center">
                                            <Link to="/login" className="cmn-btn link fw-bold">
                                                Load More
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="slots-popular" role="tabpanel" aria-labelledby="slots-popular-tab">
                                        <div className="all-items">
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame5} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe  position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame1} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame2} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img " src={websitegame3} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame4} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame5} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area mt-3 text-center">
                                            <Link to="/login" className="cmn-btn link">
                                                Load More
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="slots-new" role="tabpanel" aria-labelledby="slots-new-tab">
                                        <div className="all-items">
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame5} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe  position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame1} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame2} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img " src={websitegame3} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame4} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single-item">
                                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item show-game-all-section-img" src={websitegame5} alt="#" />
                                                    </div>
                                                    <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to="/login">
                                                        <img src={playicon} alt="icon" />
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="btn-area mt-3 text-center">
                                            <Link to="/login" className="cmn-btn link">
                                                Load More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Backtotop />
        </>
    )
}

export default Games
