import React from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../Context'

export default function Nav () {

  const {cart} = React.useContext(Context)
  const totalCartItems = cart.map(item => item.quantity)

    return(
      <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
      <Link to='/'><i class="fa-solid fa-barcode mx-3"></i>
        <a class="navbar-brand" href="#">My E-Shop</a></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
          <Link to="/cart"> 
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping mx-2"></i>Cart</a>
            </li></Link>
            <Link to='/wishlist'>
              <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa-solid fa-heart mx-2"></i>Wishlist</a>
            </li></Link>
          </ul>
        </div>
      </div>
    </nav>
    )
}