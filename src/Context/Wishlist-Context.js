import React, { createContext, useReducer, useContext } from "react"

const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, { wishlistItems: [] })

    function wishlistReducer(state, action) {
        const { wishlistItems } = state
        switch (action.type) {
            case "ADD":
                const { _id } = action.payload
                const index = wishlistItems.findIndex(product => product._id === _id)
                if (index === -1)
                    return {
                        ...state, wishlistItems: [...wishlistItems, { ...action.payload }]
                    }
                return { ...state, wishlistItems: wishlistItems.filter(product => product._id === index) }
            case "DELETE":
                return {
                    ...state, wishlistItems: wishlistItems.filter(product => product._id !== action.payload)
                }
            default:
                return state
        }
    }


    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }