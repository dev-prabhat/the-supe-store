import React, { createContext, useContext, useReducer , useEffect} from "react"
import { useAxios } from "../customHooks/useAxios"

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
    const {response:responseFromProduct,loading: loadingFromProducts ,operation:getProducts} = useAxios()
    const [filterState, filterDispatch] = useReducer(filterReducer, {
        byPrice: "",
        byCategoryNames: [],
        byRating: "",
        price: 2500,
        products:[]
    })
    function filterReducer(state, action) {
        switch (action.type) {
            case "SORT_BY_PRICE":
                return {
                    ...state, byPrice: action.payload
                }
            case "FILTER_BY_CATEGORY":
                return {
                    ...state, byCategoryNames: [...state.byCategoryNames, action.payload]
                }
            case "REMOVE_BY_CATEGORY":
                return {
                    ...state,
                    byCategoryNames: state.byCategoryNames.filter(ele => ele !== action.payload)
                }
            case "FILTER_FROM_HOMEPAGE":
                return{
                    ...state,
                    byCategoryNames:[action.payload]
                }
            case "SORT_BY_RATING":
                return {
                    ...state, byRating: action.payload
                }
            case "FILTER_BY_PRICE":
                return {
                    ...state, price: action.payload
                }
            case "MADE_API_CALL":
                return{
                    ...state, products: action.payload
                }
            case "CLEAR":
                return {
                    byPrice: "",
                    byCategoryNames: [],
                    byRating: "",
                    price: 2500,
                    products:[...responseFromProduct.products]
                }
            default:
                return state
        }
    }

    useEffect(()=>{
       getProducts({ method: "get", url: "/api/products"})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        if(responseFromProduct !== undefined){
          filterDispatch({type:"MADE_API_CALL",payload:responseFromProduct.products})
        }
    },[responseFromProduct])

    const filteredProduct = () => {
        const { byPrice, byCategoryNames, byRating, price ,products} = filterState
        let savedProduct = [...products]

        if (byPrice) {
            savedProduct = savedProduct.sort((a, b) => {
                return byPrice === "High_to_Low" ? b.originalPrice - a.originalPrice : a.originalPrice - b.originalPrice
            })
        }

        if (byCategoryNames.length > 0) {
            savedProduct = savedProduct.filter((item) => byCategoryNames.includes(item.categoryName))
        }

        if (byRating) {
            savedProduct = savedProduct.filter(item => item.star >= byRating)
        }

        if (price) {
            savedProduct = savedProduct.filter(item => item.originalPrice <= price)
        }

        return savedProduct
    }

    return (
        <FilterContext.Provider value={{ filterState, loadingFromProducts, filteredProduct, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }