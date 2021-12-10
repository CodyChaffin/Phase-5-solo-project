import { useState } from "react"
import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm"


function LoginSignup({setCurrentUser}){
    const [signUp, setSignUp]= useState(false)
    return(
        <>
            <h1 className='logIn'>Create an account or Log In to continue</h1>
            {signUp ? null:<LoginForm setCurrentUser={setCurrentUser}/>}
            <button onClick={()=>setSignUp(!signUp)}> {signUp ? "Login":"Sign Up Instead"}</button>
            {signUp ? <SignUpForm setCurrentUser={setCurrentUser}/> : null}
        </>
    )
}

export default LoginSignup