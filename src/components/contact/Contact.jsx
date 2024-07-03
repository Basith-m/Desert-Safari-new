import React from 'react'
import { BsBuildingsFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import './contact.css'


const Contact = () => {
  return (
    <section className='contact'>
      <div className="container">
        <div className='contact-container d-flex flex-column align-items-center justify-content-center gap-3'>
          <h2>CONTACT US</h2>
          <span className='text-secondary'>CALL OR WHATSAPP  <span className='text-primary'>+971 585879766 </span>  FOR BOOKING DESERT SAFARI DEALS OTHER INQUIRIES 24/7 SUPPORT</span>
          <div className='row py-3 d-flex justify-content-center gap-3'>
            <div className="col-md-5 bg-white  p-3 shadow rounded">
              <form className="d-flex flex-column gap-3 ">
                <label>Name</label>
                <input type="text" name="user_name" className="form-control" required />
                
                <label>Email</label>
                <input type="email" name="user_email" className="form-control" required />
                
                <label>Message</label>
                <textarea name="message" className="form-control" required style={{ height: '150px' }} />
                
                <input type="submit" value="Send" className="btn btn-primary mt-3" />
              </form>
            </div>
            <div className="col-md-5 bg-white rounded shadow py-4 px-4">
              <div className='d-flex flex-column gap-3'>
                <h4>Desert Safari Info</h4>
                <p className='text-secondary'>We are dedicated to providing the best possible experience for our users. As a consequence, we’ve dedicated this page to providing all of the contact information you’ll need. We’d be happy to help you make a reservation, answer a question, or provide feedback. We are delighted to offer the greatest desert safari services in the area, and we want you to have an unforgettable trip. If you have any questions, please contact us. We want to welcome you and provide you with the opportunity to go on your own desert safari for an extraordinary experience. You’ve come to the right place if you’re a first-time visitor, a returning client, or simply want to learn more about the wonderful experiences we offer.</p>
                <div className='d-flex flex-column gap-2'>
                  <div className='d-flex align-items-center gap-2'>
                    <BsBuildingsFill />
                    <span>Deira Dubai United Arab Emirates</span>
                  </div>
                  <div className='d-flex align-items-center gap-2'>
                    <FaPhoneAlt />
                    <span>+971 585879766</span>
                  </div>
                  <div className='d-flex align-items-center gap-2'>
                    <SiWhatsapp />
                    <span>+971 585879766</span>
                  </div>
                  <div className='d-flex align-items-center gap-2'>
                    <MdEmail />
                    <span>Info@desertsafarime.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact