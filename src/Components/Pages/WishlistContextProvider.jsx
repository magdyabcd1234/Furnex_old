import React, {  createContext, useEffect, useState } from 'react'

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
    const [wishlistItems , setWishlistItems] = useState(() => {
        const stored = localStorage.getItem('wishlist')
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
    }, [wishlistItems]);

    const addToWishlist = (product) => {
        const exists = wishlistItems.find(item => item.id === product.id)
        if(!exists) {
            setWishlistItems([...wishlistItems, product])
        }
    };

    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id))
    }

    return (
        <WishlistContext.Provider value={{wishlistItems, addToWishlist , removeFromWishlist}}>
                {children}
        </WishlistContext.Provider>
    )
}

export default WishlistContextProvider