


function RecipeDetails({rec, details, setDetails}){
    
    const directions = rec.directions
    const ingredients = rec.ingredients


    
    return(
        <div>
            <ul>
                <h2>Instructions</h2>
                {directions.map(dir=><li key={dir}>{dir}</li>)}
                <h2>Ingredients</h2>
                {ingredients.map(ing=><li key={ing.id}>{ing.amount} - {ing.name}</li>)}
                <button onClick={()=> setDetails(!details)}>Details</button>
            </ul>
        </div>
    )
}

export default RecipeDetails