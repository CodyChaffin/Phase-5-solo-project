import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import NewRecipeForm from "./NewRecipeForm";
import ProfileRecipes from "./ProfileRecipes";
import { Grid } from "@material-ui/core";


function ProfilePage({currentUser, setCurrentUser}){
    let navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false)
    const [recipes, setRecipes] = useState([currentUser.recipes])
    const [favorites, setFavorites]= useState(false)
     
    
    function handleRemove(e){
        const recipe = recipes.filter(rec=>rec.id !==e.id)
        setRecipes(recipe)
    }
    
    useEffect(() => {
        fetch('/me', {
          credentials: 'include'
        })
          .then(res => {
            if (res.ok) {
              res.json().then((user) => {
                setCurrentUser(user)
                setFavorites(true)
                setRecipes(user.recipes)
                
              })
            } 
            //   setAuthChecked(true)
            
          })
    }, [handleRemove])
      // useEffect(()=>{

      // },[recipes])
   
    
    return(
        <>
        <h1 onClick={()=> navigate('/home')}>{currentUser.name}</h1>
        <button onClick={()=> navigate('/')}>Log Out</button>
        
        {isVisible ? <NewRecipeForm setRecipes={setRecipes} recipes={recipes} isVisible={isVisible} setIsVisible={setIsVisible}/> : <button onClick={()=>setIsVisible(!isVisible)}>Add A Recipe</button>}
        
        <div>
          <Grid container spacing={10}>
            {currentUser.recipes.map(recipe=><Grid item lg={4}><ProfileRecipes key={recipe.id} rec={recipe} currentUser={currentUser} setRecipes={setRecipes} handleRemove={handleRemove} favorites={favorites}/></Grid>)}
          </Grid>
        </div>
        </>
    )
}

export default ProfilePage