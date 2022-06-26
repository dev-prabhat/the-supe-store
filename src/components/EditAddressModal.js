import { useAddress, useModal } from "../Context"
import { Modal } from "./Modal/Modal"


export const EditAddressModal = () => {
   const {editAddressData, setEditAddressData, updateAddress} = useAddress()
   const {editAddressModal, setEditAddressModal} = useModal()

   
   const addressHandler = (e) => {
      e.preventDefault()
      updateAddress(editAddressData)
      setEditAddressModal(prev => !prev)
   }

   return(
      <Modal isModal={editAddressModal} setIsModal={setEditAddressModal}>
            <form onSubmit={addressHandler}>
               <input
                  type="text"
                  className="form-field border-radius-xs padding-xs"
                  placeholder="name"
                  onChange={(e)=>setEditAddressData(prev => ({...prev,name:e.target.value}))}
                  value={editAddressData.name}
                  required
               />
            
               <input
                  type="text"
                  className="form-field border-radius-xs padding-xs"
                  placeholder="mobile number"
                  onChange={(e)=>setEditAddressData(prev => ({...prev,mobileNumber:e.target.value}))}
                  value={editAddressData.mobileNumber}
                  required
               />

               <input
                  type="text"
                  className="form-field border-radius-xs padding-xs"
                  placeholder="PIN number"
                  onChange={(e)=>setEditAddressData(prev => ({...prev,postalCode:e.target.value}))}
                  value={editAddressData.postalCode}
                  required
               />

               <input
                  type="text"
                  className="form-field border-radius-xs padding-xs"
                  placeholder="Street No."
                  onChange={(e)=>setEditAddressData(prev => ({...prev,house:e.target.value}))}
                  value={editAddressData.house}
                  required
               />

               <input
                  type="text"
                  className="form-field border-radius-xs padding-xs"
                  placeholder="city"
                  onChange={(e)=>setEditAddressData(prev => ({...prev,city:e.target.value}))}
                  value={editAddressData.city}
                  required
               />

               <input
                  type="text"
                  className="form-field border-radius-xs padding-xs"
                  placeholder="state"
                  onChange={(e)=>setEditAddressData(prev => ({...prev,state:e.target.value}))}
                  value={editAddressData.state}
                  required
               />

               <button className="btn btn-primary">Update</button>
            </form>
         </Modal>
   )
}