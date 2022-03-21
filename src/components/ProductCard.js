import React from "react"
import { useCart } from "../Context/Cart-Context"
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ productObj }) => {
    const { name, image, price } = productObj
    const { dispatch } = useCart()

    const addItem = (productObj) => {
        dispatch({ type: "ADD", payload: { productObj } })
    }
    return (
        <div className="card-container vertical-card-container margin-md position-rel">
            <div className="width-2xl height-2xl">
                <img
                    className="img-responsive"
                    src={image}
                    alt="black_cap"
                />
                <FaHeart className="card-icon badge-link" />
            </div>
            <div className="card-description">
                <p className="text-md font-weight-semibold text-center">{name}</p>
                <p className="text-sm text-gray text-center">Rs {price.toLocaleString('en-IN')}</p>
                <button type="button" className="btn btn-primary head-sm d-100" onClick={() => addItem(productObj)}>
                    <FaShoppingCart className="cart-icon" />Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard