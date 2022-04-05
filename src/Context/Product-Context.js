import React, { createContext, useState, useEffect, useContext } from "react"
import { useAxios } from "../customHooks/useAxios"

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
     const [productsFromBackend, setProductsFromBackend] = useState([])
     const [categoriesFromBackend, setCategoriesFromBackend] = useState([])
     const { response: responseFromProduct, loading: loadingFromProduct, operation: getProducts } = useAxios()
     const { response: responseFromCategory, operation: getCategories } = useAxios()

    useEffect(() => {
        getProducts({ method: "get", url: "/api/products" })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        responseFromProduct !== undefined && setProductsFromBackend(responseFromProduct.products)
    }, [responseFromProduct])

    useEffect(() => {
        getCategories({ method: "get", url: "/api/categories" })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        responseFromCategory !== undefined && setCategoriesFromBackend(responseFromCategory.categories)
    }, [responseFromCategory])

    return (
        <ProductContext.Provider value={{ productsFromBackend,loadingFromProduct,categoriesFromBackend }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
