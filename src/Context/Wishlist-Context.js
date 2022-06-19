import React, { createContext, useContext, useEffect, useState } from "react"
import {useAxios} from "../customHooks/useAxios"

const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {
    const {response,loading:wishListLoader, operation} = useAxios()
    const [wishlistItems, setWishlistItems] = useState([])

    const addToWishList = async (product) => {
        const encodedToken = localStorage.getItem("token");
        operation({
            method:"post",
            url:"/api/user/wishlist",
            headers: { "authorization": encodedToken },
            data:{product:product}
        })
    }

    const deleteFromWishList = async (productId) => {
        const encodedToken = localStorage.getItem("token");
        operation({
            method:"delete",
            url:`/api/user/wishlist/${productId}`,
            headers: { "authorization": encodedToken }
        })
    }

    useEffect(()=>{
        response !== undefined && setWishlistItems(response.wishlist)
      },[response])

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishList, deleteFromWishList,wishListLoader }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }