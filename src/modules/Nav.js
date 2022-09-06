import React from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../Context'

export default function Nav () {

  const {cart, loggedIn, setLoggedIn, user} = React.useContext(Context)
  const totalCartItems = cart.map(item => item.quantity)

  const loggedInDropdown = 
  
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle nav-text" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {`Hello, ${user}`} 
      </a>
      <ul class="dropdown-menu">
        <Link to='/cart'><li class="dropdown-item nav-text">View Cart</li></Link>
        <Link to='/wishlist'><li class="dropdown-item nav-text">View Wishlist</li></Link>
        <Link to='/login'><li class="dropdown-item nav-text">Sign Out</li></Link>
      </ul>
    </li>

  const loggedOutDropdown = 

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle nav-text" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Sign In 
      </a>
      <ul class="dropdown-menu">
        <Link to='/login'>
        <li><a class="dropdown-item nav-text" href="#">Sign In</a></li></Link>
      </ul>
    </li>

  
    return(
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
        <Link to='/'><i class="fa-solid fa-barcode mx-3 logo"></i>
          <a class="navbar-brand nav-text" href="#">My E-Shop</a></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <Link to="/cart"> 
              <li class="nav-item">
                <a class="nav-link nav-text" href="#"><i class="fa-solid fa-cart-shopping mx-2"></i>Cart</a>
              </li></Link>
              <Link to='/wishlist'>
                <li class="nav-item">
                <a class="nav-link nav-text" href="#"><i class="fa-solid fa-heart mx-2 nav-text"></i>Wishlist</a>
              </li></Link>
              {loggedIn ? loggedInDropdown : loggedOutDropdown}
            </ul>
          </div>
        </div>
    </nav>
    )
}