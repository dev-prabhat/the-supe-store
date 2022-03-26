
import React, { createContext, useState, useEffect, useContext } from "react"
import { useAxios } from "../customHooks/useAxios"

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [productsFromDB, setProductsFromDB] = useState([])
    const { response, loading, operation: fetchProducts } = useAxios()

    useEffect(() => {
        fetchProducts({ method: "get", url: "/api/products" })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        response !== undefined && setProductsFromDB(response?.products)
    }, [response])

    return (
        <ProductContext.Provider value={{ productsFromDB, loading }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext)

export { ProductProvider, useProduct }