import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo2 from '../../../assets/images/logo2.png';
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { label: 'Home', to: '/', exact: true },
    { label: 'Games', to: '/games', exact: true },
    { label: 'Tournament', to: '/tournament', exact: true },
    { label: 'Lottery', to: '/lottery', exact: true },
    { label: 'About', to: '/about', exact: true },
    { label: 'Contact', to: '/contact', exact: true },
  ];
  return (
    <div className={`header-section ${isSticky ? 'header-fixed' : ''}`}>
      <div className='overlay'>
        <div className='container'>
          <div className='row d-flex header-area'>
            <nav className='navbar navbar-expand-lg navbar-light'>
              <Link className="navbar-brand link" to="#">
                <img src={logo2} className="logo d-block d-lg-none d-xl-block" alt="logo" />
              </Link>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbar-content">
                <TiThMenu />
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbar-content">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  {menuItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <NavLink exact={item.exact.toString()} className="nav-link link" activeclassname="active" to={item.to}>{item.label}</NavLink>
                    </li>
                  ))}

                </ul>
                <div className="right-area header-action d-flex align-items-center max-un">
                  <button type="button" className="login" >
                    <Link className='link' to="/login"> Sign In</Link>
                  </button>
                  <Link className='link text-dark' to="/signup">
                    <button type="button" className="cmn-btn reg" >
                      Sign Up
                    </button></Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
