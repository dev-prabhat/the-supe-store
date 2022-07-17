import { useModal , useAddress} from "../../Context";
import { ProfileNav , AddressCard, InputAddressModal,EditAddressModal} from "../../components"
import {useDocument } from "../../customHooks"
import { MdAdd } from "react-icons/md";
import AddressCSS  from "./address.module.css"

export const Address = () => {
   useDocument("Address")
   const {addressArray} = useAddress()
   const {setIsModal} = useModal()
   
   return(
      <main className={AddressCSS.grid__container}>
      <ProfileNav/>
         
         <div className={AddressCSS.address__wrapper}>
            <h1 className="head-md margin-sm">Manage Addresses</h1>
            <div className={AddressCSS.address__div} onClick={()=>setIsModal(prev => !prev)}>
               <MdAdd className={AddressCSS.add__address}/>
               <p className="head-sm margin-xs">Add New Address</p>
            </div>
               {
                  addressArray.length === 0 ?
                  <div className="text-center padding-md">
                     <h1 className="head-lg font-weight-bold">No Address Found</h1>
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
         <InputAddressModal/>
         <EditAddressModal/>
      </main>
   )
}