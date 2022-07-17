import React, { createContext, useContext, useState, useEffect } from "react"
import { useAxios } from "../customHooks/useAxios"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(undefined)
    const [loggedUser, setLoggedUser] = useState(null)
    const {response,loading:authLoader, operation} = useAxios()

    useEffect(() => {
        if (localStorage.getItem("token")) setToken(localStorage.getItem("token"))
        if (localStorage.getItem("loggedUser")) setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
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
        setLoggedUser(null)
        localStorage.clear()
    }

    useEffect(()=>{
        if(response !== undefined){
            localStorage.setItem("token",response.encodedToken)
            if(response.foundUser){
                localStorage.setItem("loggedUser",JSON.stringify(response.foundUser))
                setLoggedUser(response.foundUser)
            } 
            if(response.createdUser){
                localStorage.setItem("loggedUser",JSON.stringify(response.createdUser))
                setLoggedUser(response.createdUser)
            }  
            setToken(response.encodedToken)
        }
    },[response])


    return (
        <AuthContext.Provider value={{ signupUser, token, logoutHandler, loggedUser, loginUser,authLoader }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }