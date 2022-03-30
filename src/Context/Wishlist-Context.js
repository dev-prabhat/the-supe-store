import React, { createContext, useReducer, useContext } from "react"
import axios from "axios"

const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, { wishlistItems: [] })

    function wishlistReducer(state, action) {
        const { wishlistItems } = state
        switch (action.type) {
            case "ADD":
                return {
                    ...state, wishlistItems: [...wishlistItems, action.payload]
                }
            case "DELETE":
                return {
                    ...state, wishlistItems: [...action.payload]
                }
            default:
                return state
        }
    }


    const addToWishList = async (product) => {
        const encodedToken = localStorage.getItem("token");
        const config = { headers: { "authorization": encodedToken } }
        try {
            const { data } = await axios.post("/api/user/wishlist", { product }, config)
            const res = data.wishlist.find(Obj => Obj._id === product._id)
            wishlistDispatch({ type: "ADD", payload: res })
        }
        catch (e) {
            console.log(e)
        }
    }

    const deleteFromWishList = async (productId) => {
        const encodedToken = localStorage.getItem("token");
        const config = { headers: { "authorization": encodedToken } }
        try {
            const { data } = await axios.delete(`/api/user/wishlist/${productId}`, config)
            wishlistDispatch({ type: "DELETE", payload: data.wishlist })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch, addToWishList, deleteFromWishList }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }