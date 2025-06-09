import React from 'react'
import { Link } from 'react-router'
import styles from '../styles/components/Navbar.module.css'
import { FaRegPlusSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
       <h2><Link to="/">Products Store</Link></h2>
       <button><Link to="/create"><FaRegPlusSquare size={20} />Create Product</Link></button>
    </header>
  )
}

export default Navbar