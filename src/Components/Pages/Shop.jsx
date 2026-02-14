import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { CartContext } from './../Pages/CartContextProvider';
import { WishlistContext } from './../Pages/WishlistContextProvider';

import Products from './../../Product.json';



function Shop() {

      // Add to Cart 
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);


  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleCount ,setVisibleCount] = useState(12);
  const [quantity , setQuantity] = useState(1);

  const initialCount = 12;

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setQuantity(1)
    const modal = new window.bootstrap.Modal(document.getElementById('productDet'))
    modal.show();
  }

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1)
  }

   // Count Countity 



   const handleIncrease = () => {
    setQuantity(prev => prev + 1)
   }

   const handleAddToCart = (product,qty = 1) => {
    const cartProduct = {
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        quantity: qty,
        image: product.image,
    }
    addToCart(cartProduct)
    toast.success(`${product.name} added to Cart`)
   }
   
    
  return (
    <>
      <div className="Page-section text-center py-5 position-relative overflow-hidden">
        <p className="breadcrumb-text text-muted mb-2">
          <Link to="/" className="breadcrumb-link text-dark">
            Home
          </Link>{" "}
          / <span className="text-dark">Shop</span>
        </p>
        <h2 className="page-heading fw-bold text-uppercase">Shop</h2>
      </div>

      <div className="container my-5">
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-between align-items-center">
                <div>
                    <p>Shaowing All <strong>Products</strong> For You</p>
                </div>
                <div className="d-flex gap-3">
                    <span><i className="ri-apps-line"></i>Shwo: 50</span>
                    <span><i className="ri-apps-line"></i>Sort by: Featured</span>
                </div>
            </div>
        </div>
              {/* Product Grid */}
      <div className="row mt-5">
        {Products.slice(0, visibleCount).map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
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
            </div>
        ))}
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

    <div className="row">
        <div className="col-lg-12 d-flex justify-content-center py-5">
            <button
            className="btn btn-outline-dark"
            onClick={() => {
                setVisibleCount(visibleCount < Products.length ? Products.length : initialCount)
            }}
            >
                {visibleCount < Products.length ? "LOAD MORE" : "LOAD LESS"}
            </button>
        </div>
    </div>
</div>


    </>
  );
}

export default Shop;
