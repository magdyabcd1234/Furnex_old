import React, { useContext } from 'react'
import { WishlistContext } from './WishlistContextProvider'
import { CartContext } from './CartContextProvider'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Wishlist() {

    const { wishlistItems , removeFromWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);
  return (
    <>
        <div className="page-section text-center py-5 position-relative overflow-hidden">
            <p className="breadcrumb-text text-muted mb-2">
                <Link to='/'>Home</Link> / <span className='text-dark'>Wishlist</span>
            </p>
            <h2 className='page-heading fw-bold text-uppercase'>Wishlist</h2>
        </div>

        <div className="container">
            {
                wishlistItems.length === 0 ? (
                    <div className="alert alert-danger text-center mt-5">No Items In Wishlist</div>
                ) : (
                    <div className="table-responsive mt-2">
                        <h2 className="fw-bold">My Wishlist</h2>
                        <table className='table align-middle text-center'>
                            <thead className='bg-light'>
                                <tr>
                                    <th className='product-name wl-text fw-normal'>Product</th>
                                    <th className='product-name wl-text fw-normal'>Price</th>
                                    <th className='product-name wl-text fw-normal hide-element'>Stock Status</th>
                                    <th className='product-name wl-text fw-normal'>Action</th>
                                    <th className='product-name wl-text fw-normal'>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlistItems.map((product) => (
                                    <tr key={product.id}>
                                        <td className='d-flex align-items-center gap-3 text-center'>
                                            <img src={product.image} width="80" height="80" className='border rounded' alt="" />
                                            <div>
                                                <p className='product-name wl-name m-0'>{product.name}</p>
                                            </div>
                                        </td>
                                        <td className='product-name fs-6 product-price'>${product.price}</td>
                                        <td className='text-success hide-element'>In Stock</td>
                                        <td>
                                            <button 
                                                className='btn wl-btn'
                                                onClick={() => {
                                                    addToCart({
                                                        id: product.id,
                                                        name: product.name,
                                                        price: product.price,
                                                        image: product.image,
                                                        quantity: 1
                                                    })
                                                    toast.success(`${product.name} Added to Cart!`)
                                                }}
                                                >
                                                    <span>
                                                        <i className='ri-shopping-cart-line me-2'> <span className='hide-element'>Add To Cart</span></i>
                                                    </span>
                                                </button>
                                        </td>
                                                <td>
                                                    <button
                                                    className='btn btn-outline-danger wl-btn'
                                                    onClick={() => {
                                                        removeFromWishlist(product.id)
                                                        toast.info(`${product.name} Removed from wishlist!`)
                                                    }}
                                                    >
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default Wishlist