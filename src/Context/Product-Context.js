import React, { createContext, useState, useEffect, useContext } from "react"
import { useAxios } from "../customHooks/useAxios"

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [categoriesFromBackend, setCategoriesFromBackend] = useState([])
    const { response: responseFromCategory, operation: getCategories } = useAxios()

    useEffect(() => {
        getCategories({ method: "get", url: "/api/categories" })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        responseFromCategory !== undefined && setCategoriesFromBackend(responseFromCategory.categories)
    }, [responseFromCategory])

    return (
        <ProductContext.Provider value={{ categoriesFromBackend }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
