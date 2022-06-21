import { NavLink } from "react-router-dom"
import { useAuth } from "../Context"

export const ProfileNav = () =>{
    const {loggedUser:{firstName}} = useAuth()
    return(
        <aside className="aside-nav">
            <div className="profile padding-sm margin-xs">
                <div className="avatar avatar-sm">
                    <img
                        className="img-responsive img-round"
                        src={process.env.PUBLIC_URL + "/svg/avatarIcon.svg"}
                        alt="avatar"
                    />
                </div>
                <div className="margin-xs">
                    <h1 className="head-sm">Hello , Welcome</h1>
                    <p className="head-sm">{firstName}</p>
                </div>
            </div>
            <div className="profilenav-wrapper margin-xs">
                <NavLink className="btn btn-primary btn-link d-block head-sm margin-xs" to="/profile">
                    Profile
                </NavLink>
                <NavLink className="btn btn-primary btn-link d-block head-sm margin-xs" to="/address">
                    Address
                </NavLink>
                <NavLink className="btn btn-primary btn-link d-block head-sm margin-xs" to="/order">
                    Order
                </NavLink>
            </div>
        </aside>
    )
}