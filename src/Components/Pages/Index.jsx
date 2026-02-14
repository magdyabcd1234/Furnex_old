import React, { useContext, useEffect } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade , Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// "color"
const bg = "#faf7f2";

import Products from './../../Product.json';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartContext } from './../Pages/CartContextProvider';
import { WishlistContext } from './../Pages/WishlistContextProvider';

import about_hero from '../../assets/furniforma-about-filler-img3.jpg';
import hero_img from '../../assets/hero.png';
import subBanner1 from '../../assets/sub-banner-1.jpg';
import subBanner2 from '../../assets/sub-banner-2.jpg';
import subBanner3 from '../../assets/sub-banner-3.jpg';
import subBanner4 from '../../assets/sub-banner-4.jpg';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import blog1 from '../../assets/blog-1.jpeg';
import blog2 from '../../assets/blog-2.jpg';
import blog3 from '../../assets/blog-3.jpg';
import blog4 from '../../assets/blog-4.jpg';
import blog5 from '../../assets/blog-5.jpg';
import blog6 from '../../assets/blog-6.jpeg';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




function Index() {

  // Add to Cart 
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToCart = (product) => {
    const productWithNumbers = {
      ...product,
      price: parseFloat(product.price),
      offerPrice: parseFloat(product.offerPrice),
    };
    addToCart(productWithNumbers);
  };


  // Product Details 
  const [selectedProduct , setSelectedProduct] = useState(null);

  useEffect(() => {
    if(selectedProduct){
      const modal = new window.bootstrap.Modal(document.getElementById('productDet'));
      modal.show()
    }
  }, [selectedProduct]);

  const handleProductClick = (product) => {
    console.log('Selected:', product);
    setSelectedProduct(product)
  };

   // Count Countity 

   const [quantity, setQuantity] = useState(1);

   const handleDecrease = () => {
    if (quantity > 1) {
        setQuantity(count => count - 1);
    }
   }

   const handleIncrease = () => {
    setQuantity(count => count + 1)
   }



  return (
    <>
    {/* Hero */}
      <div className="hero" style={{backgroundColor: bg}}>
        <div className="row">
          <div className="hero-wrap hero-wrap1 col-md-6 mt-5">
            <div className="hero-contnet">
              <h3>Stylish Furnitures</h3>
              <h1>Sustainable Chairs <br /> for Every Space</h1>
              <p className='my-3'>Sodales ridiculus lacus laoreet dictum curae maximis, viverra tortor eget, rutruligula. Nam malesuada pellentesque mi, non eleifend ipsum ullamcorper id. Etiam vehicula tellus sem.</p>
              <a href="#" className='btn hero-btn mt-3'>our collection</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src={hero_img} className='w-100' alt="hero-img" />
          </div>
        </div>
      </div>

      {/* banners */}
      <div className="banners py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 banner-card overflow-hidden position-relative">
              <img src={subBanner1} className='img-fluid rounded banner-img' alt="" />
              <div className="banner-content position-absolute">
                <h3>Style, Savings, </h3>
                <h1>Enjoy 40% best
                  <br /> Savings
                </h1>
                <button className='btn banner-btn mt-2'>Shop Now</button>
              </div>
            </div>
            <div className="col-lg-6 banner-card overflow-hidden position-relative banner-mt">
              <img src={subBanner2}  alt="" className='img-fluid rounded banner-img' />
              <div className="banner-content banner-content2 position-absolute">
                <h3>Up To 25% Discount</h3>
                <h1>Enjoy 40% best
                  <br />Savings
                </h1>
                <button className='btn banner-btn mt-2'>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product Swiper Slider */}
      <div className="container py-5 position-relative">
        <div className="row">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>-New Furniture-</h2>
            <h1>LATEST FURNITURE</h1>
          </div>
        </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        modules={[Navigation]}
        navigation={{
          nextEl: '.product-swiper-next',
          prevEl: '.product-swiper-prev',
        }}
        breakpoints={{
          0:{slidesPerView: 1},
          640:{slidesPerView: 1},
          768:{slidesPerView: 1},
          1024:{slidesPerView: 4},
        }}
        className='mt-4 swiper'
        >
          {Products.filter(product => product.id >= 5 && product.id <= 10).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card text-center border rounded">
                <div className="position-relative product-img-container">
                  <img src={product.image} className='img-fluid product-img main-img' alt="" />
                  <img src={product.secondImage} className='img-fluid product-img hover-img' alt="" />
                  <div className="product-option position-absolute">
                    <i className="bi bi-heart" role='button'
                        onClick={() => {
                          addToWishlist({
                            id: product.id,
                            name:product.name,
                            price: product.price,
                            image: product.image,
                            inStock:true,
                          });
                          toast.success(`${product.name} Added To Wishlist!`)
                        }}
                    ></i>
                  </div>
                  <button className='btn add-card-btn position-absolute'
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      image: product.image, 
                    })
                    toast.success(`${product.name} Added To Cart!`)
                  }}
                  >
                    ADD TO CART 
                  </button>
                </div>
                <div className="product-info mt-4 p-3"
                 onClick={() => handleProductClick(product)}
                style={{ cursor:'pointer' }}>
                    <h5 className='mt-3'>{product.name}</h5>
                    <div className="text-warning mb-2 stars">
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-half'></i>
                    </div>
                    <p className='mb-1 product-price'>
                      <span className='text-muted text-decoration-line-through'>${product.offerPrice}</span>
                      <span className='text-success fw-bold ms-2'>${product.price}</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="product-swiper-btn product-swiper-prev d-flex justify-content-center align-items-center" style={{cursor: 'pointer'}}><i className='ri-arrow-left-s-line'></i></div>
        <div className="product-swiper-btn product-swiper-next d-flex justify-content-center align-items-center" style={{cursor: 'pointer'}}><i className='ri-arrow-right-s-line'></i></div>
      </div>
      {/* Product Popup Modal */}
      <div className="modal fade" 
    id='productDet'
    tabIndex="-1"
    aria-labelledby='productModalLabel'
    aria-hidden="true"
    >
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content p-3">
            {selectedProduct && (
                <>
                <div className="modal-body d-flex flex-column flex-md-row gap-1">
                    <div className="col-md-6">
                        <img src={selectedProduct.image} className='img-fluid rounded border' alt="" />
                    </div>
                    <button type='button' className='btn-close close-modal product-modal-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    <div className="col-md-6 d-flex ps-4 flex-column justify-content-center">
                        <div className="modal-header border-0 p-0">
                            <h5 className='modal-title product-title' id='productModalLabel'>{selectedProduct.name}</h5>
                        </div>
                            <div className="d-flex gap-1 text-warning mb-2">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </div>
                            <h4 className='text-success fw-bold product-modal-price'>
                                ${selectedProduct.price}{" "}
                                <span className="text-muted text-decoration-line-through fs-5 fw-normal">
                                    ${selectedProduct.offerPrice}
                                </span>
                            </h4>
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center border rounded" 
                                style={{width:'100px', height:'40px'}}>
                                    <span className="px-2" style={{cursor:'pointer'}} onClick={handleDecrease}>-</span>
                                    <span className='flex-grow-1 text-center border-start border-end'>{quantity}</span>
                                    <span className="px-2" style={{cursor:'pointer'}} onClick={handleIncrease}>+</span>
                                </div>
                                <button className='btn d-flex align-items-center gap-2 custom-z'
                                onClick={() => handleAddToCart(selectedProduct, 
                                    toast.success(`${selectedProduct.name} Added To cart!`)
                                )}
                                style={{cursor:'pointer'}}
                                >
                                    <i className="bi bi-basket"></i> Add To Cart
                                </button>
                        </div>
                        <p className='mt-4 product-des'>This high-quality product combines durability. Perfect for daily use, it offers exceptional value and design to enhance your lifestyle with comfort, performance, and modern appeal.</p>
                    </div>
                </div>
                </>
            )}
            </div>
        </div>
    </div>
    
    {/* About */}
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

    {/* Parallax Banner */}
    <div className="parallax-banner d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column align-items-start">
            <div className="section-title d-flex flex-column justify-content center align-items-start">
              <h2>-Hot Sale 30% Discount-</h2>
              <h1>The Sofa You! Love Forever</h1>
            </div>
            <p className='my-3 mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione iusto possimus dolore distinctio id similique earum velit tempore officiis.</p>
            <button className='btn'>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>

          {/* Popular Swiper Slider */}
        <div className="container py-5 position-relative">
        <div className="row">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>-Popular Products-</h2>
            <h1>FEATURED PRODUCTS</h1>
          </div>
        </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        modules={[Navigation]}
        navigation={{
          nextEl: '.product-swiper-next',
          prevEl: '.product-swiper-prev',
        }}
        breakpoints={{
          0:{slidesPerView: 1},
          640:{slidesPerView: 1},
          768:{slidesPerView: 1},
          1024:{slidesPerView: 4},
        }}
        className='mt-4 swiper'
        >
          {Products.filter(product => product.id >= 2 && product.id <= 8).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card text-center border rounded">
                <div className="position-relative product-img-container">
                  <img src={product.image} className='img-fluid product-img main-img' alt="" />
                  <img src={product.secondImage} className='img-fluid product-img hover-img' alt="" />
                  <div className="product-option position-absolute">
                    <i className="bi bi-heart" role='button'
                        onClick={() => {
                          addToWishlist({
                            id: product.id,
                            name:product.name,
                            price: product.price,
                            image: product.image,
                            inStock:true,
                          });
                          toast.success(`${product.name} Added To Wishlist!`)
                        }}
                    ></i>
                  </div>
                  <button className='btn add-card-btn position-absolute'
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      image: product.image, 
                    })
                    toast.success(`${product.name} Added To Cart!`)
                  }}
                  >
                    ADD TO CART 
                  </button>
                </div>
                <div className="product-info mt-4 p-3"
                 onClick={() => handleProductClick(product)}
                style={{ cursor:'pointer' }}>
                    <h5 className='mt-3'>{product.name}</h5>
                    <div className="text-warning mb-2 stars">
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-half'></i>
                    </div>
                    <p className='mb-1 product-price'>
                      <span className='text-muted text-decoration-line-through'>${product.offerPrice}</span>
                      <span className='text-success fw-bold ms-2'>${product.price}</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="product-swiper-btn product-swiper-prev d-flex justify-content-center align-items-center" style={{cursor: 'pointer'}}><i className='ri-arrow-left-s-line'></i></div>
        <div className="product-swiper-btn product-swiper-next d-flex justify-content-center align-items-center" style={{cursor: 'pointer'}}><i className='ri-arrow-right-s-line'></i></div>
      </div>

      {/* banners 2 */}
      <div className="banners py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 banner-card overflow-hidden position-relative">
              <img src={subBanner3} className='img-fluid rounded banner-img' alt="" />
              <div className="banner-content position-absolute">
                <h3>Style, Savings, </h3>
                <h1>The Elliot Modular
                  <br /> Dressing Table</h1>
                <button className='btn banner-btn mt-2'>Shop Now</button>
              </div>
            </div>
            <div className="col-lg-6 banner-card overflow-hidden position-relative banner-mt">
              <img src={subBanner4}  alt="" className='img-fluid rounded banner-img' />
              <div className="banner-content banner-content2 position-absolute">
                <h3>Up To 25% Discount</h3>
                <h1>Cloud Farm Peace
                  <br />Office Chair</h1>
                <button className='btn banner-btn mt-2'>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Top Rated product Slider */}
       <div className="container py-5 position-relative">
        <div className="row">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>-Top Rated Products-</h2>
            <h1>FEATURED PRODUCTS</h1>
          </div>
        </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        modules={[Navigation]}
        navigation={{
          nextEl: '.product-swiper-next',
          prevEl: '.product-swiper-prev',
        }}
        breakpoints={{
          0:{slidesPerView: 1},
          640:{slidesPerView: 1},
          768:{slidesPerView: 1},
          1024:{slidesPerView: 4},
        }}
        className='mt-4 swiper'
        >
          {Products.filter(product => product.id >= 8 && product.id <= 16).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card text-center border rounded">
                <div className="position-relative product-img-container">
                  <img src={product.image} className='img-fluid product-img main-img' alt="" />
                  <img src={product.secondImage} className='img-fluid product-img hover-img' alt="" />
                  <div className="product-option position-absolute">
                    <i className="bi bi-heart" role='button'
                        onClick={() => {
                          addToWishlist({
                            id: product.id,
                            name:product.name,
                            price: product.price,
                            image: product.image,
                            inStock:true,
                          });
                          toast.success(`${product.name} Added To Wishlist!`)
                        }}
                    ></i>
                  </div>
                  <button className='btn add-card-btn position-absolute'
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      image: product.image, 
                    })
                    toast.success(`${product.name} Added To Cart!`)
                  }}
                  >
                    ADD TO CART 
                  </button>
                </div>
                <div className="product-info mt-4 p-3"
                 onClick={() => handleProductClick(product)}
                style={{ cursor:'pointer' }}>
                    <h5 className='mt-3'>{product.name}</h5>
                    <div className="text-warning mb-2 stars">
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-fill'></i>
                      <i className='bi bi-star-half'></i>
                    </div>
                    <p className='mb-1 product-price'>
                      <span className='text-muted text-decoration-line-through'>${product.offerPrice}</span>
                      <span className='text-success fw-bold ms-2'>${product.price}</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="product-swiper-btn product-swiper-prev d-flex justify-content-center align-items-center" style={{cursor: 'pointer'}}><i className='ri-arrow-left-s-line'></i></div>
        <div className="product-swiper-btn product-swiper-next d-flex justify-content-center align-items-center" style={{cursor: 'pointer'}}><i className='ri-arrow-right-s-line'></i></div>
      </div>
          {/* testimonials */}
    <div className="testimonials d-flex align-items-center">
      <div className="my-5 text-center container testimonials-wrap">
        <div className="text-success mb-3">
          <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          >

              <SwiperSlide>
              <i className="ri-double-quotes-l"></i>
                <p className="text-muted px-md-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in, veritatis culpa 
                  possimus magni corporis sit reiciendis at doloremque saepe omnis illum recusandae
                   molestiae laborum est expedita optio. 
                  Possimus hic voluptas animi! Dignissimos, at minus ea libero ipsam maxime voluptates.
                </p>
                <div className="test-card d-flex justify-content-center my-4">
                  <img 
                  src={user1} 
                  roundedCircle
                  width={80}
                  height={80}
                  className='shadow-sm'
                   />
                </div>
                <h5 className='fw-bold'>STEFANIE RASHFORF</h5>
                <p className='text-muted'>CEO</p>
              </SwiperSlide>

              <SwiperSlide>
              <i className="ri-double-quotes-l"></i>
                <p className="text-muted px-md-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in, veritatis culpa 
                  possimus magni corporis sit reiciendis at doloremque saepe omnis illum recusandae
                   molestiae laborum est expedita optio. 
                  Possimus hic voluptas animi! Dignissimos, at minus ea libero ipsam maxime voluptates.
                </p>
                <div className="test-card d-flex justify-content-center my-4">
                  <img 
                  src={user2} 
                  roundedCircle
                  width={80}
                  height={80}
                  className='shadow-sm'
                   />
                </div>
                <h5 className='fw-bold'>JOHN DOE</h5>
                <p className='text-muted'>Manager</p>
              </SwiperSlide>

              <SwiperSlide>
              <i className="ri-double-quotes-l"></i>
                <p className="text-muted px-md-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in, veritatis culpa 
                  possimus magni corporis sit reiciendis at doloremque saepe omnis illum recusandae
                   molestiae laborum est expedita optio. 
                  Possimus hic voluptas animi! Dignissimos, at minus ea libero ipsam maxime voluptates.
                </p>
                <div className="test-card d-flex justify-content-center my-4">
                  <img 
                  src={user3} 
                  roundedCircle
                  width={80}
                  height={80}
                  className='shadow-sm'
                   />
                </div>
                <h5 className='fw-bold'>JANE SMITH</h5>
                <p className='text-muted'>Desinger</p>
              </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>

    {/* Blog Section */}
    <div className="blog py-5 my-5">
      <div className="container">
        <div className="section-title d-flex flex-column justify-content-center align-items-center">
          <h2>-From The Blog</h2>
          <h1>Our Latest Blog</h1>
        </div>
        <div className="row mt-5 position-relative">
          <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          navigation={{
            nextEl: '.blog-swiper-btn-next',
            prevEl: '.blog-swiper-btn-prev'
          }}
          breakpoints={{
            1399:{
              slidesPerView: 3,
            },
            991:{
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            0:{
              slidesPerView: 1,
            }
          }}
          className='blog-swiper'
          >
              {/* slide 1 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog1} className='img-fluid rounded' alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      Februrary 9, 2025 <span className='dot'>.</span><span>by Editor</span>
                    </h5>
                    <h1 className='blog-title mt-2 mb-3'>
                      How to Write a Blog Post Your Readers Will Love in 5 Steps
                    </h1>
                    <p className='blog-desc'>
                      Why the world would end without travel coupons.The 16 worst songs about spa deals.How daily..
                    </p>
                    <a href="#" className='blog-btn'>Read more</a>
                  </div>
                </div>
              </SwiperSlide>

               {/* slide 2 */}
               <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog2} className='img-fluid rounded' alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      Februrary 7, 2025 <span className='dot'>.</span><span>by Editor</span>
                    </h5>
                    <h1 className='blog-title mt-2 mb-3'>
                      9 Content Marketing Trends and Ideas to Increase Traffica 
                    </h1>
                    <p className='blog-desc'>
                    Why do people People think wholesale accessories are good idea? Unbelivevable cool tech gadget success stories. How...
                    </p>
                    <a href="#" className='blog-btn'>Read more</a>
                  </div>
                </div>
              </SwiperSlide>

                 {/* slide 3 */}
                 <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog3} className='img-fluid rounded' alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      Februrary 5, 2025 <span className='dot'>.</span><span>by Editor</span>
                    </h5>
                    <h1 className='blog-title mt-2 mb-3'>
                    The Ultimate Guide to Marketing Strataegies to Improve Sales
                    </h1>
                    <p className='blog-desc'>
                    Many things about electronic devices your kids don't want yoy to know How Storage devices can help...
                    </p>
                    <a href="#" className='blog-btn'>Read more</a>
                  </div>
                </div>
              </SwiperSlide>

                {/* slide 4 */}
                 <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog4} className='img-fluid rounded' alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      Februrary 3, 2025 <span className='dot'>.</span><span>by Editor</span>
                    </h5>
                    <h1 className='blog-title mt-2 mb-3'>
                  50 Best Sales Questions to Determine your Customer's Needs
                    </h1>
                    <p className='blog-desc'>
                    Lorem ipsum dolor sit amet consectetur,
                    consectetur fugiat corporis sapiente modi facere veniam. Ipsa, animi.
                    </p>
                    <a href="#" className='blog-btn'>Read more</a>
                  </div>
                </div>
              </SwiperSlide>

                {/* slide 5 */}
                <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog5} className='img-fluid rounded' alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      Februrary 1, 2025 <span className='dot'>.</span><span>by Editor</span>
                    </h5>
                    <h1 className='blog-title mt-2 mb-3'>
                      6 Simple Ways To Boost You Ecommerce Coversion Rate 
                  50 Best Sales Questions to Determine your Customer's Needs
                    </h1>
                    <p className='blog-desc'>
                    Lorem ipsum dolor sit amet consectetur,
                    consectetur fugiat corporis sapiente modi facere veniam. Ipsa, animi.
                    </p>
                    <a href="#" className='blog-btn'>Read more</a>
                  </div>
                </div>
              </SwiperSlide>

                 {/* slide 6 */}
                <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog6} className='img-fluid rounded' alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      January 29, 2025 <span className='dot'>.</span><span>by Editor</span>
                    </h5>
                    <h1 className='blog-title mt-2 mb-3'>
                      9 Customer Experience Trends That'll Define the Next Year 
                      6 Simple Ways To Boost Your Ecommerce Conversion Rate
                    </h1>
                    <p className='blog-desc'>
                    Lorem ipsum dolor sit amet consectetur,
                    consectetur fugiat corporis sapiente modi facere veniam. Ipsa, animi.
                    </p>
                    <a href="#" className='blog-btn'>Read more</a>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
          <div className='swiper-button-prev blog-swiper-btn blog-swiper-btn-prev swiper-btn swiper-prev'><i className='ri-arrow-left-s-line'></i></div>
          <div className='swiper-button-next blog-swiper-btn blog-swiper-btn-next swiper-btn swiper-next'><i className='ri-arrow-right-s-line'></i></div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Index