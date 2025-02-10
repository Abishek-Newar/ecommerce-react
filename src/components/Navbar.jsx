import React from 'react'
import "./components.css"
import { SiBigcommerce } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="navbar"> <h1><SiBigcommerce />Basket</h1>
        <ul className="navbarlist">
<li className="navbar-item"> <Link to="/">Home</Link></li>
<li className="navbar-item"><Link to= "/men">Men</Link></li>
<li className="navbar-item"><Link to= "/about">About</Link></li>
<li className="navbar-item"><a href="#">Contact</a></li>
        </ul>
        <div className="navbar-act"><button className="login-btn" onClick={()=>{navigate("/auth")}}>Log-in</button>
        <Link to="/cart"><h2 style={{color:"#a7a0a0"}}><FaCartShopping /></h2></Link>
        </div>
    </nav>
  )
}

export default Navbar
