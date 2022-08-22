import React from 'react'
import Nav from './Nav'
import {Context} from '../Context'

export default function Wishlist () {

const {wishlist, removeFromWishlist} = React.useContext(Context);

const wishlistElements = wishlist.map(item => <p id={item.id}key={item.id}>{item.title}<i onClick={()=>removeFromWishlist(item.id)} className="fa-solid fa-trash-can"></i></p>)

console.log(wishlist)

    return (
        <>
        <Nav />
        <h1>This is your Wishlist</h1>
        {wishlistElements}
        </>
    )
}