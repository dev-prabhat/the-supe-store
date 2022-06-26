import React, { useState } from "react"
import { useAuth } from "../../Context"
import { Link } from "react-router-dom"
import { BiHide,BiShow } from "react-icons/bi";
import LoginCSS from  "./login.module.css"

export const Login = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [ user , setUser] = useState({email:"",password:""})
    const { loginUser } = useAuth()

    const loginHandler = (e) => {
        e.preventDefault()
        if(user.email.trim() === "" &&
           user.password.trim() === "") return alert("Enter email and password..")
        loginUser(user)
    }
    return (
        <main className={LoginCSS.loginpage}>
            <form className={LoginCSS.loginform__container} onSubmit={loginHandler}>
                <h2 className="head-lg text-center">Login</h2>
                <label id="email_address" className="form-label text-sm">Email Address: </label>
                <input
                    htmlFor="email_address"
                    type="email "
                    className="form-field border-radius-xs padding-xs"
                    placeholder="name@gmail.com"
                    required
                    value={user.email}
                    onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
                />

                <div className="position-rel">
                    <label id="password" className="form-label text-sm">Password: </label>
                    <input
                        htmlFor="password"
                        type={isVisible ? "text" : "password"}
                        className="form-field border-radius-xs padding-xs"
                        placeholder="***********"
                        required
                        value={user.password}
                        onChange={(e) => setUser(prev => ({ ...prev, password: e.target.value }))}
                    />
                    {
                        isVisible ? 
                        <BiHide className={LoginCSS.hide__icon} onClick={() => setIsVisible(prev => !prev)}/>:
                        <BiShow className={LoginCSS.show__icon} onClick={() => setIsVisible(prev => !prev)}/>
                    }
                </div>

                <div className={LoginCSS.option__container}>
                    <div>
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember" className="padding-xs">Remember me</label>
                    </div>
                    <p className={LoginCSS.highlight} onClick={()=>setUser({email:"singhprabhat007@gmail.com",password:"prabhat007"})}>Test Credentials</p>
                </div>

                <button className="btn btn-primary d-100 head-sm">
                    Login
                </button>

                <Link to="/signUp" className="btn-link d-inline_block d-100">
                    <p className="text-center">Create New Account</p>
                </Link>
            </form>
        </main>
    )
}