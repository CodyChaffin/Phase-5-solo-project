

import { useNavigate } from "react-router"


function Navbar({filteredFood}){
    let navigate = useNavigate();
    
  
        
    return(
        <>
        <button onClick={()=>navigate('/home/user-profile')}>My Profile</button>
        <button onClick={(e)=>filteredFood(e.target.value)} value='All'>All</button>
        <button onClick={(e)=>filteredFood(e.target.value)} value='Asian'>Asian</button>
        <button onClick={(e)=>filteredFood(e.target.value)} value='Greek'>Greek</button>
        <button onClick={(e)=>filteredFood(e.target.value)} value='American'>American</button>
        </>
    )
}

export default Navbar





// const origin= recipes.map(rec=>rec.origin)
// const filteredOrigins= new Set(origin)
/* {array.map(or=><button onClick={(e)=>filteredFood(e.target.value)} value={or}>{or}</button>)} */
// const array = Array.from(filteredOrigins)