import React from "react"
import { toast } from "react-toastify"

import { useCart } from "../Context/Cart-Context"
import { useWishlist } from "../Context/Wishlist-Context"

const CartCard = ({ productObj }) => {
    const { _id, name, image, qty, price } = productObj
    const { decreaseQty, deleteFromCart, increaseQty } = useCart()
    const { addToWishList, wishlistState: { wishlistItems } } = useWishlist()

    const isProductInWishList = wishlistItems.findIndex(p => p._id === productObj._id) === -1 ? false : true

    const moveToWishlist = (productObj) => {
        isProductInWishList ? toast("Already Present") : addToWishList(productObj)
    }

    return (
        <div className="card-container d-flex margin-md">
            <div className="width-2xl height-xl padding-xs">
                <img
                    className="img-responsive"
                    src={image}
                    alt="winter_coat"
                />
            </div>
            <div className="card-description padding-xs">
                <h3 className="card-title head-lg">{name}</h3>
                <div className="d-flex">
                    <p className="text-md font-weight-black">Rs.{price.toLocaleString("en-IN")}</p>
                    <p className="text-sm text-strike-through text-gray marginL">Rs.799</p>
                </div>
                <div className="d-flex">
                    <p className="text-md text-gray">50% off</p>
                    <div className="marginL">
                        Quantity:
                        <button className="quantity-btn border-radius-sm" onClick={() => decreaseQty(_id)}>-</button>
                        <p className="quantity-number text-center d-inline_block">{qty}</p>
                        <button className="quantity-btn border-radius-sm" onClick={() => increaseQty(_id)}>+</button>
                    </div>
                </div>
                <button type="button" className="btn btn-primary head-sm" onClick={() => deleteFromCart(_id)}>
                    Remove from Cart
                </button>
                <button type="button" className="btn btn-secondary head-sm" onClick={() => moveToWishlist(productObj)}>
                    Move to Wishlist
                </button>
            </div>
        </div>
    )
}

export default CartCard