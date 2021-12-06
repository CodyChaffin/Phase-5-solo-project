import { useEffect, useState } from "react"
import RecipeDetails from "./RecipeDetails"
import ReactCardFLip from 'react-card-flip'


function RecipeCard({rec, currentUser, handleRemove}){
    const [details, setDetails]= useState(false)
    const [favorites, setFavorites]= useState(false)
    const [fav, setFav] =useState([currentUser.recipes])
    
    
   
    function favorite(id){
        // e.preventDefault();
        
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
    //    handleRemove(e)
        
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
        // handleRemove(e)
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
            <div style={{ width:'500px',height:"400px",  backgroundImage: `url("https://i.pinimg.com/originals/a0/29/62/a0296222f9635d2345c4dc00c7bebe99.jpg")`}}>
                <h1 style={{textAlign:'center'}}>{rec.name}</h1>
                <button onClick={()=> setDetails(!details)}>Details</button>
                <img alt={rec.name} style={{width : '300px', height:'300px'}}src= {rec.image_url}/>
                <button  id={rec.id} style={{float:"right", width:"40px", height:"40px"}} onClick={(e)=>addRemoveFav(rec.id)}>{favorites ? <div style={{width:"25px", height:"25px"}}>⭐</div> : <div style={{width:"25px", height:"25px"}}>☆</div>}</button>
                </div>


        <div>
        <RecipeDetails rec={rec} setDetails={setDetails} details={details}/>
        </div>
        </ReactCardFLip>
    )
}

export default RecipeCard