
import RecipeCard from "./RecipeCard";


function RecipeContainer({recipes}){
    
    return(
        <>

        <h1>RecipeContainer</h1>
        {recipes.map(rec=> (<RecipeCard key={rec.id} rec={rec}/>))}
        </>
    )
}

export default RecipeContainer