import React, { createContext, useContext, useEffect, useState } from "react"
import {useAxios} from "../customHooks/useAxios"

const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {
    const {response,operation} = useAxios()
    const [wishlistItems, setWishlistItems] = useState([])
    // const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, { wishlistItems: [] })

    // function wishlistReducer(state, action) {
    //     switch (action.type) {
    //         case "WISHLIST_SUCCESS":
    //             return {
    //                 ...state, wishlistItems: [...action.payload]
    //             }
    //         default:
    //             return state
    //     }
    // }

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
        <WishlistContext.Provider value={{ wishlistItems, addToWishList, deleteFromWishList }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }