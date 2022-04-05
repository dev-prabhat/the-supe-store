import React from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { useCart } from "../Context/Cart-Context"
import { useWishlist } from "../Context/Wishlist-Context"
import { useAuth } from "../Context/Auth-Context"
import { FaHeart, FaShoppingCart, FaStar, FaRegHeart } from "react-icons/fa";


const ProductCard = ({ productObj }) => {
    const { name, image, price, star, tag } = productObj
    const {  cartItems , addToCart } = useCart()
    const { token } = useAuth()
    const { addToWishList, wishlistItems  } = useWishlist()

    const isProductInWishList = wishlistItems.findIndex(p => p._id === productObj._id) === -1 ? false : true
    const isProductInCart = cartItems.findIndex(p => p._id === productObj._id) === -1 ? false : true

    const cartHandler = (productObj) => {
        if (token) addToCart(productObj)
        else toast("Please Login")
    }

    const wishListHandler = (productObj) => {
        if (token) addToWishList(productObj)
        else toast("Please Login")
    }

    return (
        <div className="card-container vertical-card-container margin-md position-rel">
            <div className="width-2xl height-2xl">
                <img
                    className="img-responsive"
                    src={image}
                    alt="black_cap"
                />
                {
                    isProductInWishList
                        ? <FaHeart
                            className="card-icon badge-link" />
                        : <FaRegHeart
                            className="card-icon badge-link"
                            onClick={() => wishListHandler(productObj)} />
                }
            </div>
            {
                tag && <span className="trending-info padding-xxs font-weight-semibold">{tag}</span>
            }
            <span className="rating-info padding-xxs font-weight-semibold">{star} <FaStar className="star-info" /></span>
            <div className="card-description">
                <p className="text-md font-weight-semibold text-center">{name}</p>
                <p className="text-sm text-gray text-center">Rs {price.toLocaleString('en-IN')}</p>
                {
                    isProductInCart
                        ? <Link
                            to="/cart"
                            className="btn btn-primary btn-link head-sm d-100 d-inline_block text-center">
                            Go to Cart
                        </Link>
                        : <button
                            type="button"
                            className="btn btn-primary head-sm d-100"
                            onClick={() => cartHandler(productObj)}>
                            <FaShoppingCart className="cart-icon" />Add to cart
                        </button>
                }
            </div>
        </div>
    )
}

export default ProductCard