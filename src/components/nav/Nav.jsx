import React, { useState } from 'react'
import "./Nav.css"
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import {RiServiceLine, RiMessage2Fill} from "react-icons/ri"
import { FcPortraitMode } from "react-icons/fc"
import { VscPreview } from "react-icons/vsc"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  // alert(activeNav)
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "active" : ""}><AiOutlineUser/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? "active" : ""}><FcPortraitMode/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? "active" : ""}><AiOutlineBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? "active" : ""}><RiServiceLine/></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? "active" : ""}><VscPreview/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : ""}><RiMessage2Fill/></a>
    </nav>
  )
}

export default Nav