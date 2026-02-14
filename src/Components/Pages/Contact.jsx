import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <>
    <div className='Page-section text-center py-5 position-relative overflow-hidden'>
        <p className='breadcrumb-text text-muted mb-2'>
            <Link to="/" className='breadcrumb-link'>Home</Link>/ <span className='text-dark'>Contaxt</span>
        </p>
        <h2 className='page-heading fw-bold text-uppercase'>CONTACT US</h2>
    </div>

    <div className="container my-5">
        <div className="row">
            <div className="col-lg-8 map">
            <iframe
            title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.5833166242!2d73.25548814272227!3d22.32224063683483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2z2YHYp9iv2YjYr9in2LHYp9iMINi62YjYrNin2LHYp9iq2Iwg2KfZhNmH2YbYrw!5e0!3m2!1sar!2seg!4v1771099561014!5m2!1sar!2seg"
  height="650"
  allowFullScreen=""
  loading="lazy"
></iframe>
            </div>
            <div className='col-lg-4 mt-lg-0 mt-sm-3 bg-light p-4 contact-form'>
                <h4 className='fw-bold'>GET IN TOUCH WITH US</h4>
                <p className='text-muted'>
                    If you wish to directly reach us, please fill out the form below -
                </p>
                <form className='mt-5'>
                    <div className='mb-3'>
                        <label className='form-label'>Your Name</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Your Email</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Your Message (optional)</label>
                        <textarea className='form-control' rows="7"></textarea>
                    </div>
                    <button type="submit" className='btn btn-success w-20'>SUBMIT</button>
                </form>
            </div>
        </div>
        <div className='row mt-5 p-4 contact-info'>
            <div className="col-md-6 col-lg-3 contact-icons">
                <i className="bi bi-geo-alt-fill text-success"></i>
                <p>60 29th San Francisco, 507 - Union Center</p>
            </div>
            <div className="col-md-6 col-lg-3 contact-icons">
                <i className="bi bi-telephone-fill text-success"></i>
                <p>Call us: <br /> (+81) 987-654-3210</p>
            </div>
            <div className="col-md-6 col-lg-3 contact-icons">
                <i className="bi bi-envelope-fill text-success"></i>
                <p>Mail us: <br /> demo@example.com</p>
            </div>
            <div className="col-md-6 col-lg-3 contact-icons">
                <i className="bi bi-clock-fill text-success"></i>
                <p>Open Time: <br /> 10:00AM - 6:00PM</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact