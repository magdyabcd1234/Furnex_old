
import React from 'react'
import payment from './../../assets/payment.png'
import { Link } from 'react-router-dom'





function Footer() {
  return (
    <>
    <div className='footer text-light py-5 footer-bg'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h5 className='fw-bold'>CONTACT US</h5>
                    <p>
                        <i className="ri-map-pin-2-fill me-2"></i> 60 29th Street San Fransisco, 94110 
                        507-Union, Trade Center, United States America
                    </p>
                    <p>
                        <i className="ri-phone-fill me-2"></i> (+91) 9876-543-210
                    </p>
                    <p>
                        <i className="ri-mail-fill me-2"></i> demo@example.com
                    </p>
                </div>

                <div className="col-lg-6 text-start text-md-center">
                    <Link to="/" className='navbar-brand footer-logo'>
                    <h3>Furnex</h3>
                    </Link>
                    <p className="text-white">Lorem Ipsum is simply dummy text for the reader and will
                    be distracted by page makers.</p>
                    <div className='d-flex justify-content-start justify-content-md-center gap-2 footer-social'>
                        <i className='ri-facebook-fill'></i>
                        <i className='ri-twitter-fill'></i>
                        <i className='ri-instagram-fill'></i>
                        <i className='ri-pinterest-fill'></i>
                        <i className='ri-youtube-fill'></i>
                    </div>
                    <div className='mt-5 d-flex align-item-center justify-content-center gap-4'>
                        <a href="#" className='text-decoration-none text-white'>Information</a>
                        <a href="#" className='text-decoration-none text-white'>Contact Us</a>
                        <a href="#" className='text-decoration-none text-white'>Privacy Policy</a>
                        <a href="#" className='text-decoration-none text-white'>About Us</a>
                        <a href="#" className='text-decoration-none text-white'>FAQs</a>
                    </div>
                </div>

                <div className="col-lg-3 newsletter-wrap">
                    <h5 className='fw-bold'>OUR NEWSLETTER</h5>
                    <p className='text-white'>Subscribe to our latest newsletter to get news about 
                        special discounts.</p>
                        <div className='input-group'>
                            <input type="email" className='form-control position-relative rounded' 
                            placeholder="Email"
                            />
                            <i className='ri-mail-ai-line position-absolute send-mail-icon'></i>
                        </div>
                </div>
            </div>

                <div className='row mt-5 pt-3 footer-bottom'>
                    <div className="col-lg-6 copyright-text">
                        <p>© copyright 2525. All Rights Reserved By <a href="#">K2infocom</a></p>
                    </div>
                    <div className="col-lg-6 payment-img">
                        <img src={payment} alt="" />
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Footer