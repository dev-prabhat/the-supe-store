import { useAuth } from "../../Context"
import { ProfileNav } from "../../components"
import "./profile.css"

export const Profile = () => {
    const { loggedUser : {firstName,lastName, email} , logoutHandler} = useAuth()
   
    return(
       <main className="profile-page">
        <ProfileNav/>
           
           <div className="profile-details margin-xs padding-xs">
              <h1 className="head-sm margin-xs">Name: {`${firstName} ${lastName}`}</h1>
              <h3 className="head-sm margin-xs">Email: {`${email}`} </h3>
              <button className="btn btn-secondary head-sm margin-xs" onClick={logoutHandler}>Logout</button>
           </div>
       </main>
    )
}