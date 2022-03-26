
import React, { createContext, useState, useEffect, useContext } from "react"
import { useAxios } from "../customHooks/useAxios"

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [productsFromDB, setProductsFromDB] = useState([])
    const [categoriesFromDB, setCategoriesFromDB] = useState([])
    const { response, loading, operation: fetchProducts } = useAxios()
    const { response: responseFromCategories, operation: fetchCategories } = useAxios()

    useEffect(() => {
        fetchProducts({ method: "get", url: "/api/products" })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        response !== undefined && setProductsFromDB(response?.products)
    }, [response])

    useEffect(() => {
        fetchCategories({ method: "get", url: "/api/categories" })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        responseFromCategories !== undefined && setCategoriesFromDB(responseFromCategories?.categories)
        setCategoriesFromDB(prev => prev.map(Obj => Obj.categoryName))
    }, [responseFromCategories])

    return (
        <ProductContext.Provider value={{ productsFromDB, loading, categoriesFromDB }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext)

export { ProductProvider, useProduct }