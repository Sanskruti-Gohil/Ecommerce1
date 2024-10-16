import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaThList } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className='sidebar-item'>
      <FaShoppingCart size={24} color="black" />
        <p>Add Product</p>
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className='sidebar-item'>
      <FaThList size={24} color="black" />
        <p>Product List</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar