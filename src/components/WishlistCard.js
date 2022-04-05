import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../Context/Cart-Context";
import { useWishlist } from "../Context/Wishlist-Context"
import { useAuth } from "../Context/Auth-Context"
import { GiCancel } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

const WishlistCard = ({ productObj }) => {
    const { _id, name, image, price } = productObj
    const { deleteFromWishList } = useWishlist()
    const { addToCart, cartItems } = useCart()
    const { token } = useAuth()


    const isProductInCart = cartItems.findIndex(p => p._id === productObj._id) === -1 ? false : true

    return (
        <div className="card-container vertical-card-container margin-md position-rel">
            <div className="width-2xl height-2xl">
                <img
                    className="img-responsive"
                    src={image}
                    alt="black_cap"
                />
                <GiCancel className="card-icon badge-link" onClick={() => deleteFromWishList(_id)} />
            </div>
            <div className="card-description">
                <h2 className="text-md font-weight-semibold text-center">{name}</h2>
                <p className="text-sm text-gray text-center">Rs.{price.toLocaleString("en-IN")}</p>
                {
                    (isProductInCart && token)
                        ? <Link
                            to="/cart"
                            className="btn btn-primary btn-link head-sm d-100 d-inline_block text-center">
                            Go to Cart
                        </Link>
                        : <button
                            type="button"
                            className="btn btn-primary head-sm d-100"
                            onClick={() => addToCart(productObj)}>
                            <FaShoppingCart className="cart-icon" />Add to cart
                        </button>
                }
            </div>
        </div>
    )
}

export default WishlistCard