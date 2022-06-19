import { useAuth } from "../../Context"
import "./profile.css"

export const Profile = () => {
    const { loggedUser : {firstName,lastName, email} , logoutHandler} = useAuth()
   
    return(
       <main className="profile-page">
           <button className="btn btn-secondary head-sm logout-btn" onClick={logoutHandler}>Logout</button>
           <div className="profile-container padding-md">
              <h1 className="head-sm margin-xs">FirstName: {`${firstName}`}</h1>
              <h2 className="head-sm margin-xs">LastName: {`${lastName}`}</h2>
              <h3 className="head-sm margin-xs">Email: {`${email}`} </h3>
           </div>
       </main>
    )
}