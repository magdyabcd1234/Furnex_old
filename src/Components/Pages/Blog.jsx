import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from '../../assets/blog-1.jpeg';
import blog2 from '../../assets/blog-2.jpg';
import blog3 from '../../assets/blog-3.jpg';
import blog4 from '../../assets/blog-4.jpg';
import blog5 from '../../assets/blog-5.jpg';
import blog6 from '../../assets/blog-6.jpeg';

import blogs from '../../Blogs.json'

function Blog() {
  return (
    <>
            <div className='Page-section text-center py-5 position-relative overflow-hidden'>
            <p className='breadcrumb-text text-muted mb-2'>
                <Link to="/" className='breadcrumb-link text-dark'>Home</Link> / <span className=''>Blog</span>
            </p>
            <h2 className='page-heading fw-bold text-uppercase'>Blog</h2>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-9 blog-wrapper">
                        <div className="row">
                            {blogs.map((blog) => ( 
                                
                    <div className="col-lg-6" key={blog.id}>
                    <div className="blog-card mb-3 overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog.image} className='img-fluid rounded' alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h6>
                        {blog.categories.map((cat, i) => (
                            <span key={i}>
                                {cat}
                                {i < blog.categories.length - 1 ? '|' : ''}
                            </span>
                        ))}
                    </h6>
                    <h1 className='blog-title mt-2 mb-3'>
                      {blog.title}
                    </h1>
                    <h5 className="blog-meta">
                      {blog.date} <span className='dot'>.</span><span>by {blog.author}</span>
                    </h5>
                    <p>
                     {blog.pere}
                    </p>
                    <a href="#" className='blog-btn'>
                        Read more
                        <i className="ri-arrow-right-long-line"></i>
                        </a>
                  </div>
                 </div>
             </div>
         ))}
                    
        </div>
    </div>

    <div className="col-lg-3 blog-sidebar">
        <div className="sticky-sidebar">
            {/* Recent Posts*/}
            <div className="blog-side-box border-rounded p-2 post-hide">
                <h2 className="border-bottom pb-2">Recent Posts</h2>
                {/* blog box 1 */}
                <div className="blog-post-box-d-flex gap-2">
                    <div className="blog-post-img">
                        <img src={blog1} className='img-fluid' alt="blog-image" />
                    </div>
                    <div className="blog-post-text">
                        <p>How to Write a Blog Post Your Recendres Will Love In 5 Steps</p>
                    </div>
                </div>
                 {/* blog box 2 */}
                <div className="blog-post-box-d-flex gap-2">
                    <div className="blog-post-img">
                        <img src={blog2} className='img-fluid' alt="blog-image" />
                    </div>
                    <div className="blog-post-text">
                        <p>How to Write a Blog Post Your Recendres Will Love In 5 Steps</p>
                    </div>
                </div>
                {/* blog box 3 */}
                <div className="blog-post-box-d-flex gap-2">
                    <div className="blog-post-img">
                        <img src={blog3} className='img-fluid' alt="blog-image" />
                    </div>
                    <div className="blog-post-text">
                        <p>The Ultimate Guide to Marketing Strategies</p>
                    </div>
                </div>
                {/* blog box 4 */}
                <div className="blog-post-box-d-flex gap-2">
                    <div className="blog-post-img">
                        <img src={blog4} className='img-fluid' alt="blog-image" />
                    </div>
                    <div className="blog-post-text">
                        <p>50 Best Sales Questions to Determine Your</p>
                    </div>
                </div>
                 {/* blog box 5 */}
                <div className="blog-post-box-d-flex gap-2">
                    <div className="blog-post-img">
                        <img src={blog5} className='img-fluid' alt="blog-image" />
                    </div>
                    <div className="blog-post-text">
                        <p>6 Simple Ways To Boost Your Ecommerce</p>
                    </div>
                </div>
            </div>
            {/* Recent Comments */}
            <div className="blog-side-box border rounded p-3 mt-4 post-hide">
                <div className="border-bottom pb-2">Recent Comments</div>
                <div className="blog-post-text mt-3">
                    <p>Wilson on ExticRarePlants Small Jute Modern Plant</p>
                </div>
                <div className="blog-post-text mt-3">
                    <p>Jones on Philo Alobtt Artificial New Xanadu Plant</p>
                </div>
                <div className="blog-post-text mt-3">
                    <p>Emily on Euphorbia Natural Cactus Potted Plant</p>
                </div>
                <div className="blog-post-text mt-3">
                    <p>Jennifer on Litter Krimon Aspidistra Indoor Plant</p>
                </div>
                <div className="blog-post-text mt-3">
                    <p>Wilson on Dracaena Trifasciata Big Ornamental Plant</p>
                </div>
            </div>

            {/* Category */}
            <div className="blog-side-box border rounded p-2 mt-4">
                <h2 className='border-bottom pb-2'>Category</h2>
                <div className="blog-post-line mt-3">
                    <a>Business</a>
                </div>
                <div className="blog-post-line mt-3">
                    <a>Information</a>
                </div>
                <div className="blog-post-line mt-3">
                    <a>Marketing</a>
                </div>
                <div className="blog-post-line mt-3">
                    <a>Promotions</a>
                </div>
                <div className="blog-post-line mt-3">
                    <a>Search Engine</a>
                </div>
                <div className="blog-post-line mt-3">
                    <a>Social Media</a>
                </div>
                <div className="blog-post-line mt-3">
                    <a>Statistics</a>
                </div>
                <div className="blog-post-line mt-3">
                    <a>Writing</a>
                </div>
            </div>
            {/* Tags */}
            <div className="blog-side-box border rounded p-2 mt-4">
                <h2 className='border-bottom pb-2'>Tags</h2>
                <div className="blog-post-text mt-3">
                    <span>Blogging (4)</span>
                </div>
                <div className="blog-post-text mt-3">
                    <span>Community (6)</span>
                </div>
                <div className="blog-post-text mt-3">
                    <span>Copywriting (4)</span>
                </div>
                <div className="blog-post-text mt-3">
                    <span>Educational (4)</span>
                </div>
                <div className="blog-post-text mt-3">
                    <span>Experiences (4)</span>
                </div>
                <div className="blog-post-text mt-3">
                    <span>Knowledge (5)</span>
                </div>
                <div className="blog-post-text mt-3">
                    <span>Learning (4)</span>
                </div>
                <div className="blog-post-text mt-3">
                    <span>Managment (7)</span>
                </div>
                <div className="blog-post-text mt-3">
                    <span>Networking (5)</span>
                </div>
                <div className="blog-post-text mt-3">
                    <span>Photography (4)</span>
                </div>
                <div className="blog-post-text mt-3">
                    <span>Success Story (4)</span>
                </div>
            </div>
        </div>
    </div>
 </div>
            </div>

    </>
  )
}

export default Blog