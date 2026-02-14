import React, { useState } from 'react'


import Products from './../../Product.json'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { CartContext } from '../Pages/CartContextProvider';
import { WishlistContext } from '../Pages/WishlistContextProvider';
import { Link } from 'react-router-dom';
const primaryColor = '#9e6747'
function Nav() {

    const {cartItems} = useContext(CartContext);
    const {wishlistItems} = useContext(WishlistContext);

    const wishlistCount = wishlistItems.length;
    const cartCount = cartItems.length;

    const [ searchTerm, setSearchTerm] = useState('');
    const [ filteredProducts , setFilteredProducts] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value)

        if(value.trim() === '') {
            setFilteredProducts([])
        }
        else {
            const filtered = Products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
        }
    };

    const [selectedProduct , setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product)
        const modal = new window.bootstrap.Modal(document.getElementById('productModal'));
        modal.show()
    }

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
    {/* Nav */}
    <div className='nav w-100 fixed-top top-0 start-0 bg-light shadow-sm'>
        <nav className='container navbar navbar-expand-lg'>

            {/* logo */}
            <a href="#" className='navbar-brand'>
                <h3 style={{color: primaryColor, margin: 0}}>Furnex</h3>
            </a>

            {/* Mobile Icon */}
            <div className="d-lg-none mobile-icon d-flex align-items-center gap-3">
                <a href="#">
                    <i className="bi bi-search fs-5"></i>
                </a>
                <a href="#">
                    <i className="bi bi-person fs-5"></i>
                </a>
                <Link to="/wishlist" className='position-relative'>
                    <i className="bi bi-heart fs-5"></i>
                    {wishlistCount > 0 && (
                <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>{wishlistCount}</span>
                    )}
                </Link>
                <Link to="/carts" className='position-relative'>
                    <i className="bi bi-bag fs-5"></i>
                    {cartCount > 0 && (
                        <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>{cartCount}</span>
                    )}
                </Link>
            </div>

            {/* Toggle Button  */}
            <button 
            className="navbar-toggler"
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            
            {/* Main Nav links  */}
            
            <div className="collapse navbar-collapse" id='navbarNav'>
                {/* Nav Links  */}
                <ul className="navbar-nav mx-auto align-items-center">
                    <li className="nav-item">
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className='nav-link'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className='nav-link'>Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className='nav-link'>Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" className='nav-link'>Contact</Link>
                    </li>
                </ul>

                {/* Desktop Icons  */}
                <ul className="navbar-nav ms-auto d-none d-lg-flex align-items-center gap-3">
                    <li className="nav-items">
                    <a href="#" data-bs-toggle='modal' data-bs-target='#searchModal'>
                        <i className="bi bi-search fs-4 text-dark"></i>
                     </a>
                    </li>
                    <li className="nav-items">
                    <a href="#" data-bs-toggle='modal' data-bs-target='#signupModal'>
                        <i className="bi bi-person fs-4 text-dark"></i>
                     </a>
                    </li>
                    <li className="nav-items">
                    <Link to='/wishlist' className='position-relative'>
                    <i className="bi bi-heart fs-4 text-dark"></i>
                    {wishlistCount > 0 && (
                <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>{wishlistCount}</span>
                    )}
                    
                        </Link>
                    </li>
                    <li className="nav-items">
                    <Link to='/carts' className='position-relative'>
                    <i className="bi bi-bag fs-4 text-dark"></i>
                    {cartCount > 0 && (
                        <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>{cartCount}</span>
                    )}
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    {/* Sign-Up Modal */}
    <div className="modal fade" id='signupModal' tabIndex="-1" aria-labelledby='signupModalLabel' aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
                <div className="modal-header border-0">
                    <h5 className="modal-title sign-up-title fw-bold" id='signupModalLabel'>Sign Up</h5>
                    <button type='button' className="btn-close close-modal" data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                <div className="modal-body">
                {/* Signup Form  */}
                <form>
                    <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input type="text" className='form-control border shadow-sm' placeholder='Enter You Name' required/>
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Email address</label>
                    <input type="email" className='form-control border shadow-sm' placeholder='Enter Email address' required/>
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type="password" className='form-control border shadow-sm' placeholder='Enter You Password' required/>
                    </div>

                    <p className='terms text-muted'>By Signup, you agree to our <a href="#">Terms Of Service </a> & <a href="#">Privacy Policy</a></p>
                    <button type='button' className='btn text-white btn-signup w-100'>Sign Up</button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-0 terms">Already have account? <a href="" className='fw-bold'>Sign In</a></p>
                </div>
                </div>
            </div>
        </div>
    </div>
    {/* Search modal  */}
    <div className="modal fade" id='searchModal' tabIndex="-1" aria-labelledby='searchModalLabel' aria-hidden='true'>
    <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
                <div className="modal-header border-0">
                    <h5 className="modal-title sign-up-title fw-bold" id='searchModalLabel'>Search</h5>
                    <button type='button' className="btn-close close-modal search-close" data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <input type="text" className='form-control shadow-sm' placeholder='Search for Product' autoFocus onChange={handleChange}/>
                        </div>
                        <div className="show-search-product-wrap row">
                            {searchTerm.trim() !== '' ?  (
                                filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                        <div key={product.id} className='ssp-wrap border mb-2 col-lg-6'
                                        onClick={() => handleProductClick(product)}
                                        style={{cursor: 'pointer'}}
                                        >
                                            <div className='ssp-img'>
                                                <img src={product.image} className='img-fluid' alt="" />
                                            </div>
                                            <div className="ssp-info p-2">
                                                <h6>{product.name}</h6>
                                            </div>
                                        </div>
                                    ))
                                
                            ) : (
                                <p className='text-muted'>No Product Found.</p>
                            ) 

                            ) : (
                                <p className='text-muted'>No Product Found.</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* Product Popup Modal  */}
    <div className="modal fade" 
    id='productModal'
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
    </>

      
  )
}

export default Nav