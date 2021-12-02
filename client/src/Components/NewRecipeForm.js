import { useState } from "react"


function NewRecipeForm({isVisible, setIsVisible, setRecipes, recipes}){
    const [directionsArray, setDirectionsArray] = useState([])
    const [ingredientsArray, setIngredientsArray] = useState([])
    const [direction,setDirection]=useState('')
    const [ingredient, setIngredient] = useState('')
    const [recipeName, setRecipeName] = useState('')
    const [imgUrl, setImgUrl]= useState('')
    const [origin, setOrigin]= useState('')
    
    function addDirection(e){
        e.preventDefault()
        setDirectionsArray([...directionsArray, direction])
        setDirection('')
    }

    function addIngredient(e){
        e.preventDefault()
        setIngredientsArray([...ingredientsArray, ingredient])
        setIngredient('')
    }

    
    function showForm(e){
        e.preventDefault();
        setIsVisible(!isVisible)
    }



    function handleSubmit(e){
        e.preventDefault()

        const newRecipe = {
            directions: directionsArray,
            image_url: imgUrl,
            name: recipeName,
            origin: origin
        }
        const recipeOptions={
            headers : {'Content-Type': 'application/json'},
            method : "POST",
            body : JSON.stringify(newRecipe)
        }
        fetch('/recipes', recipeOptions)
        .then(res=>res.json())
        .then(newRec=> setRecipes(...recipes, newRec))
    }
    
    return(
        <div>
            <form>
                <input type='text' placeholder="Recipe Name" value={recipeName} onChange={(e)=>setRecipeName(e.target.value)}></input>
                <input type='text' placeholder='upload image' value={imgUrl} onChange={e=>setImgUrl(e.target.value)}></input>
                <form id='directions'>
                    <input type='text' placeholder='direction' value={direction} onChange={(e)=>setDirection(e.target.value)}></input>
                    <button type="submit" onClick={(e)=>addDirection(e)}>Next Direction</button>
                </form>
               
                <input type='text' value={origin} placeholder='What kind of dish is it' onChange={(e)=>setOrigin(e.target.value)}></input>
                <button type='submit' onClick={(e)=>handleSubmit(e)}>Add Recipe</button>   
            </form> 
            <form id='ingredients'>
                    <input type='text' value={ingredient} placeholder='ingredients' onChange={e=>setIngredient(e.target.value)}></input>
                    <button type='submit' onClick={(e)=>addIngredient(e)}>Add New Ingredient</button>
                </form>
            <button onClick={(e)=> showForm(e)}>Hide New Recipe Form</button> 
        </div>
    )
}

export default NewRecipeForm