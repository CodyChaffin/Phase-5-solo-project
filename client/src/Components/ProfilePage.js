import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import NewRecipeForm from "./NewRecipeForm";
import ProfileRecipes from "./ProfileRecipes";


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
                
                
              })
            } else {
            //   setAuthChecked(true)
            }
          })
    }, [recipes])
      
   
    
    return(
        <>
        <h1 onClick={()=> navigate('/home')}>{currentUser.name}</h1>
        <button onClick={()=> navigate('/')}>Log Out</button>
        
        {isVisible ? <NewRecipeForm setRecipes={setRecipes} recipes={recipes} isVisible={isVisible} setIsVisible={setIsVisible}/> : <button onClick={()=>setIsVisible(!isVisible)}>Add A Recipe</button>}
        
        <div>
            {currentUser.recipes.map(recipe=><ProfileRecipes key={recipe.id} rec={recipe} currentUser={currentUser} setRecipes={setRecipes} handleRemove={handleRemove} favorites={favorites}/>)}
        </div>
        </>
    )
}

export default ProfilePage