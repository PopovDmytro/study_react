import { NavLink, Link } from 'react-router-dom'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {
    return (
        <nav>
            <NavLink to="/"><FaHome/></NavLink>
            <NavLink to="/about"
            	  activeStyle={{
            	  backgroundColor: "white", 
            	  color: "slategray"
            	}}>
            	About
            </NavLink>
            <NavLink to="/members"
            	  activeStyle={{
            	  	backgroundColor: "white", 
            	  	color: "slategray"
            	  }}>
            	  Members
           	</NavLink>
        </nav>
    )
};

export default MainMenu