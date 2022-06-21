import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({children}) => {
    const [isModal , setIsModal] = useState(false)
    const [editAddressModal, setEditAddressModal] = useState(false)
    return(
        <ModalContext.Provider value={{isModal, setIsModal,editAddressModal, setEditAddressModal}}>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = () => useContext(ModalContext)

export { ModalProvider, useModal}