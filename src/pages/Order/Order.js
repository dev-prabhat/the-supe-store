import { CartCard, ProfileNav } from "../../components"
import { useCart } from "../../Context"
import OrderCSS from  "./order.module.css"


export const Order = () => {
    const { orderSummaryItems } = useCart()
    
    return (
        <>
            {
                orderSummaryItems.length > 0 ? <main className={OrderCSS.grid__container}>
                    <ProfileNav/>
                    <section className={OrderCSS.products__container}>
                            <h1 className={OrderCSS.order__summary}>Order Summary</h1>
                        {
                            orderSummaryItems.length > 0 && orderSummaryItems.map((productObj) => (
                                <CartCard key={productObj._id} productObj={productObj} isOrderSummary={true}/>
                            ))
                        }
                    </section>
                </main> :
                    <main className={OrderCSS.emptygrid__container}>
                        <h1 className="text-center head-lg">You haven't ordered yet anything</h1>
                    </main>
            }
        </>
    )
}

