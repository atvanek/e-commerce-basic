import React from 'react'
import Nav from './Nav'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

export default function Cart () {
    const {cart, setCart, quantityOptions, updateCart, subtotal} = React.useContext(Context)
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
                        <button className='btn btn-secondary'
                        id={item.product.id}
                        onClick={(e)=>setCart(prevCart => prevCart.filter(item => item.product.id.toString() !== e.target.id))}>Remove from Cart</button>
                    </div>
                </div>
            </div>
        </div>)}
            
)

    return (
        <>
            <Nav />
            <div className='card bg-light'>
                <h1 className='card-header'>Cart</h1>
                <div className='card-body'>
                {cart.length !==0 ?
                <>
                    {cartElements}
                    <h3>Subtotal: {subtotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h3>
                    <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed to Checkout</button>
                    </Link>
                </>
                : 
                <p className='mb-0'>You have no items in your cart</p> }
                
                
                </div> 
            </div>
        </>
    )
}