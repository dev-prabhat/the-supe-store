import { useRef } from 'react';
import ReactDOM from 'react-dom';
import ModalCSS from "./modal.module.css"

export const Modal = ({children,isModal,setIsModal}) => {
    const modalRef = useRef(null)

    if(!isModal) return null

    return ReactDOM.createPortal(
        <div ref={modalRef} className={ModalCSS.modal__wrapper} onClick={()=>setIsModal(prev => !prev)}>
            <div className={ModalCSS.modal__content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>, document.getElementById("portal")
    )
}