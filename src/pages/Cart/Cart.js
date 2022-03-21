import React from "react"
import { CartCard } from "../../components"
import { useCart } from "../../Context/Cart-Context"
import empty_cart from "../../assests/svg/empty-box.svg"
import "./cart.css"


const Cart = () => {
    const { cartState } = useCart()
    const { cartItems } = cartState

    const initialState = {
        price: 0,
        qty: 0,
        deliveryCost: 0,
        discount: 0
    }

    const checkout = cartItems.reduce((acc, currentProduct) => ({
        ...acc,
        qty: acc.qty + currentProduct.qty,
        price: acc.price + currentProduct.price * currentProduct.qty
    }), initialState)



    return (
        <>
            {
                cartItems.length > 0 ? <div className="cartpage-grid-container">
                    <section className="content padding-md">
                        {
                            cartItems.length > 0 && cartItems.map((product) => (
                                <CartCard product={product} />
                            ))
                        }
                    </section>
                    <section className="cart-section padding-md">
                        <div className="cart-description margin-md padding-md">
                            <h3 className="head-md">Price Details</h3>
                            <div className="d-flex">
                                <p className="text-sm">Price</p>
                                <span className="marginL">Rs.{checkout.price}</span>
                            </div>
                            <div className="d-flex">
                                <p className="text-sm">Discount</p>
                                <span className="marginL">Rs{checkout.discount}</span>
                            </div>
                            <div className="d-flex">
                                <p className="text-sm">Delivery Charges</p>
                                <span className="marginL">Rs{checkout.deliveryCost}</span>
                            </div>
                            <div className="d-flex">
                                <h3 className="head-md">Total Amount</h3>
                                <span className="marginL">Rs{checkout.price - checkout.discount + checkout.deliveryCost}</span>
                            </div>
                            <button className="btn btn-primary d-100 text-sm">Place Order</button>
                        </div>
                    </section>
                </div> :
                    <div className="empty-cart" >
                        <img className="img-responsive" src={empty_cart} alt="empty_cart" />
                    </div>
            }
        </>
    )
}

export default Cart