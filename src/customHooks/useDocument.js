import { useEffect } from "react"

export const useDocument = (prop) => {
    useEffect(()=>{
      document.title = `SupeStore | ${prop}`   
    })
}