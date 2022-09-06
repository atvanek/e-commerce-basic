import React from 'react'
import {useParams} from 'react-router-dom'
import {Context} from '../Context'
import Nav from './Nav'

export default function DetailsPage () {

    const {productId} = useParams()
    const {products, cart, setCart, quantityOptions} = React.useContext(Context)
    const [quantity, setQuantity] = React.useState(0)

    const thisProduct = products.find(product => product.id.toString() === productId)
    const isInCart = cart.some(item => item.product.id === thisProduct.id)
    
    function addToCart() {
        setCart(prevCart=>{
            return [
            ...prevCart,
            {product: thisProduct,
            quantity: quantity,
            shipping: 0
            }
            ]
        })
        console.log(cart)
    }

    
    
    return (
        <> 
        <Nav />

        <div class="card mb-3 m-4">
        <h5 className='card-header'>Product Details</h5>
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src={thisProduct.image} class="card-img" />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{thisProduct.title}</h5>
                    <h4>{thisProduct.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h4>
                    <p class="card-text">{thisProduct.description}</p>
                    <select
                    value={quantity} 
                    onChange={(e)=>setQuantity(parseInt(e.target.value, 10))}
                    name='quantity'
                    className="btn btn-secondary" 
                    type="button" id="dropdownMenuButton" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    {quantityOptions}
                </select>
                <button onClick={addToCart}className="btn btn-primary m-1">Add To Cart</button>
                {isInCart &&
                <div className='added-tag m-3'><i className="fa-solid fa-circle-check added-icon"></i><p>Added</p></div>}
                </div>
                </div>
            </div>
        </div>
     
        </>
    )     
}