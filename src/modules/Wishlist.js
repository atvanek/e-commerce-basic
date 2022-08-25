import React from 'react'
import Nav from './Nav'
import {Context} from '../Context'

export default function Wishlist () {

const {wishlist, removeFromWishlist} = React.useContext(Context);

const wishlistElements = wishlist.map(item => {
return (
    <div className='wishlist-item-container'>
        <img className='wishlist-thumbnail'src={item.image} />
        <p id={item.id}key={item.id}>{item.title}
        <i onClick={()=>removeFromWishlist(item.id)} className="fa-solid fa-trash-can trash-icon"></i></p>
    </div>)})


console.log(wishlist)

    return (
        <>
        <Nav />
        <h1>This is your Wishlist</h1>
        {wishlistElements}
        </>
    )
}