import { useState } from "react"
import RecipeDetails from "./RecipeDetails"


function RecipeCard({rec}){
    const [details, setDetails]= useState(false)
    // console.log(rec)
    return(
        <>
        <h1>{rec.name}</h1>
        <button onClick={()=> setDetails(!details)}>Details</button>
        <img alt={rec.name} style={{width : '250px'}}src= {rec.image_url}/>
        
        {details? <RecipeDetails rec={rec}/>: null}
        </>
    )
}

export default RecipeCard