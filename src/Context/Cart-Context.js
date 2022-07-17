import React, { createContext,useState, useContext, useEffect } from "react"
import {useAxios} from "../customHooks/useAxios"

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const {response,loading:cartLoader,operation} = useAxios()
    const [cartItems, setCartItems] = useState([])
    const [orderSummaryItems, setOrderSummaryItems] = useState([])

    const addToCart =  async (product) => {
        const encodedToken = localStorage.getItem("token");
        operation({
            method:"post",
            url:"/api/user/cart",
            headers: { "authorization": encodedToken },
            data:{product:product}
        })
    }

    const deleteFromCart = async (productID) => {
        const encodedToken = localStorage.getItem("token");
        operation({
            method:"delete",
            url:`/api/user/cart/${productID}`,
            headers: { "authorization": encodedToken }
        })
    }

    const clearCart = async () => {
        setOrderSummaryItems([...cartItems])
        const encodedToken = localStorage.getItem("token");
        operation({
            method:"delete",
            url:"/api/user/cart/all",
            headers: { "authorization": encodedToken }
        })
    }

    const increaseQty = async (productID) => {
        const encodedToken = localStorage.getItem("token")
        operation({
            method:"post",
            url:`/api/user/cart/${productID}`,
            headers: { "authorization": encodedToken } ,
            data:{action: {type: "increment"}}
        })
    }

    const decreaseQty = async (productID) => {
        const encodedToken = localStorage.getItem("token");
        operation({
            method:"post",
            url:`/api/user/cart/${productID}`,
            headers: { "authorization": encodedToken } ,
            data:{action: {type: "decrement"}}
        })
    }

    useEffect(()=>{
        response !== undefined && setCartItems(response.cart)
    },[response])


    return (
        <CartContext.Provider 
        value={{ cartItems,
        orderSummaryItems,
        addToCart,
        deleteFromCart,
        increaseQty,
        decreaseQty,
        cartLoader,
        clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }