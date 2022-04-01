import React, { createContext, useReducer, useContext, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [], })
    function cartReducer(state, action) {
        const { cartItems } = state
        switch (action.type) {
            case "GET":
                return {
                    ...state, cartItems: [...action.payload]
                }
            case "ADD":
                return {
                    ...state, cartItems: [...cartItems, action.payload]
                }
            case "DELETE":
                return {
                    ...state, cartItems: [...action.payload]
                }
            case "CHANGE_QUANTITY":
                return {
                    ...state, cartItems: cartItems.map(item =>
                        item._id === action.payload._id ? { ...item, qty: action.payload.qty } : item
                    )
                }
            default:
                return state
        }
    }

    const addToCart = async (product) => {
        const encodedToken = localStorage.getItem("token");
        const config = { headers: { "authorization": encodedToken } }
        try {
            toast.info("Please Wait")
            const { data } = await axios.post("/api/user/cart", { product }, config)
            const res = data.cart.find(Obj => Obj._id === product._id)
            dispatch({ type: "ADD", payload: res })
            toast("Added")
        }
        catch (error) {
            toast.error(error.response.data.errors[0])
        }
    }

    const deleteFromCart = async (productID) => {
        const encodedToken = localStorage.getItem("token");
        const config = { headers: { "authorization": encodedToken } }
        try {
            const { data } = await axios.delete(`/api/user/cart/${productID}`, config)
            dispatch({ type: "DELETE", payload: data.cart })
            toast("Removed")
        }
        catch (error) {
            toast.error(error.response.data.errors[0])
        }
    }

    const increaseQty = async (productID) => {
        const encodedToken = localStorage.getItem("token");
        const config = { headers: { "authorization": encodedToken } }
        try {
            toast.info("Please Wait")
            const { data } = await axios.post(`/api/user/cart/${productID}`, {
                action: {
                    type: "increment"
                }
            }, config)
            const product = data.cart.find(Obj => Obj._id === productID)
            dispatch({ type: "CHANGE_QUANTITY", payload: product })
            toast("Incremented")
        }
        catch (error) {
            toast.error(error.response.data.errors[0])
        }
    }

    const decreaseQty = async (productID) => {
        const encodedToken = localStorage.getItem("token");
        const config = { headers: { "authorization": encodedToken } }
        try {
            toast.info("Please Wait")
            const { data } = await axios.post(`/api/user/cart/${productID}`, {
                action: {
                    type: "decrement"
                }
            }, config)
            const product = data.cart.find(Obj => Obj._id === productID)
            dispatch({ type: "CHANGE_QUANTITY", payload: product })
            if (product.qty < 1) deleteFromCart(productID)
            else toast("Decremented")
        }
        catch (error) {
            toast.error(error.response.data.errors[0])
        }
    }

    const getProducts = async () => {
        const encodedToken = localStorage.getItem("token");
        const config = { headers: { "authorization": encodedToken } }
        try {
            const { data } = await axios.get("/api/user/cart", config)
            dispatch({ type: "GET", payload: data.cart })
        }
        catch (error) {
            toast.error(error.response.data.errors[0])
        }
    }


    useEffect(() => {
        const encodedToken = localStorage.getItem("token");
        if (encodedToken) getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <CartContext.Provider value={{ cartState, dispatch, addToCart, deleteFromCart, increaseQty, decreaseQty }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }