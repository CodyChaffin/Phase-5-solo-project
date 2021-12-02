


function RecipeDetails({rec}){
    
    const directions = rec.directions
    const ingredients = rec.ingredients
    
    return(
        <div>
            <ul>
                <h2>Instructions</h2>
                {directions.map(dir=><li>{dir}</li>)}
                <h2>Ingredients</h2>
                {ingredients.map(ing=><li>{ing.amount} - {ing.name}</li>)}
            </ul>
        </div>
    )
}

export default RecipeDetails