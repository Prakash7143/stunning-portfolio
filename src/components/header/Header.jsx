import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/mypic.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello! Introducing me here</h5>
          <h1>Satyaprakash Sahoo</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className='meDiv'>
              <img className='me' src={ME} alt="Profile Pic" srcset="" />
          </div>
          <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
      </header>
    </>
  )
}

export default Header