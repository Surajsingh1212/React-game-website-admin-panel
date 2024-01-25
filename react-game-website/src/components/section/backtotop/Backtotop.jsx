import React, { useState, useEffect } from 'react'
import { MdKeyboardDoubleArrowUp  } from "react-icons/md";

const Backtotop = () => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const checkSrollHeight = () => {
            setShowButton(window.scrollY > 400);
        }
        window.addEventListener('scroll', checkSrollHeight)
        return () => {
            window.removeEventListener('scroll', checkSrollHeight)
        }
    }, [])
    const scrollToTop = () => {
        window.scrollTo({ top: '0', behavior: 'smooth' })
    }
    return (
        <div>
            {showButton && (<div onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#a1ff00',
                    color: 'black',
                    padding:'10px',
                    cursor: 'pointer',
                    borderRadius:'6px'
                }}>
                <MdKeyboardDoubleArrowUp  className='fs-3'/>
                </div>
                )}
        </div>
    )
}

export default Backtotop
