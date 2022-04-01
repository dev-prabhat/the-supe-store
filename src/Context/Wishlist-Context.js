import React, { createContext, useReducer, useContext, useEffect } from "react"
import { toast } from "react-toastify"
import axios from "axios"

const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, { wishlistItems: [] })

    function wishlistReducer(state, action) {
        const { wishlistItems } = state
        switch (action.type) {
            case "GET":
                return {
                    ...state, wishlistItems: [...action.payload]
                }
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
            toast.info("Please wait")
            const { data } = await axios.post("/api/user/wishlist", { product }, config)
            const res = data.wishlist.find(Obj => Obj._id === product._id)
            wishlistDispatch({ type: "ADD", payload: res })
            toast("WishListed")
        }
        catch (error) {
            toast.error(error.response.data.errors[0])
        }
    }

    const deleteFromWishList = async (productId) => {
        const encodedToken = localStorage.getItem("token");
        const config = { headers: { "authorization": encodedToken } }
        try {
            toast.info("Please wait")
            const { data } = await axios.delete(`/api/user/wishlist/${productId}`, config)
            wishlistDispatch({ type: "DELETE", payload: data.wishlist })
            toast("Removed")
        } catch (error) {
            toast.error(error.response.data.errors[0])
        }
    }

    const getProductsFromWishList = async () => {
        const encodedToken = localStorage.getItem("token");
        const config = { headers: { "authorization": encodedToken } }
        try {
            const { data } = await axios.get("/api/user/wishlist", config)
            wishlistDispatch({ type: "GET", payload: data.wishlist })
        } catch (error) {
            toast.error(error.response.data.errors[0])
        }
    }

    useEffect(() => {
        const encodedToken = localStorage.getItem("token");
        if (encodedToken) getProductsFromWishList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch, addToWishList, deleteFromWishList }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }