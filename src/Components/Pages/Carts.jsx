import React, { useContext } from 'react'
import { CartContext } from './CartContextProvider'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Carts() {
    const { cartItems , removeFromCart , updateQuantity , total } = useContext(CartContext)
  return (
    <>
    <div className="page-section text-center py-5 position-relative overflow-hidden">
            <p className="breadcrumb-text text-muted mb-2">
                <Link to='/'>Home</Link> / <span className='text-dark'>Cart</span>
            </p>
            <h2 className='page-heading fw-bold text-uppercase'>Cart</h2>
        </div>
        <section className="pb-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='mb-4'>Shopping Cart</h2>
                        {cartItems.length === 0 ? (
                            <div className="alert alert-danger text-center">No Items In Cart</div>
                        ) : (
                            <div className="table-responsive mt-2">
                        <h2 className="fw-bold">My Wishlist</h2>
                        <table className='table align-middle text-center'>
                            <thead className='table-light w-100'>
                                <tr>
                                    <th className='fw-normal text-start'>Product</th>
                                    <th className='fw-normal text-end'>Price</th>
                                    <th className='fw-normal text-center d-none d-lg-table-cell'>Quantity</th>
                                    <th className='fw-normal text-end'>Subtotal</th>
                                    <th className='fw-normal text-center'>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className='text-start d-flex align-items-center'>
                                            <img src={item.image} className='img-fluid' style={{width: '80px'}} alt="" />
                                            <p className="ms-2 product-name">{item.name}</p>
                                        </td>
                                        <td className='text-end product-price'>
                                            <span>${item.price}</span>
                                        </td>
                                        <td className='text-center quantity-input'>
                                            <input type="number" value={item.quantity} min={1} onChange={(e) => updateQuantity(item.id , e.target.value)}/>
                                        </td>
                                        <td className='text-end product-price'>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        </td>
                                        <td className='text-center'>

                                            <button className='btn remove-cart-btn' onClick={() => {
                                                toast.info(`${item.name} Removed From Carts!`)
                                                removeFromCart(item.id)
                                                }}>&times;</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                        )}
                    </div>
                </div>
                {/* Cart Total  */}
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="card p-4 total-product-price-wrap shadow-sm border">
                            <h4 className='mb-3 fw-semibold'>Cart Totals</h4>
                            <table className='table table-borderless'>
                                <tbody>
                                    <tr>
                                    <td>Cart Subtotal</td>
                                    <td className='text-end text-success cart-subtotal product-price'>
                                        ${total.toFixed(2)}
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td className='text-end'>Free Shipping</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-semibold'>Total</td>
                                        <td className='text-end text-success cart-total product-price'>${total.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to='/checkout' className='btn checkout-btn d-inline-block mt-3'>
                            <i className="ri-bank-card-line me-2"></i> Proceed To Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Carts