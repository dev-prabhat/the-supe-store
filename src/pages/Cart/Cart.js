import React from "react"
import { CartCard } from "../../components"
import { useCart } from "../../Context"
import "./cart.css"


const Cart = () => {
    const { cartItems } = useCart()

    const initialState = {
        price: 0,
        qty: 0,
        delivery: 0,
        discount: 0
    }

    const checkout = cartItems.reduce((acc, currentProduct) => ({
        ...acc,
        qty: acc.qty + currentProduct.qty,
        price: acc.price + currentProduct.price * currentProduct.qty,
        delivery:acc.delivery + currentProduct.delivery * currentProduct.qty,
        discount: acc.discount + currentProduct.discount
    }), initialState)

    
    return (
        <>
            {
                cartItems.length > 0 ? <main className="cartpage-grid-container">
                    <section className="content">
                        {
                            cartItems.length > 0 && cartItems.map((productObj) => (
                                <CartCard key={productObj._id} productObj={productObj} />
                            ))
                        }
                    </section>
                    <section className="cart-section">
                        <div className="cart-description padding-sm">
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
                                <span className="marginL">Rs{checkout.delivery}</span>
                            </div>
                            <div className="d-flex">
                                <h3 className="head-md">Total Amount</h3>
                                <span className="marginL">Rs{checkout.price - checkout.discount + checkout.delivery}</span>
                            </div>
                            <button className="btn btn-primary d-100 text-sm">Place Order</button>
                        </div>
                    </section>
                </main> :
                    <main className="empty-cart">
                        <h1 className="text-center head-xl">Your Cart  is Empty</h1>
                    </main>
            }
        </>
    )
}

export default Cart