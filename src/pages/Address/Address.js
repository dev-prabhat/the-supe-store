import { useModal , useAddress} from "../../Context";
import { ProfileNav , AddressCard, InputAddressModal,EditAddressModal} from "../../components"
import { MdAdd } from "react-icons/md";
import "./address.css"

export const Address = () => {
   const {addressArray} = useAddress()
   const {setIsModal} = useModal()
   
   return(
      <main className="address-page">
      <ProfileNav/>
         
         <div className="address-wrapper margin-xs padding-xs">
            <h1 className="head-md margin-sm">Manage Addresses</h1>
            <div className="address-div" onClick={()=>setIsModal(prev => !prev)}>
               <MdAdd className="add-address-icon margin-xs"/>
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