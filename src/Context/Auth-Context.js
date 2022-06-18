import React, { createContext, useContext, useState, useEffect } from "react"
import { useAxios } from "../customHooks/useAxios"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(undefined)
    const {response, operation} = useAxios()

    useEffect(() => {
        if (localStorage.getItem("token"))
            setToken(localStorage.getItem("token"))
    }, [])


    const signupUser = async (newUser) => {
        const {firstName,lastName,email,password} = newUser
        operation({
            method:"POST",
            url:"/api/auth/signup",
            data:{firstName,lastName,email,password}
        })
    }

    const loginUser = async (user) => {
        operation({
            method:"POST",
            url:"/api/auth/login",
            data:{email:user.email,password:user.password}
        })
    }

    const logoutHandler = () => {
        setToken(undefined)
        localStorage.removeItem("token")
    }

    useEffect(()=>{
        if(response !== undefined){
            localStorage.setItem("token",response.encodedToken)
            setToken(response.encodedToken)
        }
    },[response])


    return (
        <AuthContext.Provider value={{ signupUser, token, logoutHandler, loginUser }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }