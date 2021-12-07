import { Grid } from "@material-ui/core";

import { useState } from "react";
import RecipeCard from "./RecipeCard";


function RecipeContainer({recipes, currentUser}){
    const [favorites, setFavorites]= useState(false)
    return(
        
            <div className='container' >
                <Grid container spacing={10}>
                    
                        {recipes.map(rec=> <Grid item lg={4}><RecipeCard key={rec.id} className='card' rec={rec}  currentUser={currentUser} setFavorites={setFavorites} favorites={favorites} /></Grid>)}
                    
                </Grid>
            </div>

    )
}

export default RecipeContainer