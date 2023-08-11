import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            Ajith Chakkadath
        </div>
        <ul className='navbar-nav'>
            <li className='navbar-item'>
                <Link to='/' className='navbar-link'> Home </Link>
            </li>
            <li className='navbar-item'>
                <Link to='/aboutus' className='navbar-link'> About us </Link>
            </li>
            <li className='navbar-item'>
                <Link to='/contact' className='navbar-link'> Contact us </Link>
            </li>

        </ul>

    </nav>
  )
}

export default Navbar