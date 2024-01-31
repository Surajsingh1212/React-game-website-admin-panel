import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../section/footer/Footer';
import Header from '../section/header/Header';
import Backtotop from '../section/backtotop/Backtotop';

const Privacypolicy = () => {
    return (
        <>
            <Header />
            <div className="banner-section inner-banner contact">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2 style={{ color: 'white', fontSize: '4rem', fontWeight: '600' }}>Privacy Policy</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link to="/home" className='link'>Home</Link></li>
                                                    <li className="breadcrumb-item"><Link to="#" className='link'>Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
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
            <div className="privacy-content">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="top-wrapper">
                                    <h4 style={{ color: 'white', fontSize: '2.4rem' }}>We're always looking for new ways to provide privacy for our customers.</h4>
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
                                        <h4 style={{ color: 'white', fontSize: '2.4rem' }}>Your data is safe with us, we will not share any information with external sources.</h4>
                                        <p>Blandit dignissim nulla varius tristique a sed integer ut tempor. Augue interdum semper bibendum amet sed. Dis in at ultricies tortor sit tellus. Habitant ornare aenean maecenas pretium, dui ullamcorper quis. Egestas viverra et id aliquet faucibus rhoncus a. Sollicitudin nisl nulla tempor pretium lorem at mauris faucibus pulvinar.</p>
                                        <ul>
                                            <li>Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi.</li>
                                            <li>Eget consectetur risus nunc lorem sit consequat aliquet. Dolor velit consectetur etiam scelerisque.</li>
                                            <li>Integer interdum sodales scelerisque diam massa quam sit quis. Sed et dui a nam pulvinar. Tristique justo, donec lectus vitae, cursus ligula ridiculus lacus, tincidunt.</li>
                                            <li>Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo. Etiam dignissim.</li>
                                            <li> Aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi.</li>
                                        </ul>
                                    </div>
                                    <div className="cookies">
                                        <h4 style={{ color: 'white', fontSize: '2.4rem' }}>Cookies and tracking</h4>
                                        <p>Consequat mauris nunc congue nisi. Cursus metus aliquam eleifend mi in nulla. Dignissim cras tincidunt lobortis feugiat vivamus. Blandit aliquam etiam erat velit. Sapien faucibus et molestie ac. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.</p>
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

export default Privacypolicy
