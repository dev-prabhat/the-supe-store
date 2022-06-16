import React, { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"
import axios from "axios"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(undefined)


    useEffect(() => {
        if (localStorage.getItem("token"))
            setToken(localStorage.getItem("token"))
    }, [])

    const signupUser = async (newUser) => {
        try {
            const response = await axios.post("/api/auth/signup", {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: newUser.password
            })
            localStorage.setItem("token", response.data.encodedToken)
            setToken(localStorage.getItem("token"))
        }
        catch (e) {
            toast(e.response.data.errors[0])
        }
    }

    const loginUser = async (user) => {
        try {
            const response = await axios.post("/api/auth/login", {
                email: user.email,
                password: user.password
            })
            localStorage.setItem("token", response.data.encodedToken)
            setToken(localStorage.getItem("token"))
            toast("Logged In")
        }
        catch (e) {
            toast.error(e.response.data.errors[0])
        }
    }

    const logoutHandler = () => {
        setToken(undefined)
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ signupUser, token, logoutHandler, loginUser }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }