import { Drawer } from "@material-ui/core"
import { useNavigate } from "react-router"

function MenuBar({menuOpen, setMenuOpen}){
    let navigate = useNavigate();
    return (
        <Drawer className='Drawer' anchor="right" open={menuOpen} onClose={()=>setMenuOpen(false) }>
            <img src="https://cdn2.iconfinder.com/data/icons/user-interface-169/32/menu-128.png" alt="Menu" onClick={()=>setMenuOpen(false)}  style={{ height: '40px', width:'40px'}}></img>
            <div onClick={()=>navigate("/home/user-profile")}>My Profile</div>
            <div>My Favorites</div>
        </Drawer>
        
    )
}

export default MenuBar