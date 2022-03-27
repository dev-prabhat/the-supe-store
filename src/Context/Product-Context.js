import React, { createContext, useState, useEffect, useContext } from "react"
import { useAxios } from "../customHooks/useAxios"

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
     const [productsFromBackend, setProductsFromBackend] = useState([])
     const [categoriesFromBackend, setCategoriesFromBackend] = useState([])
     const { response: responseFromProducts, loading: loadingFromProducts, operation: getProducts } = useAxios()
     const { response: responseFromCategories, operation: getCategories } = useAxios()

    useEffect(() => {
        getProducts({ method: "get", url: "/api/products" })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        responseFromProducts !== undefined && setProductsFromBackend(responseFromProducts.products)
    }, [responseFromProducts])

    useEffect(() => {
        getCategories({ method: "get", url: "/api/categories" })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        responseFromCategories !== undefined && setCategoriesFromBackend(responseFromCategories.categories)
        setCategoriesFromBackend(prev => prev.map(categoryObj => categoryObj.categoryName))
    }, [responseFromCategories])

    return (
        <ProductContext.Provider value={{ productsFromBackend, loadingFromProducts, categoriesFromBackend }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
