import { useState } from "react";
import { useNavigate } from "react-router";


function SignUpForm({setCurrentUser}){
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();

    const handleSignUp = (e)=>{
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ name, email, password})
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
        <form onSubmit={handleSignUp}>
            <input type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
            <input type="submit"/>
        </form>
    )
}

export default SignUpForm