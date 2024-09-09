import React,{useContext,useState} from "react";
import UserContext from "../context/userContext";
import "./login.css";

function Login(){
    const [email ,setEmail] = useState('');
    const [username ,setUsername] = useState('');
    const [password , setpassword] = useState('');
    const {setUser} = useContext(UserContext)

  const handleSubmit = (e) =>{
       e.preventDefault()
       setUser({username,email,password})
  }
    return (
        <div className="login-main">
            <div className="container">
            <div className="login-main1">
                <h3>
                    Welcome Back!
                </h3>
                <input type="text" placeholder="Name" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <button onClick={handleSubmit}>Submit</button>
                
            </div>
            </div>
        </div>
    )
}

export default Login;