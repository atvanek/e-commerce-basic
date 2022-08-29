import React from 'react'
import Nav from './Nav'
import { Context } from '../Context'

export default function Checkout () {

    const {cart, quantity, quantityOptions, setQuantity, updateCart, subtotal} = React.useContext(Context)

    const checkoutElements = cart.map(item =>{
        return (
            <div key={item.product.id}className='card-group m-5'>
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={item.product.image} class="img-fluid rounded-start" alt="..." />
                        </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{item.product.title}</h5>
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
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="card p-3">
                <div class="form-check shipping-options">
                    <input class="form-check-input" type="radio" name={`shipping-${item.product.id}`} id={`express-ship-${item.product.id}`} />
                    <label class="form-check-label" for={`express-ship-${item.product.id}`}>
                        Express Shipping {9.99.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name={`shipping-${item.product.id}`} id={`standard-ship-${item.product.id}`} />
                    <label class="form-check-label" for={`standard-ship-${item.product.id}`}>
                        Standard Shipping {0.0.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                    </label>
                </div> 
            </div>
             </div>
        )
    })

    return(
        <>
            <Nav />
            <div class="card bg-light">
                <h5 class="card-header">Shipping</h5>
                <div class="card-body">
                 {checkoutElements}
                    </div>
                    <h3>Total: {subtotal}</h3>
                </div>
        </>
        
    )
}