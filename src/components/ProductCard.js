import React from "react"
import { useCart } from "../Context/Cart-Context"
import { useWishlist } from "../Context/Wishlist-Context"
import { FaHeart, FaShoppingCart, FaStar, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ productObj }) => {
    const { name, image, price, star, tag } = productObj
    const { dispatch } = useCart()

    const { wishlistDispatch, wishlistState: { wishlistItems } } = useWishlist()

    const isProductInWishList = wishlistItems.findIndex(p => p._id === productObj._id) === -1 ? false : true

    const addToCart = (productObj) => {
        dispatch({ type: "ADD", payload: productObj })
    }

    const addToWishlist = (productObj) => {
        wishlistDispatch({ type: "ADD", payload: productObj })
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
                    isProductInWishList ? <FaHeart className="card-icon badge-link" onClick={() => addToWishlist(productObj)} /> : <FaRegHeart className="card-icon badge-link" onClick={() => addToWishlist(productObj)} />
                }

            </div>
            {
                tag && <span className="trending-info padding-xxs font-weight-semibold">{tag}</span>
            }
            <span className="rating-info padding-xxs font-weight-semibold">{star} <FaStar className="star-info" /></span>
            <div className="card-description">
                <p className="text-md font-weight-semibold text-center">{name}</p>
                <p className="text-sm text-gray text-center">Rs {price.toLocaleString('en-IN')}</p>
                <button type="button" className="btn btn-primary head-sm d-100" onClick={() => addToCart(productObj)}>
                    <FaShoppingCart className="cart-icon" />Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard