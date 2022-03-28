import React from "react"
import { Link } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    return (
        <main className="main-section d-flex">
            <div className="form-container border-radius-xs padding-sm">
                <h2 className="head-lg text-center">Login</h2>
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
                    className="form-field border-radius-xs padding-xs"
                    placeholder="***********"
                />

                <div className="margin-xs">
                    <input id="remember" type="checkbox" />
                    <label htmlFor="remember" className="form-label padding-xs"> Remember me</label>
                </div>

                <button type="button" className="btn btn-primary d-100 head-sm">
                    Login
                </button>

                <Link to="/signUp" className="btn-link d-inline_block d-100">
                    <p className="text-center">Create New Account</p>
                </Link>
            </div>
        </main>
    )
}