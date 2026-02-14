import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContextProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function CheckOut() {
    const { cartItems } = useContext(CartContext);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total , setTotal] = useState(0);

    useEffect(() => {
        const totalAmount = cartItems.reduce((acc,item) => acc + item.price * item.quantity, 0);
        const taxAmount = totalAmount * 0.18
        const grandTotal = totalAmount + taxAmount
        
        setSubtotal(totalAmount);
        setTax(taxAmount);
        setTotal(grandTotal);

    }, [cartItems]);

    const handleCheckout = () => {
        toast.success("Checkout successful!")
    }
  return (
    <>
    <div className="Page-section text-center py-5 position-relative overflow-hidden">
        <p className='breadcrumb-text text-muted mb-2 z-5'>
            <Link to='/' className='breadcrumb-link text-decoration-none text-dark fs-5'>Home</Link> /<span className='text-dark fs-5'>Check-Out</span>
        </p>
        <h2 className='page-heading fw-bold text-uppercase'>Check-Out</h2>
    </div>

    <div className="container py-5">
        <div className="row">
        <div className="col-lg-7">
            <div className='accordion' id='accordionExample'>
                {/* Delivery Address */}
                <div
                className='w-100 d-flex justify-content-between align-items-center border-bottom py-2'
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                >
                    <div className="d-flex align-items-center gap-2">
                        <i className='ri-map-pin-line fs-6 text-secondary'></i>
                        <span className='custum-hover fw-medium'>Add delivery address</span>
                    </div>
                    <button type='button' className='btn btn-outline-success btn-sm'>add new address</button>
                </div>

                <div id='collapseOne' className='accordion-collapse collapse show' data-bs-parent='#accordionExample'>
                    <div className="accordion-body">
                        <div className="container mt-4">
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                <div className="col">
                                    <div className="card h-100 p-3 shadow-sm">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className='fs-6 d-flex align-items-center'>
                                                <input type="radio" name='address' className='form-check-input me-2' defaultChecked/>
                                                Home
                                            </h5>
                                        </div>
                                        <p className='mb-2' style={{fontSize: ".80rem"}}>
                                            Jitu Chauhan <br />
                                            4450 North Avenu Oakland, <br />
                                            Nebraska, United States <br />
                                            403-533-3502
                                        </p>
                                        <div className="mt-auto">
                                            <a href="#" className='text-success d-block mb-1' style={{fontSize:".90rem"}}>
                                                Set as Default
                                            </a>
                                            <a href="#" className='text-primary me-2' style={{fontSize:".90rem"}}>
                                                Edit
                                            </a>
                                            <a href="#" className='text-danger' style={{fontSize:".90rem"}}>
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card h-100 p-3 shadow-sm">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className='fs-6 d-flex align-items-center'>
                                                <input type="radio" name='address' className='form-check-input me-2' defaultChecked/>
                                                Office
                                            </h5>
                                        </div>
                                        <p className='mb-2' style={{fontSize: ".80rem"}}>
                                            Nitu Chauhan <br />
                                            4450 North Avenu Oakland, <br />
                                            Nebraska, United States <br />
                                            403-533-3502
                                        </p>
                                        <div className="mt-auto">
                                            <a href="#" className='text-success d-block mb-1' style={{fontSize:".90rem"}}>
                                                Set as Default
                                            </a>
                                            <a href="#" className='text-primary me-2' style={{fontSize:".90rem"}}>
                                                Edit
                                            </a>
                                            <a href="#" className='text-danger' style={{fontSize:".90rem"}}>
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Method */}

                <div className="border-bottom py-2" id="headingThree">
                    <div
                    className='collapsed'
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls='collapseThree'
                    >
                            <div className="d-flex align-items-center gap-2">
                                <i className="ri-bank-card-line fs-6 text-secondary"></i>
                                <span className='custum-hover fw-medium'>Payment Method</span>
                            </div>
                    </div>
                </div>

                
                <div id='collapseThree' className='accordion-collapse collapse show' data-bs-parent='#accordionExample'>
                    <div className="accordion-body">
                        <div className="container mt-4">
                            <div className="card p-3 mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id='paypal'/>
                                    <label htmlFor="paypal" className='form-check-label fs-6 fw-semibold '>Payment With Paypal</label>
                                    <p className='text-muted ms-1 fs-6 mb-0'>You Will be redirected to paypal to complete the purchase.</p>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="card p-3 mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id='paypal'/>
                                    <label htmlFor="paypal" className='form-check-label fs-6 fw-semibold '>Payment With Paypal</label>
                                    <p className='text-muted ms-1 fs-6 mb-0'>We support Mastercard, Visa, Discover, and Stripe.</p>
                                </div>
                                <div className="mt-3">
                                    <label className='form-label'>Card Number</label>
                                    <input type="text" className='form-control' placeholder='1234 5678 9743 0482'/>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className='form-label'>Name on card</label>
                                        <input type="text" className='form-control' placeholder='Enter your first name'/>
                                    </div>
                                    <div className="col-md-3">
                                        <label className='form-label'>Expiry date</label>
                                        <input type="date" className='form-control'/>
                                    </div>
                                    <div className="col-md-3">
                                        <label className='form-label'>CVV code</label>
                                        <input type="date" className='form-control' placeholder='xxx'/>
                                    </div>
                                </div>
                            </div>

                            {/* Payoneer */}

                            <div className="card p-3 mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id='paypal'/>
                                    <label htmlFor="paypal" className='form-check-label fs-6 fw-semibold '>Pay with Payoneer</label>
                                    <p className='text-muted ms-1 fs-6 mb-0'>You Will be redirected to paypal to complete the purchase.</p>
                                </div>
                            </div>
                            {/* COD */}
                            <div className="card p-3 mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id='paypal'/>
                                    <label htmlFor="paypal" className='form-check-label fs-6 fw-semibold '>Cash on Delivery</label>
                                    <p className='text-muted ms-1 fs-6 mb-0'>Pay with cash when your order is delivered.</p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end gap-2 mt-3">
                                <button className='btn btn-outline-secondary'>Prev</button>
                                <button className='btn btn-success'>Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-5 mb-0 mb-md-4">
            <div className="container col-md-10 m-auto">
                <div className="card p-4">
                    <h5 className='border-bottom mb-3 fs-4 fw-semibold'>Order Details</h5>

                    <div id="card-items">
                        {cartItems.length > 0 ? (
                            cartItems.map((item,i) => (
                                <div key={i} className='d-flex justify-content-between align-items-center mb-3'>
                                    <span className='d-flex align-items-center gap-2'>
                                        <img 
                                        src={item.image || "/default-image.jpg"}
                                        alt={item.name}
                                        style=
                                        {{
                                        width: "40px", 
                                        height: "40px", 
                                        objectFit: "cover",
                                        borderRadius: "5px"}} />
                                        <span>{item.name} x {item.quantity}</span>
                                    </span>
                                    <span className='product-price'>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))
                        ):(
                            <p>No items in cart.</p>
                        )}
                    </div>

                    <div className="mt-3">
                        <div className="d-flex justify-content-between">
                            <span>Item Subtotal</span>
                            <span className='product-price'>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Shipping Free</span>
                            <span className='fw-semibold'>0.00</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Tax VAT 18%</span>
                            <span className='product-price'>${tax.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between fs-6">
                            <span className='fw-semibold'>Grand Total</span>
                            <span className='product-price'>${subtotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="d-grid mt-4">
                        <button onClick={handleCheckout} className='btn btn-success'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default CheckOut