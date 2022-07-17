import { Link, useNavigate } from "react-router-dom"
import {toast} from "react-toastify"
import { useCart ,useAddress} from "../../Context"
import PriceDetailsCSS from "./priceDetails.module.css"

export const PriceDetails = ({isCheckoutPage = false}) => {
    const {addressArray} = useAddress()
    const {cartItems, clearCart} = useCart()
    const navigate = useNavigate()
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

    const loadScript = (src) => {
        return new Promise((resolve)=>{
            const script = document.createElement("script")
            script.src = src

            script.onload = ()=>{
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }

    const placeOrder = async (amount) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if(addressArray.length === 0 ) return  toast("Enter shipping address...")

        if(!res) {
            alert("Please check your internet connection...")
        }

        const options = {
            key: "rzp_test_Y4RSrTkVu0YoNb",
            currency: "INR",
            amount: amount * 100,
            name: "SupeStore",
            description: "Thanks for purchasing",
      
            handler: function () {
              clearCart()
              navigate("/order")
            },
            prefill: {
              name: "Prabhat Singh",
              email: "singhprabhat007@gmail.com",
              contact: "9758622359",
            },
          };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

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
                <button 
                    className={PriceDetailsCSS.order__btn} 
                    onClick={()=>placeOrder(checkout.originalPrice - checkout.discount + checkout.delivery)}>
                    Place Order
                </button> :
                <Link to="/checkout" className={PriceDetailsCSS.order__btn}>
                    Checkout
                </Link>
            }
            
        </>
    )
}