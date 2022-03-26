import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import {RiServiceLine, RiMessage2Fill} from "react-icons/ri";
import { FcPortraitMode } from "react-icons/fc";
import { VscPreview } from "react-icons/vsc";


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const pathname = (window.location.href).split('#')[1];
  console.log(window.scrollY);

  useEffect(() => {
    if(pathname === 'about'){
      setActiveNav('#about');
    }else if(pathname === 'experience'){
      setActiveNav('#experience');
    }else if(pathname === 'portfolio'){
      setActiveNav('#portfolio');
    }else if(pathname === 'services'){
      setActiveNav('#services');
    }else if(pathname === 'testimonials'){
      setActiveNav('#testimonials');
    }else if(pathname === 'contact'){
      setActiveNav('#contact');
    }else{
      setActiveNav('#');
    }
  }, [pathname])
  
  // if(window.scrollY >)
  if(pathname === undefined){
    const showActive =  () =>{
      if(window.scrollY >=500 && window.scrollY <=900){
        setActiveNav('#about');
      }else if(window.scrollY >=901 && window.scrollY <=1400){
        setActiveNav('#experience');
      }else if(window.scrollY >=1401 && window.scrollY <=2000){
        setActiveNav('#services');
      }else if(window.scrollY >=2001 && window.scrollY <=3100){
        setActiveNav('#portfolio');
      }else if(window.scrollY >=3101 && window.scrollY <=3900){
        setActiveNav('#testimonials');
      }else if(window.scrollY >=3901 && window.scrollY <=4800){
        setActiveNav('#contact');
      } else{
        setActiveNav('#');
      }
    }

    window.addEventListener('scroll', showActive);
  }
  

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? "active" : ""}><AiOutlineBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? "active" : ""}><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? "active" : ""}><FcPortraitMode/></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? "active" : ""}><VscPreview/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : ""}><RiMessage2Fill/></a>
    </nav>
  )
}

export default Nav