import React from "react"
import { useCart } from "../Context/Cart-Context"
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { name, image } = product
    const { dispatch } = useCart()

    const addItem = (product) => {
        dispatch({ type: "ADD", payload: { product } })
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
                <p className="text-sm text-gray text-center">Rs.499</p>
                <button type="button" className="btn btn-primary head-sm d-100" onClick={() => addItem(product)}>
                    <FaShoppingCart className="cart-icon" />Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard