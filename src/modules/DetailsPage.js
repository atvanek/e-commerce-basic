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
            quantity: quantity
            }
            ]
        })
        console.log(cart)
    }
    
    return (
        <> 
        <Nav />
        <div className='row details-container m-5'>
            <div className='details-image-container col col-5'>
                <img className='details-image'src={thisProduct.image} />
            </div>
            <div className='details-description-container col col-5'>
                <h1>{thisProduct.title}</h1>
                <h2 className='price-text'>{thisProduct.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                <p>{thisProduct.description}</p>
                <select
                    value={quantity} 
                    onChange={(e)=>setQuantity(e.target.value)}
                    name='quantity'
                    className="btn btn-secondary" 
                    type="button" id="dropdownMenuButton" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    {quantityOptions}
                </select>
                <button onClick={addToCart}className="btn btn-primary m-1">Add To Cart</button>
                {isInCart &&
                <div className='added-tag'><i className="fa-solid fa-circle-check added-icon"></i><p>Added</p></div>}
            </div>
            
        </div>
     
        </>
    )     
}