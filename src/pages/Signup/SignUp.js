import { useState } from "react"
import { useAuth } from "../../Context"
import { Link } from "react-router-dom"
import { BiHide,BiShow } from "react-icons/bi";
import { useDocument } from "../../customHooks"
import SignupCSS from  "./signup.module.css"

export const SignUp = () => {
    useDocument("Signup")
    const [isVisible, setIsVisible] = useState(false)
    const [newUser, setNewUser] = useState({firstName:"",lastName:"",email:"",password:""})
    const { signupUser } = useAuth()

    const signupHandler = (e) => {
        e.preventDefault()
        if(newUser.firstName.trim() === "" &&
           newUser.lastName.trim() === "" &&
           newUser.email.trim() === "" && 
           newUser.password.trim() === "") return alert("Enter Credentials ...")
        signupUser(newUser)
    }
    return (
        <main className={SignupCSS.signuppage}>
            <form className={SignupCSS.signupform__container} onSubmit={signupHandler}>
                <h2 className="head-lg text-center">SignUp</h2>
                <label className="form-label text-sm">FirstName: </label>
                <input
                    type="text"
                    className="form-field border-radius-xs padding-xs"
                    placeholder="john"
                    required
                    value={newUser.firstName}
                    onChange={(e) => setNewUser(prev => ({ ...prev, firstName: e.target.value }))}
                />

                <label  className="form-label text-sm">LastName: </label>
                <input
                    type="text"
                    className="form-field border-radius-xs padding-xs text-4"
                    placeholder="doe"
                    required
                    value={newUser.lastName}
                    onChange={(e) => setNewUser(prev => ({ ...prev, lastName: e.target.value }))}
                />

                <label className="form-label text-sm">Email Address: </label>
                <input
                    type="email "
                    className="form-field border-radius-xs padding-xs"
                    placeholder="name@gmail.com"
                    required
                    value={newUser.email}
                    onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                />

                <div className="position-rel">
                    <label  className="form-label text-sm">Password: </label>
                    <input
                        type={isVisible ? "text" : "password"}
                        className="form-field border-radius-xs padding-xs text-4"
                        placeholder="***********"
                        required
                        value={newUser.password}
                        onChange={(e) => setNewUser(prev => ({ ...prev, password: e.target.value }))}
                    />
                    {
                        isVisible ? 
                        <BiHide className={SignupCSS.hide__icon} onClick={() => setIsVisible(prev => !prev)}/>:
                        <BiShow className={SignupCSS.show__icon} onClick={() => setIsVisible(prev => !prev)}/>
                    }
                </div>

                <div className="margin-xs">
                    <input id="conditions" type="checkbox" />
                    <label
                        htmlFor="conditions"
                        className="form-label padding-xs">
                        I accept all Terms & Conditions
                    </label>
                </div>

                <button className="btn btn-primary d-100 head-sm">
                    Create New Account
                </button>


                <Link to="/login" className="btn-link d-inline_block d-100">
                    <p className="text-center">Already have an Account</p>
                </Link>
            </form>
        </main>
    )
}