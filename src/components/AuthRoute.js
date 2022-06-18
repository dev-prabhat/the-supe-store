import { Navigate, Outlet , useLocation } from "react-router-dom";
import { useAuth } from "../Context/Auth-Context";

export const AuthRoute = () => {
    const {token} = useAuth()
    const location = useLocation()

    let from = location?.state?.from?.pathname || "/"

    return token ? (
        <Navigate to={from} state={{from:location}} replace/>
    ) : (
        <Outlet/>
    )
}