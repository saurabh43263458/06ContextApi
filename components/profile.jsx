import React from "react";
import UserContext from "../context/userContext";
import { useContext } from "react";

function Profile(){
    const{user} = useContext(UserContext)
     if(!user.username) return <div>please login</div>
     return <div>Welcome {user.username}</div>
}

export default Profile