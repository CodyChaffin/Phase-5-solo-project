
import RecipeCard from "./RecipeCard";


function RecipeContainer({recipes}){
    
    return(
        <>
        {recipes.map(rec=> (<RecipeCard key={rec.id} rec={rec}/>))}
        </>
    )
}

export default RecipeContainer