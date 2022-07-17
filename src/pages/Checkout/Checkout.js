import { useModal , useAddress , useCart} from "../../Context";
import { AddressCard, InputAddressModal, EditAddressModal, PriceDetails} from "../../components";
import {useDocument } from "../../customHooks"
import { MdAdd } from "react-icons/md";
import CheckoutCSS from "./checkout.module.css"


export const Checkout = () => {
    useDocument("Checkout")
    const {addressArray} = useAddress()
    const {setIsModal} = useModal()
    const {cartItems} = useCart()

    return(
        <main className={CheckoutCSS.grid__container}>
            <section className={CheckoutCSS.order__summary__section}>
            <div className={CheckoutCSS.order__summary}>
                    <h1 className="head-md text-center font-weight-bold">Order Summary</h1>
                       <div className={CheckoutCSS.product}>
                            <p className="head-sm font-weight-semibold">Name</p>
                            <p className="head-sm font-weight-semibold">qty</p>
                        </div>
                    <ul>  
                        {
                            cartItems.map(item => (
                                <li key={item.name} className={CheckoutCSS.product}>
                                    <p className="head-sm font-weight-semibold">{item.name}</p>
                                    <p className="head-sm font-weight-semibold">{item.qty}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={CheckoutCSS.address__details}>
                    <h1 className="head-md text-center margin-xs">Manage Addresses</h1>
                    <div className={CheckoutCSS.address__div} onClick={()=>setIsModal(prev => !prev)}>
                        <MdAdd className={CheckoutCSS.add__address}/>
                         <p className="head-sm margin-xs">Add New Address</p>
                    </div>
                    {
                        addressArray.length === 0 ?
                        <div className="text-center padding-sm">
                            <h1 className="head-md font-weight-bold">No Address Found</h1>
                        </div> :
                        <div>
                            {
                                addressArray.map(address => (
                                <AddressCard key={address._id} address={address}/>
                                ))
                            }
                        </div>
                    }
                </div>
            </section>
            <section className={CheckoutCSS.checkout__section}>
                <div className={CheckoutCSS.checkout__details}>
                    <PriceDetails isCheckoutPage={true}/>
                </div>
            </section>
            <InputAddressModal/>
            <EditAddressModal/>
        </main>
    )
}