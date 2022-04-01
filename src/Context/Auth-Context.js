import React, { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", password: "" })
    const [user, setUser] = useState({ email: "adarshbalka@gmail.com", password: "adarshbalka" })
    const [token, setToken] = useState("")
    let navigate = useNavigate()


    useEffect(() => {
        if (localStorage.getItem("token"))
            setToken(JSON.stringify(localStorage.getItem("token")))
    }, [])

    const signupHandler = async (newUser) => {
        try {
            const response = await axios.post("/api/auth/signup", {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: newUser.password
            })
            localStorage.setItem("token", response.data.encodedToken)
            setToken(JSON.stringify(localStorage.getItem("token")))
            navigate("/product", { replace: true })
            setNewUser({ firstName: "", lastName: "", email: "", password: "" })
        }
        catch (e) {
            toast(e.response.data.errors[0])
            setNewUser({ firstName: "", lastName: "", email: "", password: "" })
        }
    }

    const loginHandler = async () => {
        try {
            const response = await axios.post("/api/auth/login", {
                email: "adarshbalka@gmail.com",
                password: "adarshbalka"
            })
            localStorage.setItem("token", response.data.encodedToken)
            setToken(JSON.stringify(localStorage.getItem("token")))
            toast("Logged In")
            navigate("/product", { replace: true })
        }
        catch (e) {
            toast.error(e.response.data.errors[0])
        }
    }

    const logoutHandler = () => {
        setToken("")
        localStorage.removeItem("token")
        navigate("/login", { replace: true })
    }

    return (
        <AuthContext.Provider value={{ newUser, setNewUser, user, setUser, signupHandler, token, logoutHandler, loginHandler }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }