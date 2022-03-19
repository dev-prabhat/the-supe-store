import React from "react"
import "./cart.css"

const Cart = () => {
    return (
        <div className="grid-container">
            <section class="content padding-md">
                <div class="card-container d-flex margin-md">
                    <div class="width-2xl height-lg padding-xs">
                        <img
                            class="img-responsive"
                            src="/assests/Images/winter-collection-min.jpg"
                            alt="winter_coat"
                        />
                    </div>
                    <div class="card-description padding-xs">
                        <h3 class="card-title head-lg">Winter Coats</h3>
                        <div class="d-flex">
                            <p class="text-md font-weight-black">Rs.2000</p>
                            <p class="text-sm text-strike-through  text-gray marginL">Rs.3999</p>
                        </div>
                        <div class="d-flex">
                            <p class="text-md text-gray">50% off</p>
                            <p class="marginL">
                                Quantity:
                                <button class="quantity-btn border-radius-sm">+</button>
                                <p class="quantity-number text-center d-inline_block">1</p>
                                <button class="quantity-btn border-radius-sm">-</button>
                            </p>
                        </div>
                        <button type="button" class="btn btn-primary head-sm">
                            Remove from Cart
                        </button>
                        <button type="button" class="btn btn-secondary head-sm">
                            Move to Wishlist
                        </button>
                    </div>
                </div>
            </section>

            <section class="cart-section padding-md">
                <div class="cart-description margin-md padding-md">
                    <h3 class="head-md">Price Details</h3>
                    <div class="d-flex">
                        <p class="text-sm">Price(2 items)</p>
                        <span class="marginL">Rs.4000</span>
                    </div>
                    <div class="d-flex">
                        <p class="text-sm">Discount</p>
                        <span class="marginL">-Rs1999</span>
                    </div>
                    <div class="d-flex">
                        <p class="text-sm">Delivery Charges</p>
                        <span class="marginL">Rs499</span>
                    </div>
                    <div class="d-flex">
                        <h3 class="head-md">Total Amount</h3>
                        <span class="marginL">Rs3499</span>
                    </div>
                    <button class="btn btn-primary d-100 text-sm">Place Order</button>
                </div>
            </section>
        </div>
    )
}

export default Cart