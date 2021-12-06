import { useState } from "react"


function NewRecipeForm({isVisible, setIsVisible, setRecipes, recipes}){
    const [directionsArray, setDirectionsArray] = useState([])
    const [ingredientsArray, setIngredientsArray] = useState([])
    const [direction,setDirection]=useState('')
    const [ingredient, setIngredient] = useState('')
    const [recipeName, setRecipeName] = useState('')
    const [imgUrl, setImgUrl]= useState('')
    const [origin, setOrigin]= useState('')
    const [amount, setAmount]= useState('')
    const [calories, setCalories]= useState(null)
    const [newId, setNewId] = useState()
    const calNum = Number(calories)
    
    
    

    function addDirection(e){
        e.preventDefault()
        setDirectionsArray([...directionsArray, direction])
        setDirection('')
    }

    

    
    function showForm(e){
        e.preventDefault();
        setIsVisible(!isVisible)
    }



    function handleSubmit(e){
        e.preventDefault()
        setOrigin('')
        setRecipeName('')
        setImgUrl('')
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
        .then(newRec=>{ setRecipes(...recipes, newRec) 
        setNewId(newRec.id)
        })
    }
    
    
    
    function addIngredient(e){
        e.preventDefault()
        
        setIngredient('')
        setAmount('')
        setCalories(null)
        
        const ingredObj = {
        name: ingredient,
        amount: amount,
        calories: calNum,
        recipe_id: newId
    }
    setIngredientsArray([...ingredientsArray, ingredObj])
        const ingredOpt={
            headers :{'Content-Type': 'application/json'},
            method : "POST",
            body : JSON.stringify(ingredObj)
        }
        

        fetch('/ingredients',ingredOpt)
        .then(resp=>resp.json())
        .then(newIng=>console.log(newIng))
        
        
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
                    <input type='text' value={ingredient} placeholder='ingredient name' onChange={e=>setIngredient(e.target.value)}></input>
                    <input type='text' value={amount} placeholder='amount?' onChange={(e)=>setAmount(e.target.value)}></input>
                    <input type='number' value={calories} placeholder='how many calories?' onChange={(e)=>setCalories(e.target.value)}></input>
                    <button type='submit' onClick={(e)=>addIngredient(e)}>Add New Ingredient</button>
                </form>
                
            <button onClick={(e)=> showForm(e)}>Hide Recipe Form</button> 
        </div>
    )
}

export default NewRecipeForm