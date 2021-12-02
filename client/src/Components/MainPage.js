import { useEffect, useState } from "react"
import Navbar from "./Navbar"

import RecipeContainer from "./RecipeContainer"

function MainPage(){

    const [recipes, setRecipes] = useState([])
    
    const [catagory, setCatagory] = useState([])
    
    useEffect(() => {
        fetch("/recipes")
        .then(resp => resp.json())
        .then(food=> {setRecipes(food)
        setCatagory(food)
        })
    },[])
   

    function filteredFood(origin){
        const filter= catagory.filter(rec=> rec.origin === origin)
        if (origin === "All")
        setRecipes(catagory)
        else
        setRecipes(filter)
        
        
        
    }

    return(
        <>
        
        <Navbar 
        catagory={catagory}
        filteredFood={filteredFood}
        recipes={recipes} 
        />
        <RecipeContainer recipes={recipes} />
        </>
    )
}

export default MainPage