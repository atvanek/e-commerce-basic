import React from 'react'
import Nav from './Nav'
import {Context} from '../Context'
import {Link} from 'react-router-dom'

export default function Wishlist () {

const {wishlist, removeFromWishlist} = React.useContext(Context);

const wishlistElements = wishlist.map(item => {
return (

    <div class="card mb-3">
        <div class="row no-gutters">
            <div class="col-md-4">
            <img src={item.image} class="card-img" />
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title"id={item.id}key={item.id}>{item.title}
            <i onClick={()=>removeFromWishlist(item.id)} className="fa-solid fa-trash-can trash-icon"></i></h5>
            <Link to={`/${item.id}`}><p class='cart-text'>Product Page</p></Link>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
    </div>
)})


console.log(wishlist)

    return (
        <>
        <Nav />
        <h1>This is your Wishlist</h1>
        {wishlistElements}
        </>
    )
}