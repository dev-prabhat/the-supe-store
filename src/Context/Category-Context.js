import React, { createContext, useState, useEffect, useContext } from "react"
import { useAxios } from "../customHooks/useAxios"

const CategoryContext = createContext()

const CategoryProvider = ({ children }) => {
    const [categoriesFromBackend, setCategoriesFromBackend] = useState([])
    const { response: responseFromCategory,loading:categoryLoader, operation: getCategories } = useAxios()

    useEffect(() => {
        getCategories({ method: "get", url: "/api/categories" })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        responseFromCategory !== undefined && setCategoriesFromBackend(responseFromCategory.categories)
    }, [responseFromCategory])

    return (
        <CategoryContext.Provider value={{ categoriesFromBackend,categoryLoader }}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategories = () => useContext(CategoryContext)

export { CategoryProvider, useCategories }
