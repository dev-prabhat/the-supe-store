import { Navigate , Outlet , useLocation} from "react-router-dom"
import { useAuth } from "../Context/Auth-Context"

export const PrivateRoute = () => {
    const {token} = useAuth()
    const location = useLocation()

    return token ? (
    <Outlet/> 
    ): ( 
    <Navigate to="/login" state={{from:location}} replace/> 
    ) 
} 