import { useState } from "react";
import { useNavigate } from "react-router";



function LoginForm({setCurrentUser}){
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

let navigate = useNavigate();
    
    const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            navigate("/home")
          })
        } 
        else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
    }
      
    return(
        <form onSubmit={handleSubmit}>
            <input type = "text" 
            placeholder = "Email" 
            value = {email}   
            onChange={(e)=>setEmail(e.target.value)}/>
            
            <input type = "password" 
            placeholder = "Password" 
            value = {password} 
            onChange={(e)=>setPassword(e.target.value)} />
            <button>Log in</button>
        </form>
    )
}

export default LoginForm