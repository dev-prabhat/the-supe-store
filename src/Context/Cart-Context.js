import React, { createContext, useReducer, useContext } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [], })
    function cartReducer(state, action) {
        const { cartItems } = state
        switch (action.type) {
            case "ADD":
                const { _id, name, image, price } = action.payload.productObj;
                const index = cartItems.findIndex(Obj => Obj._id === _id);
                return (index === -1) ? {
                    ...state, cartItems: [...cartItems, { _id, name, image, price, qty: 1 }]
                } : {
                    ...state, cartItems: cartItems.map(item =>
                        item._id === _id ? { ...item, qty: item.qty + 1 } : item
                    )
                }
            case "DELETE":
                return {
                    ...state, cartItems: cartItems.filter(product => product._id !== action.payload)
                }
            case "INCREASE_QUANTITY":
                return {
                    ...state, cartItems: cartItems.map(item =>
                        item._id === action.payload ? { ...item, qty: item.qty + 1 } : item
                    )
                }
            case "DECREASE_QUANTITY":
                return {
                    ...state, cartItems: cartItems.map(item =>
                        item._id === action.payload ? (
                            (item.qty <= 1) ? { ...item, qty: 1 } : { ...item, qty: item.qty - 1 }
                        ) : item
                    )
                }
            default:
                return state
        }
    }

    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }