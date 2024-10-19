import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <h1>Facebook </h1>
    </div>
    <div className="navbar-links">
      <a href="#">Home</a>
      <a href="#">Friends</a>
      <a href="#">Messages</a>
      <a href="#">Notifications</a>
      <a href="#">Profile</a>
    </div>
    
  </nav>

  
  )
}
