import React from "react"
import { Link } from "react-router-dom"
import "./SignUp.css"

export const SignUp = () => {
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
                />

                <label id="last_name" className="form-label text-sm">LastName: </label>
                <input
                    htmlFor="last_name"
                    type="text"
                    className="form-field border-radius-xs padding-xs text-4"
                    placeholder="doe"
                    required
                />

                <label id="email_address" className="form-label text-sm">Email Address: </label>
                <input
                    htmlFor="email_address"
                    type="email "
                    className="form-field border-radius-xs padding-xs"
                    placeholder="name@gmail.com"
                    required
                />

                <label id="password" className="form-label text-sm">Password: </label>
                <input
                    htmlFor="password"
                    type="password"
                    className="form-field border-radius-xs padding-xs text-4"
                    placeholder="***********"
                    required
                />

                <div className="margin-xs">
                    <input id="conditions" type="checkbox" />
                    <label
                        htmlFor="conditions"
                        className="form-label padding-xs">
                        I accept all Terms & Conditions
                    </label>
                </div>

                <button type="button" className="btn btn-primary d-100 head-sm">
                    Create New Account
                </button>


                <Link to="/login" className="btn-link d-inline_block d-100">
                    <p className="text-center">Already have an Account</p>
                </Link>
            </div>
        </main>
    )
}