import { useState } from "react";
import { useNavigate } from "react-router"
import NewRecipeForm from "./NewRecipeForm";
import RecipeCard from "./RecipeCard";


function ProfilePage({currentUser}){
    let navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false)
    // console.log(currentUser.recipes) 
    const [recipes, setRecipes] = useState([currentUser.recipes])
    
    return(
        <>
        <h1>{currentUser.name}</h1>
        <button onClick={()=> navigate('/')}>Log Out</button>
        
        {isVisible ? <NewRecipeForm setRecipes={setRecipes} recipes={recipes} isVisible={isVisible} setIsVisible={setIsVisible}/> : <button onClick={()=>setIsVisible(!isVisible)}>Add A Recipe</button>}
        
        <div>
            {currentUser.recipes.map(recipe=><RecipeCard key={recipe.id} rec={recipe}/>)}
        </div>
        </>
    )
}

export default ProfilePage