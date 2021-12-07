
import { useState } from "react";
import MenuBar from "./MenuBar";


function Navbar({filteredFood}){
    const [menuOpen, setMenuOpen] = useState(false)
    
        
    return(
        <div className='navBar'>
        {/* style={{display:"flex", justifyContent: "space-evenly", backgroundColor:'orange'}} */}
        <button onClick={(e)=>filteredFood(e.target.value)} value='All'>All</button>
        <button onClick={(e)=>filteredFood(e.target.value)} value='Asian'>Asian</button>
        <button onClick={(e)=>filteredFood(e.target.value)} value='Greek'>Greek</button>
        <button onClick={(e)=>filteredFood(e.target.value)} value='American'>American</button>
        <button onClick={(e)=>filteredFood(e.target.value)} value='Korean'>Korean</button>
        <button onClick={(e)=>filteredFood(e.target.value)} value='Japanese'>Japanese</button>
        <button onClick={(e)=>filteredFood(e.target.value)} value='Mexican'>Mexican</button>    
        {menuOpen ? <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>:<img src="https://cdn2.iconfinder.com/data/icons/user-interface-169/32/menu-128.png" alt='Close Menu' onClick={()=>setMenuOpen(true)}  style={{float:"right", height: '40px'}}></img>}
        </div>
    )
}

export default Navbar





// const origin= recipes.map(rec=>rec.origin)
// const filteredOrigins= new Set(origin)
/* {array.map(or=><button onClick={(e)=>filteredFood(e.target.value)} value={or}>{or}</button>)} */
// const array = Array.from(filteredOrigins)