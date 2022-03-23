import React from "react"
import { useWishlist } from "../Context/Wishlist-Context"
import { GiCancel } from "react-icons/gi";
import { useCart } from "../Context/Cart-Context";

const WishlistCard = ({ productObj }) => {
    const { _id, name, image, price } = productObj
    const { wishlistDispatch } = useWishlist()
    const { dispatch } = useCart()

    const addToCart = (productObj) => {
        const { _id } = productObj
        dispatch({ type: "ADD", payload: productObj })
        wishlistDispatch({ type: "DELETE", payload: _id })
    }

    return (
        <div className="card-container vertical-card-container margin-md position-rel">
            <div className="width-2xl height-2xl">
                <img
                    className="img-responsive"
                    src={image}
                    alt="black_cap"
                />
                <GiCancel className="card-icon badge-link" onClick={() => wishlistDispatch({ type: "DELETE", payload: _id })} />
            </div>
            <div className="card-description">
                <h2 className="text-md font-weight-semibold text-center">{name}</h2>
                <p className="text-sm text-gray text-center">Rs.{price.toLocaleString("en-IN")}</p>
                <button type="button" className="btn btn-primary head-sm d-100" onClick={() => addToCart(productObj)}>
                    Move to Cart
                </button>
            </div>
        </div>
    )
}

export default WishlistCard