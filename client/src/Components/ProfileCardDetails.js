

function ProfileCardDetails({rec, details, setDetails}){
    const directions = rec.directions
    const ingredients = rec.ingredients

    return(
        <div className="profile-directions" style={{fontWeight: '200', top: '170px'}} >
        <ul>
            <h2 className="profile-instruction">Instructions</h2>
            {directions.map(dir=><li className="instruct" key={dir}>{dir}</li>)}
            <h2>Ingredients</h2>
            {ingredients.map(ing=><li key={ing.id}>{ing.amount} - {ing.name}</li>)}
            <button  className="profile-backButton" onClick={()=> setDetails(!details)}>Details</button>
        </ul>
    </div> 
    )
}

export default ProfileCardDetails;