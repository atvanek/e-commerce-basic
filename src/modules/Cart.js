import React from 'react'
import Nav from './Nav'
import { Context } from '../Context'

export default function Cart () {
    const {cart, setCart, quantityOptions} = React.useContext(Context)

    function updateCart (e) {
        const newCart = cart.map(item=>{
            if(item.product.id == e.target.id){
                    return {
                        ...item,
                        quantity: parseInt(e.target.value, 10)
                    }}
            else {
                return item
            }
        })
        setCart(newCart)
        newCart.map(item=>{
            if(item.quantity == 0){
                setCart(prevCart => prevCart.filter(item => item.quantity !==0))
            }
        })
        console.log(newCart)
    }

   const priceArr = cart.map(item=>{
        return item.product.price * item.quantity
    })

   const subtotal = priceArr.reduce((init, next) => init + next, 0).toLocaleString("en-US", {style:"currency", currency:"USD"});
    
    const cartElements = cart.map(item => {
        return (
            <div key={item.product.id} className="card cart-card mb-3 m-5">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={item.product.image} className="card-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.product.title}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <select
                            value={item.quantity}
                            onChange={(e)=>updateCart(e)} 
                            name='quantity'
                            className="btn btn-secondary" 
                            type="button" id={item.product.id} 
                            aria-haspopup="true" 
                            aria-expanded="false">
                            {quantityOptions}
                        </select>
                        <button id={item.product.id}onClick={()=>console.log(cart)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>)}
            
)

    return (
        <>
            <Nav />
            <h1>This is your cart</h1>
            {cartElements}
            <h3 className='alert alert-dark'>Subtotal: {subtotal}</h3>
            <button onClick={()=>setCart([])}className='btn btn-primary'>Proceed to Checkout</button>
            {}
        </>
        
    )
}