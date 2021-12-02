import { useState } from "react"


function NewRecipeForm({isVisible, setIsVisible}){
    const [directionsArray, setDirectionsArray] = useState([])
    // const [ingredientsArray, setIngredientsArray] = useState([])
    const [direction,setdirection]=useState('')
    
    function storeDirections(e){
        // debugger
        // e.preventDefault();
        console.log(e)
        setDirectionsArray(directionsArray, ...direction)
    }
    
    function stopForm(e){
        e.preventDefault();
        setIsVisible(!isVisible)
    }
    return(
        <>
       {/* <form id= 'recipe/ingredients'> */}
            <form id='directions'>
            <input type='text' placeholder='directions' value={direction} onChange={(e)=>setdirection(e.target.value)}></input>
            <button onClick={(e)=>storeDirections(e)}>Add New Direction</button>
            </form>
            <form id='ingredients'>
            <input placeholder='ingredients'></input>
            <button>Add New Ingredient</button>
            </form>
            <input placeholder='whole form'></input>
        {/* </form> */}
        <button onClick={(e)=> stopForm(e)}>Hide New Recipe Form</button> 
        </>
    )
}

export default NewRecipeForm