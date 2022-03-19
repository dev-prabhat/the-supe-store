import React from "react"
import { CartCard } from "../../components"
import { useCart } from "../../Context/Cart-Context"
import "./cart.css"

const Cart = () => {
    const { cartState } = useCart()
    const { cartItems } = cartState
    return (
        <div className="grid-container">
            <section className="content padding-md">
                {
                    cartItems.length > 0 ? cartItems.map((product) => (
                        <CartCard product={product} />
                    )) : <div>Cart is Empty</div>
                }
            </section>

            <section className="cart-section padding-md">
                <div className="cart-description margin-md padding-md">
                    <h3 className="head-md">Price Details</h3>
                    <div className="d-flex">
                        <p className="text-sm">Price(2 items)</p>
                        <span className="marginL">Rs.4000</span>
                    </div>
                    <div className="d-flex">
                        <p className="text-sm">Discount</p>
                        <span className="marginL">-Rs1999</span>
                    </div>
                    <div className="d-flex">
                        <p className="text-sm">Delivery Charges</p>
                        <span className="marginL">Rs499</span>
                    </div>
                    <div className="d-flex">
                        <h3 className="head-md">Total Amount</h3>
                        <span className="marginL">Rs3499</span>
                    </div>
                    <button className="btn btn-primary d-100 text-sm">Place Order</button>
                </div>
            </section>
        </div>
    )
}

export default Cart