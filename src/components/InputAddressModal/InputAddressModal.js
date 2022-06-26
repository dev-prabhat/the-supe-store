import { useState } from "react"
import { useAddress, useModal } from "../../Context"
import { Modal } from "../Modal/Modal"
import "./inputAddressModal.css"

export const InputAddressModal = () => {
    const {putAddress} = useAddress()
    const initialData = {
      name:"",
      mobileNumber:"",
      postalCode:"",
      house:"",
      city:"",
      state:""
     }
    const [addressValue, setAddressValue] = useState(initialData)
    const {setIsModal,isModal} = useModal()

    const addressHandler = (e) => {
        e.preventDefault()
        putAddress(addressValue)
        setAddressValue(initialData)
        setIsModal(prev => !prev)
    }
    return(
        <Modal isModal={isModal} setIsModal={setIsModal}>
            <form onSubmit={addressHandler}>
               <input
                  type="text"
                  class="form-field border-radius-xs padding-xs"
                  placeholder="name"
                  onChange={(e)=>setAddressValue(prev => ({...prev,name:e.target.value}))}
                  value={addressValue.name}
                  required
               />
            
               <input
                  type="text"
                  class="form-field border-radius-xs padding-xs"
                  placeholder="mobile number"
                  onChange={(e)=>setAddressValue(prev => ({...prev,mobileNumber:e.target.value}))}
                  value={addressValue.mobileNumber}
                  required
               />

               <input
                  type="text"
                  class="form-field border-radius-xs padding-xs"
                  placeholder="PIN number"
                  onChange={(e)=>setAddressValue(prev => ({...prev,postalCode:e.target.value}))}
                  value={addressValue.postalCode}
                  required
               />

               <input
                  type="text"
                  class="form-field border-radius-xs padding-xs"
                  placeholder="Street No."
                  onChange={(e)=>setAddressValue(prev => ({...prev,house:e.target.value}))}
                  value={addressValue.house}
                  required
               />

               <input
                  type="text"
                  class="form-field border-radius-xs padding-xs"
                  placeholder="city"
                  onChange={(e)=>setAddressValue(prev => ({...prev,city:e.target.value}))}
                  value={addressValue.city}
                  required
               />

               <input
                  type="text"
                  class="form-field border-radius-xs padding-xs"
                  placeholder="state"
                  onChange={(e)=>setAddressValue(prev => ({...prev,state:e.target.value}))}
                  value={addressValue.state}
                  required
               />
               <button className="btn btn-primary form__btn d-100">Submit</button>
            </form>
            <button
                  onClick={()=>setAddressValue({
                     name:"Prabhat Singh",
                     mobileNumber:"8956325326",
                     postalCode:"220121",
                     house:"K 25/25 Maya Bazar",
                     city:"Varanasi",
                     state:"Uttar Pradesh"
                  })} 
                  className="btn btn-secondary form__btn d-100">
                  Dummy data
            </button>
         </Modal>
    )
}