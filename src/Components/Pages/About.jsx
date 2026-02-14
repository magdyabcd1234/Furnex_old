import React from 'react'
import { Link } from 'react-router-dom'

import about_banner1 from '../../assets/about-banner-01.jpg';
import about_banner2 from '../../assets/about-banner-02.jpg';
import about_banner3 from '../../assets/about-banner-03.jpg';
import about_banner4 from '../../assets/about-banner-04.jpg';
import about_banner5 from '../../assets/about-banner-05.jpg';
import about_hero from './../../assets/furniforma-about-filler-img3.jpg'

function About() {
  return (
    <>
        <div className='Page-section text-center py-5 position-relative overflow-hidden'>
            <p className='breadcrumb-text text-muted mb-2'>
                <Link to="/" className='breadcrumb-link text-dark'>Home</Link> / <span className=''>About</span>
            </p>
            <h2 className='page-heading fw-bold text-uppercase'>About</h2>
        </div>

        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                    <img src={about_banner2} alt="About Banner 1" className='img-fluid w-100 h-100 object-fit-cover' style={{
                        minHeight: "100%"
                    }}/>
                </div>
                <div className="col-md-6">
                    <div className="row mb-3">
                        <div className="col-12">
                        <img src={about_banner3} alt="About Banner 2" className='img-fluid w-100 object-fit-cover' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-6">
                            <img src={about_banner1} alt="About Banner 3" className='img-fluid w-100 object-fit-cover' />
                        </div>
                        <div className="col-6">
                            <img src={about_banner4} alt="About Banner 4" className='img-fluid w-100 object-fit-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-5 py-5">
      <div className="row aligm-items-center">
        <div className="col-lg-6 about-img">
          <img src={about_hero} className='img-fluid' alt="Plantation" />
        </div>
        <div className="col-lg-6 about-content">
          <div className="section-title about-title">
            <h2>--Feel Comfortness-</h2>
            <h1>Bringing YouStyle, Comfort, And Crafts manship Daily</h1>
          </div>
          <p className='text-muted'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quas sunt facere cumque adipisci sit et quam impedit minus?
          </p>
          <div className="row text-center mb-4">
            <div className="col-6 col-md-6 mb-3">
              <div className="p-3 bg-light">
                <h1 className='fw-bold'>1K</h1>
                <p className='mb-0'>Offices Worldhide</p>
              </div>
            </div>
            <div className="col-6 col-md-6 mb-3">
              <div className="p-3 bg-light">
                <h1 className='fw-bold'>250+</h1>
                <p className='mb-0'>Unique Designs</p>
              </div>
            </div>
            <div className="col-6 col-md-6 mb-3">
              <div className="p-3 bg-light">
                <h1 className='fw-bold'>2K</h1>
                <p className='mb-0'>Product Reviews</p>
              </div>
            </div>
            <div className="col-6 col-md-6 mb-3">
              <div className="p-3 bg-light">
                <h1 className='fw-bold'>100K</h1>
                <p className='mb-0'>Happy Clients</p>
              </div>
            </div>
          </div>
          <p className='fw-bold'>''Elementum bibendum tristique imperdiet. Quisque hendrerit, justo egestas''</p>
          <button className='btn mt-4'>View More</button>
        </div>
      </div>
    </div>

    <section className="opportunities-section py-5">
        <div className="container">
            <div className="row align-item-center g-5">
                {/* Text & Accordion Section */}
                <div className="col-lg-6">
                    <h2 className='section-title mb-4'>
                        Clarifying Your Furniture <br />
                        <span className='highlight'>Queries</span>
                    </h2>
                    <p className='section-subtitle text-muted mb-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dicta, ex libero eius architecto 
                        commodi nam nihil hic nisi quaerat numquam.
                    </p>

                    <div className='accordion custom-accordion' id='businessAccordion'>
                        {/* Accordion Item 1 */}
                        <div className='accordion-item mb-3'>
                            <h2 className='accordion-header'>
                                <button className='accordion-button' type='button' data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls='collapseOne'>
                                    <i className="ri-lightbulb-line me-2 text-warning"></i> What are the most durable furniture
                                    materials?
                                </button>
                            </h2>
                            <div id='collapseOne' className='accordion-collapse collapse show' data-bs-parent="#businessAccordion">
                                <div className='accordion-body text-muted'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Inventore eum fuga id numquam quod nostrum cumque explica deleniti, natus saepe labore quibusdam incidunt deserunt tempore velit aperiam, eaque quis tenetur cupiditate 
                                     quae perspiciatis veritatis alias.
                                </div>
                            </div>
                        </div>
                        {/* Accordion Item 2 */}
                        <div className='accordion-item mb-3'>
                            <h2 className='accordion-header'>
                                <button className='accordion-button collapsed' type='button' data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls='collapseTwo'>
                                    <i className="ri-flag-line me-2 text-danger"></i> How I do choose the right furniture for a 
                                    small space?
                                </button>
                            </h2>
                            <div id='collapseTwo' className='accordion-collapse collapse' data-bs-parent="#businessAccordion">
                                <div className='accordion-body text-muted'>
                                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic 
                                   nemo autem necessitatibus officia similique dignissimos veniam, rerum, qui aperiam 
                                   unde dolor. Rem in minima pariatur obcaecati placeat, omnis nulla suscipit!
                                </div>
                            </div>
                        </div>
                        
                        {/* Accordion Item 3 */}
                        <div className='accordion-item mb-3'>
                            <h2 className='accordion-header'>
                                <button className='accordion-button collapsed' type='button' data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls='collapseThree'>
                                    <i className="ri-customer-service-2-line me-2 text-danger"></i> It is better to buy custom-made furniture 
                                    or ready-made?
                                </button>
                            </h2>
                            <div id='collapseThree' className='accordion-collapse collapse' data-bs-parent="#businessAccordion">
                                <div className='accordion-body text-muted'>
                                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic 
                                   nemo autem necessitatibus officia similique dignissimos veniam, rerum, qui aperiam 
                                   unde dolor. Rem in minima pariatur obcaecati placeat, omnis nulla suscipit!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* Image Section */}
                    <div className="col-lg-6 text-center">
                        <img alt="About Banner 5" src={about_banner5} className='img-fluid w-100 opportunities-image' />
                    </div>

            </div>
        </div>
    </section>

    <div className="container my-5 py-5">
      <div className="row g-4">
        {/* Card 1 */}
        <div className='col-lg-4'>
          <div className="enhanced-card text-center">
            <div className="icon-circle bg-gradient-green">
              <i className="bi bi-bag-check"></i>
            </div>
            <h5 className='fw-semibold mt-3'>Easy Order Process</h5>
            <p className='text-muted'>
              Browse, select, and order premium furniture online in just a few clicks-fast, safe, and convenient.
            </p>
          </div>
        </div>
         {/* Card 2 */}
         <div className='col-lg-4'>
          <div className="enhanced-card text-center">
            <div className="icon-circle bg-gradient-blue">
              <i className="bi bi-truck"></i>
            </div>
            <h5 className='fw-semibold mt-3'>Fast & Safe Delivry</h5>
            <p className='text-muted'>
              We deliver your furniture with care, ensuring it arrives in perfect condition and on time.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className='col-lg-4'>
          <div className="enhanced-card text-center">
            <div className="icon-circle bg-gradient-orange">
              <i className="bi bi-award"></i>
            </div>
            <h5 className='fw-semibold mt-3'>Premium Quality</h5>
            <p className='text-muted'>
              Our furniture is crafted with top-grade materials and attention to detail for long-lasting elegance.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="aboutus-section container my-5 py-5 text-center position-relative overflow-hidden">
      <p className='section-subtitle text-uppercase mb-2'>Get in Touch</p>
      <h2 className='section-title fw-bold mb-4 text-uppercase'>
        About <span className='highlighted'>Us Info</span>
      </h2>
      <p className='section-description mx-auto mb-5 px-3'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quos minus, blanditiis deleniti error reiciendis 
        saepe laborum perspiciatis fugiat nostrum soluta odit iste, rerum voluptates. 
        Error ducimus voluptas facilis ut odit eligendi minima, eaque aliquam, possimus ipsum eum quas quae!
      </p>
      <a href="" className='contact-btn text-uppercase fw-semibold d-inline-flex align-items-center gap-2'>
        <i className='bi bi-send-fill'></i>
        Contact Us Now 
      </a>
    </div>
    </>
  )
}

export default About