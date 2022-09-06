import React from 'react'
import Nav from './Nav'
import { Context } from '../Context'

export default function Checkout () {

    const {cart, setCart, quantityOptions, updateCart, subtotal} = React.useContext(Context)
    const [creditSubmitted, setCreditSubmitted] = React.useState(false)
    const [orderSubmitted, setOrderSubmitted] = React.useState(false)

    function handleShipping (e) {
        const newCart = cart.map(item=>{
            if(item.product.id == e.target.id){
                    return {
                        ...item,
                        [`shipping-${item.product.id}`]: e.target.value
                    }}
            else {
                return item
            }
        })
        setCart(newCart)
        console.log(newCart)
    }


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
                    <input 
                    class="form-check-input" 
                    type="radio" 
                    name={`shipping-${item.product.id}`} 
                    id={item.product.id}
                    value={9.99}
                    onChange={(e)=>handleShipping(e)} />
                    <label class="form-check-label" 
                    for={`express-ship-${item.product.id}`}>
                        Express Shipping {9.99.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                    </label>
                    </div>
                    <div class="form-check">
                    <input 
                    class="form-check-input" 
                    type="radio" 
                    name={`shipping-${item.product.id}`} 
                    id={item.product.id}
                    value={0}
                    onChange={(e)=>handleShipping(e)} />
                    <label class="form-check-label" 
                    for={`standard-ship-${item.product.id}`}>
                        Standard Shipping {0.0.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                    </label>
                </div> 
            </div>
             </div>
        )
    })

    const orderSummaryElements = cart.map(item=>{
        return(
            <>
            <div>
                <div class="row order-summary-container">
                    <div class="col-md-4 text-center">
                        <img src={item.product.image} class="img-fluid rounded-start order-summary-image" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{item.product.title}</h5>
                            <p class="card-text">{item.product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
                            <p class="card-text"><small class="text-muted">Quantity: {item.quantity}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    })

    const estimatedTax = (subtotal * .08)
    const orderTotal = (subtotal + estimatedTax + 5)

    function handleCreditSubmit () {
        setCreditSubmitted(true)
    }

    function handleOrderSubmit () {
        setCart([])
        setOrderSubmitted(true)
    }
 
    return(
        <div>
            <Nav />
            <div class="card bg-light">
                <h5 class="card-header">Shipping</h5>
                <div class="card-body">
                 {checkoutElements}
                    </div>
                <h5 className='card-header'>Payment Information</h5>
                <div className='card m-5'>
                    <h4 className='card-header'>Credit Card</h4>
                    <form className= 'p-3'>
                        <div class="form-group col p-3">
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name on card" />
                        </div>
                        <div class="form-group col p-3">
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Card" />
                        </div>
                        <div class="form-row col">
                            <div class='form-group col-md-4 p-3'>
                                <input type="number" min='01' max='12' class="form-control" id="exampleInputPassword1" placeholder="Exp. Month" />
                            </div>
                            <div class='form-group col-md-4 p-3'>
                                <input type="number" min='2022' max='2023' class="form-control" id="exampleInputPassword1" placeholder="Exp. Year" />
                            </div>
                        </div>
                        <div class='col-md-2 p-3'>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="CVV" />
                            </div>
                        <button onClick={handleCreditSubmit} type="button" class="btn btn-primary">Submit</button>
                        {creditSubmitted && <button onClick={()=>setCreditSubmitted(false)}type='button' className='btn btn-secondary'>Edit Card Info</button>}
                        {creditSubmitted && <p>Payment information submitted successfully</p>}
                    </form>
                </div>
                <h5 className='card-header'>Order Summary</h5>
                {!orderSubmitted &&
                <div className='card m-5'>
                    {orderSummaryElements}
                </div>}
                <div className='card m-5'>
                    {!orderSubmitted ? 
                    (
                    <div className='card-body'>
                    <h4>Subtotal: {subtotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h4>
                    <h4>Shipping: $5.00</h4>
                    <h4>Estimated Tax: {estimatedTax.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h4>
                    <hr />
                    <h4>Order Total: {orderTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h4>
                    <button onClick={handleOrderSubmit}type='button' className='btn btn-primary'>Place Order</button>
                    </div>
                    )
                     : 
                (<p className='p-5'>Order Submitted Successfully</p>) } 
                </div>    
        </div>
    </div>
        
    )
}