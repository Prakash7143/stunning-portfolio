import React from 'react'
import "./Contact.css"
import { MdEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r8cgew2', 'template_lm8che8', form.current, 'Y2FBZjm3hmMM3mkHc')
      .then((result) => {
          toast.success('SuccessFully Sent Mail '+result.text, {
            position: "top-center", autoClose: 2000,});
          e.target.reset();
      }, (error) => {
          toast.error('Error in sending mail '+error.text, {
            position: "top-center"});
      });
      
  };

  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
              <article className="contact__option">
                <MdEmail className='contact__option-icon'/>
                <h4>Email</h4>  
                <h5>dummymail@gmail.com</h5>
                <a target="_blank" href="mailto:dummymail@gmail.com">Send email</a>
              </article>
              <article className="contact__option">
                <RiMessengerLine  className='contact__option-icon'/>
                <h4>Messenger</h4>  
                <h5>satyaprakash.sahoo.963</h5>
                <a target="_blank" href="https://m.me/satyaprakash.sahoo.963">Social Connect</a>
              </article>
              <article className="contact__option">
                <BsWhatsapp  className='contact__option-icon'/>
                <h4>Whatsapp</h4>  
                <h5>Satyaprakash Sahoo</h5>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=+916353725889">Chat</a>
              </article>
            </div>  
            {/* options end */}
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='username' placeholder='Your Full Name' required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Querries" rows="7"></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
              <p>The email may not work as I had removed the key. You may signup at EmailJs</p>
              <p>Environment {process.env.NODE_ENV}</p>
            </form>
        </div>
        <ToastContainer/>
    </section>
  )
}

export default Contact