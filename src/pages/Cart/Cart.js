import { CartCard } from "../../components"
import { useCart } from "../../Context"
import CartCSS from  "./cart.module.css"


const Cart = () => {
    const { cartItems } = useCart()

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

    
    return (
        <>
            {
                cartItems.length > 0 ? <main className={CartCSS.grid__container}>
                    <section className={CartCSS.products__container}>
                            <h1 className={CartCSS.mycart}>MyCart(1)</h1>
                        {
                            cartItems.length > 0 && cartItems.map((productObj) => (
                                <CartCard key={productObj._id} productObj={productObj} />
                            ))
                        }
                    </section>
                    <section className={CartCSS.price__section}>
                        <div className={CartCSS.price__description}>
                            <h3 className={CartCSS.price__heading}>Price Details</h3>
                            <div className={CartCSS.price}>
                                <p className={CartCSS.price__title}>Price</p>
                                <span>Rs.{checkout.originalPrice}</span>
                            </div>
                            <div className={CartCSS.discount}>
                                <p className={CartCSS.discount__title}>Discount</p>
                                <span>-Rs{checkout.discount}</span>
                            </div>
                            <div className={CartCSS.delivery}>
                                <p className={CartCSS.delivery__title}>Delivery Charges</p>
                                <span>Rs{checkout.delivery}</span>
                            </div>
                            <div className={CartCSS.total}>
                                <h3 className="head-md">Total Amount</h3>
                                <span>Rs{checkout.originalPrice - checkout.discount + checkout.delivery}</span>
                            </div>
                            <button className={CartCSS.order__btn}>
                                Place Order
                            </button>
                        </div>
                    </section>
                </main> :
                    <main className={CartCSS.emptygrid__container}>
                        <h1 className="text-center head-xl">Your Cart is Empty</h1>
                    </main>
            }
        </>
    )
}

export default Cart