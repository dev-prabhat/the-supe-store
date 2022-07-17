import { CartCard, PriceDetails } from "../../components"
import { useCart } from "../../Context"
import {useDocument } from "../../customHooks"
import CartCSS from  "./cart.module.css"


const Cart = () => {
    useDocument("Cart")
    const { cartItems } = useCart()
    
    return (
        <>
            {
                cartItems.length > 0 ? <main className={CartCSS.grid__container}>
                    <section className={CartCSS.products__container}>
                            <h1 className={CartCSS.mycart}>MyCart({cartItems.length})</h1>
                        {
                            cartItems.length > 0 && cartItems.map((productObj) => (
                                <CartCard key={productObj._id} productObj={productObj} isCartPage={true}/>
                            ))
                        }
                    </section>
                    <section className={CartCSS.price__section}>
                        <div className={CartCSS.price__description}>
                            <PriceDetails/>
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