import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import { RiAdminFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className='navbar' >
        <img src={navlogo} alt="" className='nav-logo'/>
        < RiAdminFill size={60} color="orange" />

    </div>
 )
}

export default Navbar