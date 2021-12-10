


function RecipeDetails({rec, details, setDetails}){
    
    const directions = rec.directions
    const ingredients = rec.ingredients


    
    return(
        <div className="directions" >
            <ul>
                <h2 className="instruction">Instructions</h2>
                {directions.map(dir=><li className="instruct" key={dir}>{dir}</li>)}
                <h2>Ingredients</h2>
                {ingredients.map(ing=><li key={ing.id}>{ing.amount} - {ing.name}</li>)}
                <div className='turnback'></div>
                <button onClick={()=> setDetails(!details)}>Turn Me</button>
            </ul>
        </div>
    )
}

export default RecipeDetails