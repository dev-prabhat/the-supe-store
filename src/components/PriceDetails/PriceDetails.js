import { Link } from "react-router-dom"
import { useCart } from "../../Context"
import PriceDetailsCSS from "./priceDetails.module.css"

export const PriceDetails = ({isCheckoutPage = false}) => {
    const {cartItems} = useCart()

    const initialState = {
        originalPrice: 0,
        qty: 0,
        delivery: 0,
        discount: 0
    }

    const checkout = cartItems.reduce((acc, currentProduct) => ({
        ...acc,
        qty: acc.qty + currentProduct.qty,
        originalPrice: acc.originalPrice + currentProduct.originalPrice * currentProduct.qty,
        delivery:acc.delivery + currentProduct.delivery * currentProduct.qty,
        discount: acc.discount + (currentProduct.originalPrice - currentProduct.discountedPrice) * currentProduct.qty
    }), initialState)


    return(
        <>
           <h3 className={PriceDetailsCSS.price__heading}>Price Details</h3>
            <div className={PriceDetailsCSS.price}>
                <p className={PriceDetailsCSS.price__title}>Price</p>
                <span>Rs.{checkout.originalPrice}</span>
            </div>
            <div className={PriceDetailsCSS.discount}>
                <p className={PriceDetailsCSS.discount__title}>Discount</p>
                <span>-Rs{checkout.discount}</span>
            </div>
            <div className={PriceDetailsCSS.delivery}>
                <p className={PriceDetailsCSS.delivery__title}>Delivery Charges</p>
                <span>Rs{checkout.delivery}</span>
            </div>
            <div className={PriceDetailsCSS.total}>
                <h3 className="head-md">Total Amount</h3>
                <span>Rs{checkout.originalPrice - checkout.discount + checkout.delivery}</span>
            </div>
            {
                isCheckoutPage ? 
                <button className={PriceDetailsCSS.order__btn}>
                    Place Order
                </button> :
                <Link to="/checkout" className={PriceDetailsCSS.order__btn}>
                    Checkout
                </Link>
            }
            
        </>
    )
}