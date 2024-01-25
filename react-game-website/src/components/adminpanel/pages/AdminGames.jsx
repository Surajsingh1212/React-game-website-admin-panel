import React from 'react';
import tournament1 from '../../../assets/images/jackpot-image-2.png';
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
              <img src={tournament1} alt="#" />
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3' style={{ background: '#e6497d', color: 'white', borderRadius: '50%', fontSize: '50px',cursor:'pointer' }} />
              </div>
            </div>
            </Link>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={tournament1} alt="#" />
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3' style={{ background: '#e6497d', color: 'white', borderRadius: '50%', fontSize: '50px',cursor:'pointer' }} />
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={tournament1} alt="#" />
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3' style={{ background: '#e6497d', color: 'white', borderRadius: '50%', fontSize: '50px',cursor:'pointer' }} />
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={tournament1} alt="#" />
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3' style={{ background: '#e6497d', color: 'white', borderRadius: '50%', fontSize: '50px',cursor:'pointer' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='row text-center mt-3'>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={tournament1} alt="#" />
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3' style={{ background: '#e6497d', color: 'white', borderRadius: '50%', fontSize: '50px',cursor:'pointer' }} />
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={tournament1} alt="#" />
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3' style={{ background: '#e6497d', color: 'white', borderRadius: '50%', fontSize: '50px',cursor:'pointer' }} />
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={tournament1} alt="#" />
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3' style={{ background: '#e6497d', color: 'white', borderRadius: '50%', fontSize: '50px',cursor:'pointer' }} />
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xl-3 col-sm-6 mb-2'>
            <div className='d-flex align-item-center justify-content-center'>
              <img src={tournament1} alt="#" />
              <div className='d-flex align-item-center justify-content-center position-absolute mt-5 '>
                <FaPlay className='p-3 mt-3' style={{ background: '#e6497d', color: 'white', borderRadius: '50%', fontSize: '50px',cursor:'pointer' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminGames
