import React from 'react'
import Nav from './Nav'
import { Context } from '../Context'

export default function Cart () {
    const {cart, setCart, quantityOptions} = React.useContext(Context)

    function removeFromCart(id){
        cart.map(item=>{
          if (item.product.id === id){
            setCart(prev=> prev.filter(item=> item.product.id !== id))
          }})}

    function updateCart (e) {
        console.log(e.target.value)
        }

    const priceArr = cart.map(item=>{
        return item.product.price * item.quantity
    })

    const subtotal = priceArr.reduce((init, next) => init + next, 0).toLocaleString("en-US", {style:"currency", currency:"USD"});

    console.log(priceArr)
    
    const cartElements = cart.map(item => {
        return (
            <div className='wishlist-item-container'>
                <img className='wishlist-thumbnail'src={item.product.image} />
                <select
                    value={item.quantity}
                    onChange={(e)=>updateCart(e)} 
                    name='quantity'
                    className="btn btn-secondary" 
                    type="button" id="dropdownMenuButton" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    {quantityOptions}
                </select>
                <p id={item.product.id}key={item.product.id}>{item.product.title}
                <i onClick={()=>removeFromCart(item.product.id)}className="fa-solid fa-trash-can trash-icon"></i></p>
            </div>)})

    return (
        <>
            <Nav />
            <h1>This is your cart</h1>
            {cartElements}
            <h3>Subtotal: {subtotal}  </h3>
            {}
        </>
        
    )
}