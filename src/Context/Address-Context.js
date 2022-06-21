import { createContext,useEffect,useContext, useState} from "react";
import { useAxios } from "../customHooks/useAxios";

const AddressContext = createContext()

const AddressProvider = ({children}) =>{
    const initialData = {
        name:"",
        mobileNumber:"",
        postalCode:"",
        house:"",
        city:"",
        state:""
    }
   const [addressArray,setAddressArray] = useState([])
   const [editAddressData, setEditAddressData] = useState(initialData)
   const {response,operation} = useAxios()

   const putAddress = (address) => {
    const encodedToken = localStorage.getItem("token");
    operation({
        method:"post",
        url:"/api/user/address",
        headers: { "authorization": encodedToken },
        data:{address:address}
    })
   }

   const updateAddress = (editAddressData) => {
    const encodedToken = localStorage.getItem("token");
    operation({
        method:"post",
        url:`/api/user/address/${editAddressData._id}`,
        headers: { "authorization": encodedToken },
        data:{address:editAddressData}
    })
   }

   const deleteAddress = (address) => {
    const encodedToken = localStorage.getItem("token");
    operation({
        method:"delete",
        url:`/api/user/address/${address._id}`,
        headers: { "authorization": encodedToken },
        data:{address:address}
    })
   }

   useEffect(()=>{
    if(response !== undefined){
        setAddressArray(response.address)
    }
   },[response])

   return(
    <AddressContext.Provider 
    value={{putAddress,
    addressArray,
    deleteAddress,
    editAddressData, 
    setEditAddressData,
    updateAddress}}>
        {children}
    </AddressContext.Provider>
   )
}

const useAddress = () => useContext(AddressContext)

export { AddressProvider , useAddress}