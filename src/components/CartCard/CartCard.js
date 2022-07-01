import { toast } from "react-toastify"
import { useCart, useWishlist } from "../../Context"
import CardCSS from "./cartCard.module.css"

const CartCard = ({ productObj , isOrderSummary = false , isCartPage = false}) => {
    const { _id, name, originalPrice, discountedPrice, description, discount, image, qty } = productObj
    const { decreaseQty, deleteFromCart, increaseQty } = useCart()
    const { addToWishList,  wishlistItems  } = useWishlist()

    const isProductInWishList = wishlistItems.findIndex(p => p._id === productObj._id) === -1 ? false : true

    const saveToWishList = (productObj) => {
        isProductInWishList ? toast("Already Present") : addToWishList(productObj)
    }

    const decreaseQtyHandler = (_id,qty) => {
        qty <= 1 ? deleteFromCart(_id) : decreaseQty(_id)
    }

    return (
        <div className={CardCSS.productcard__container}>
            <div className="width-2xl height-2xl padding-xs">
                <img
                    className="img-responsive"
                    src={image}
                    alt="winter_coat"
                />
            </div>
            <div className="card-description padding-xs">
                <h3 className={CardCSS.product__title}>{name}</h3>
                <p className={CardCSS.product__description}>{description}</p>
                <div className="d-flex">
                    <p className={CardCSS.discount__price}>Rs.{discountedPrice.toLocaleString("en-IN")}</p>
                    <p className={CardCSS.product__price}>Rs.{originalPrice.toLocaleString("en-IN")}</p>
                </div>
                {
                  isOrderSummary ? 
                        <div className="d-flex margin-xs">
                            Quantity: <p className={CardCSS.quantity__number}>{qty}</p>
                        </div>:
                    <div className="d-flex">
                        <p className={CardCSS.discount__percentage}>{discount}% off</p>
                        <div>
                            Quantity:
                            <button className={CardCSS.quantity__btn} onClick={() => decreaseQtyHandler(_id,qty)}>-</button>
                            <p className={CardCSS.quantity__number}>{qty}</p>
                            <button className={CardCSS.quantity__btn} onClick={() => increaseQty(_id)}>+</button>
                        </div>
                    </div>
                }
                {
                    isCartPage && 
                    <div className={CardCSS.button__container}>
                        <button  
                            className="btn btn-primary head-sm" onClick={() => deleteFromCart(_id)}>
                            Remove from Cart
                        </button>
                        <button 
                            className="btn btn-secondary head-sm" onClick={() => saveToWishList(productObj)}>
                            Move to Wishlist
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default CartCard