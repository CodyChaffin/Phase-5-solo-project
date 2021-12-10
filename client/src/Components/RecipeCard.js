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
            <div className="card" >
                <h1 style={{textAlign:'center'}}>{rec.name}</h1>
                <button  id={rec.id} className='favorites' onClick={(e)=>addRemoveFav(rec.id)}>{favorites ? <div style={{width:"25px", height:"25px"}}>⭐</div> : <div style={{width:"25px", height:"25px"}}>☆</div>}</button>
                <img alt={rec.name} style={{height : '300px', height:'300px'}}src= {rec.image_url}/>
                <div className='turn'></div>
                <button className='details' onClick={()=> setDetails(!details)}>{details ? null:"Turn Me"}</button>
            </div>


            <div className="backCard" style={{height: '405px'}}>
        <RecipeDetails rec={rec} setDetails={setDetails} details={details}/>
        
            </div>
        </ReactCardFLip>
    )
}

export default RecipeCard