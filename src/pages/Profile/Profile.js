import { useAuth } from "../../Context"
import { ProfileNav } from "../../components"
import { useDocument} from "../../customHooks"
import ProfileCSS from  "./profile.module.css"

export const Profile = () => {
   useDocument("Profile")
   const { loggedUser : {firstName,lastName, email} , logoutHandler} = useAuth()
   
   return(
       <main className={ProfileCSS.grid__container}>
        <ProfileNav/>
           
           <div className={ProfileCSS.profile__details}>
              <h1 className="head-sm margin-xs">Name: {`${firstName} ${lastName}`}</h1>
              <h3 className="head-sm margin-xs">Email: {`${email}`} </h3>
              <button className="btn btn-secondary head-sm margin-xs" onClick={logoutHandler}>Logout</button>
           </div>
       </main>
    )
}