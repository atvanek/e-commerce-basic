import React from 'react'
import Nav from './Nav'
import { Context } from '../Context'

export default function Checkout () {

    const {cart, quantity, quantityOptions, setQuantity} = React.useContext(Context)

    const checkoutElements = cart.map(item =>{
        return (
            <div key={item.product.id}className='card-group'>
                <div class="card col col-6">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={item.product.image} class="img-fluid rounded-start" alt="..." />
                        </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{item.product.title}</h5>
                                <select
                                value={item.quantity} 
                                onChange={(e)=>setQuantity(e.target.value)}
                                name='quantity'
                                className="btn btn-secondary" 
                                type="button" id="dropdownMenuButton" 
                                aria-haspopup="true" 
                                aria-expanded="false">
                                {quantityOptions}
                            </select>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="card col col-6">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id={"flexRadioDefault1"} />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Express Shipping
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Standard Shipping
                    </label>
                </div> 
                </div>
        </div>
        )
    })

    return(
        <>
            <Nav />
            <div class="card m-5">
                <h5 class="card-header">Shipping</h5>
                <div class="card-body">
                 {checkoutElements}
                    </div>
                </div>
        </>
        
    )
}