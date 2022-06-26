import { useAddress ,useModal} from "../../Context"
import AddressCardCSS from "./addressCard.module.css"

export const  AddressCard = ({address}) => {
   const {deleteAddress,setEditAddressData} = useAddress()
   const {setEditAddressModal} = useModal()
   const {name,mobileNumber,postalCode,house,city,state} = address


   const openEditModal = () => {
      setEditAddressData(address)
      setEditAddressModal(prev => !prev)
   }

   return(
      <div className={AddressCardCSS.address__card}>
         <h1 className="head-sm margin-xs">{`${name} ${mobileNumber}`}</h1>
         <p className="head-sm margin-xs">{`${house} ${city} ${state} ${postalCode}`}</p>
         <button 
            onClick={()=>deleteAddress(address)} 
            className="btn btn-secondary head-sm margin-sm">
            Delete
         </button>
         <button 
            onClick={()=>openEditModal()} 
            className="btn btn-primary head-sm margin-sm">
            Edit
         </button>
      </div>
   )
}