import React from 'react'
import Nav from './Nav'
import {Context} from '../Context'

export default function Wishlist () {

const {wishlist} = React.useContext(Context);

const wishlistElements = wishlist.map(item => <p key={item.id}>{item.title}</p>)

console.log(wishlist)

    return (
        <>
        <Nav />
        <h1>This is your Wishlist</h1>
        {wishlistElements}
        </>
    )
}