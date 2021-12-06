import { useEffect, useState } from "react"
import RecipeDetails from "./RecipeDetails"
import ReactCardFLip from 'react-card-flip'

function ProfileRecipes({rec, currentUser, handleRemove}){
    const [details, setDetails]= useState(false)
    const [favorites, setFavorites]= useState(false)
    const [fav, setFav] =useState([currentUser.recipes])
    
    function favorite(id){
        
        const favObj = {
            user_id : currentUser.id,
            recipe_id : id
        }

        const favOpt = {
            headers :{'Content-Type': 'application/json'},
            method : "POST",
            body : JSON.stringify(favObj)
        }
        
        fetch('/favorite_recipes', favOpt)
        .then(res=>res.json())
        .then(newFav=> setFav([...fav, newFav]))
    }
    
    function unFavorite(e){
        const maybes = currentUser.favorite_recipes.filter(r=>r.recipe_id === e)
       const favId = maybes.map(m=>m.id)
       handleRemove(e)
        
        fetch(`/favorite_recipes/${favId}`,{
            method :"DELETE"}
        )
    }
   
    const addRemoveFav=(e)=> {
        
        if (favorites=== false){
        setFavorites(true)
        favorite(e)
        }
        else {
        setFavorites(false)
        unFavorite(e)
        }

    }
    
    useEffect(()=>{
        function setFavs(){
            
        const favor=currentUser.recipes.filter(reci=>reci.id === rec.id )
        favor.forEach(()=> {
             setFavorites(true)
            });
        
    }
    setFavs()
        
    },[favorite, unFavorite])
    return(
        <ReactCardFLip isFlipped={details} flipDirection="horizontal">
            <div>
                <h1>{rec.name}</h1>
                <button onClick={()=> setDetails(!details)}>Details</button>
                <img alt={rec.name} style={{width : '250px'}}src= {rec.image_url}/>
                <button  id={rec.id} onClick={(e)=>addRemoveFav(e.target.id)}>{favorites ? "⭐" : "☆"}</button>
            </div>


            <div>
                <RecipeDetails rec={rec} setDetails={setDetails} details={details}/>
            </div>
        </ReactCardFLip>
    )
}

export default ProfileRecipes