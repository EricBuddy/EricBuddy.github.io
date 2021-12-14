import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div>
           
        
            <Link to ='/'>Home</Link>
            <Link to ='/projects'>Projects</Link>
            <Link to ='/about'>About Me</Link>
            <Link to ='/contact'> Contact Me</Link>

        </div>
    )
}

export default NavBar
