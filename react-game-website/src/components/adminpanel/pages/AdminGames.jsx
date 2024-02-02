import React from 'react';
import Card from '../../../assets/images/Card.png'
import colorpick from '../../../assets/images/color-pick.png';
import spinwheel from '../../../assets/images/spin-wheel.png';
import aviator from '../../../assets/images/aviator.png';
import casino from '../../../assets/images/7-casino.png';
import dice from '../../../assets/images/dice.png';
import routtel from '../../../assets/images/routtel.png';
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminGames = () => {
  return (
    <>
      <div className='Container'>
        <div className='row text-center'>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
          <Link to='/admin/wheelplay'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={spinwheel} alt="#" className='show-game-all-section-img'/>
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3 admin-game-play-section-icon'/>
              </div>
            </div>
            </Link>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={Card} alt="#" className='show-game-all-section-img'/>
              <div className=' d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3 admin-game-play-section-icon' />
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={casino} alt="#" className='show-game-all-section-img'/>
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3  admin-game-play-section-icon'/>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={colorpick} alt="#" className='show-game-all-section-img'/>
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3 admin-game-play-section-icon' />
              </div>
            </div>
          </div>
        </div>
        <div className='row text-center mt-3'>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={aviator} alt="#" className='show-game-all-section-img'/>
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3 admin-game-play-section-icon'/>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={dice} alt="#" className='show-game-all-section-img'/>
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3 admin-game-play-section-icon'/>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={routtel} alt="#" className='show-game-all-section-img'/>
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3 admin-game-play-section-icon'/>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={spinwheel} alt="#" className='show-game-all-section-img'/>
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3  admin-game-play-section-icon'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminGames
