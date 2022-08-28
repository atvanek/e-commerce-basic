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
        const newCart = cart.map(item=>{
            if(item.product.id.toString() === e.target.id){
                return {
                    product: item.product,
                    quantity: e.target.value
                }
            }
            else {
                return item
            }
        })
        setCart(newCart)
        console.log(newCart)
    }

    const priceArr = cart.map(item=>{
        return item.product.price * item.quantity
    })

    const subtotal = priceArr.reduce((init, next) => init + next, 0).toLocaleString("en-US", {style:"currency", currency:"USD"});

    console.log(priceArr)
    
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
                        </div>
                    </div>
                </div>
            </div>
)})

    return (
        <>
            <Nav />
            <h1>This is your cart</h1>
            {cartElements}
            <h3 className='alert alert-dark'>Subtotal: {subtotal}  </h3>
            <button className='btn btn-primary'>Proceed to Checkout</button>
            {}
        </>
        
    )
}