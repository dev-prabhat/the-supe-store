import React, { useState } from "react"
import { useAuth } from "../../Context/Auth-Context"
import { Link } from "react-router-dom"
import "./SignUp.css"

export const SignUp = () => {
    const [visible, setVisible] = useState(false)
    const { newUser, setNewUser, signupHandler } = useAuth()

    let disable = ((newUser.firstName.length === 0) || (newUser.lastName.length === 0) || (newUser.email.length === 0) || (newUser.password.length === 0))
    return (
        <main className="main-section d-flex">
            <div className="form-container border-radius-xs padding-sm">
                <h2 className="head-lg text-center">SignUp</h2>
                <label id="first_name" className="form-label text-sm">FirstName: </label>
                <input
                    htmlFor="first_name"
                    type="text"
                    className="form-field border-radius-xs padding-xs"
                    placeholder="john"
                    required
                    value={newUser.firstName}
                    onChange={(e) => setNewUser(prev => ({ ...prev, firstName: e.target.value }))}
                />

                <label id="last_name" className="form-label text-sm">LastName: </label>
                <input
                    htmlFor="last_name"
                    type="text"
                    className="form-field border-radius-xs padding-xs text-4"
                    placeholder="doe"
                    required
                    value={newUser.lastName}
                    onChange={(e) => setNewUser(prev => ({ ...prev, lastName: e.target.value }))}
                />

                <label id="email_address" className="form-label text-sm">Email Address: </label>
                <input
                    htmlFor="email_address"
                    type="email "
                    className="form-field border-radius-xs padding-xs"
                    placeholder="name@gmail.com"
                    required
                    value={newUser.email}
                    onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                />

                <label id="password" className="form-label text-sm">Password: </label>
                <input
                    htmlFor="password"
                    type={visible ? "text" : "password"}
                    className="form-field border-radius-xs padding-xs text-4"
                    placeholder="***********"
                    required
                    value={newUser.password}
                    onChange={(e) => setNewUser(prev => ({ ...prev, password: e.target.value }))}
                />
                <span onClick={() => setVisible(prev => !prev)}>{visible ? "hide" : "show"}</span>

                <div className="margin-xs">
                    <input id="conditions" type="checkbox" />
                    <label
                        htmlFor="conditions"
                        className="form-label padding-xs">
                        I accept all Terms & Conditions
                    </label>
                </div>

                <button
                    type="button"
                    className="btn btn-primary d-100 head-sm"
                    onClick={signupHandler}
                    disabled={disable}>
                    Create New Account
                </button>


                <Link to="/login" className="btn-link d-inline_block d-100">
                    <p className="text-center">Already have an Account</p>
                </Link>
            </div>
        </main>
    )
}