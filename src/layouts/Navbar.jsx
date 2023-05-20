import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/" className='navlink'>Home</Link>
        <Link to="/show-books" className='navlink'>Show Book</Link>
        <Link to="/add-books" className='navlink'>Add Book</Link>
    </nav>
  )
}

export default Navbar