import React from 'react'
import Nav from './Nav'
import { Context } from '../Context'

export default function Checkout () {

    const {cart} = React.useContext(Context)

    const checkoutElements = cart.map(item =>{
        return (
            <div class="card mb-3 col col-6">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={item.product.image} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{item.product.title}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
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