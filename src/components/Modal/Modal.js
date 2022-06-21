import { useRef } from 'react';
import ReactDOM from 'react-dom';
import "./modal.css"

export const Modal = ({children,isModal,setIsModal}) => {
    const modalRef = useRef(null)

    if(!isModal) return null

    return ReactDOM.createPortal(
        <div ref={modalRef} className="modal-wrapper" onClick={()=>setIsModal(prev => !prev)}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>, document.getElementById("portal")
    )
}