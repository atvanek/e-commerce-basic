import React from 'react'
import {useParams} from 'react-router-dom'
import {Context} from '../Context'
import Nav from './Nav'

export default function DetailsPage () {

    const {productId} = useParams()
    const {products} = React.useContext(Context)

    const thisProduct = products.find(product => product.id.toString() === productId)

    return (
        <> 
        <Nav />
        <div className='row details-container'>
            <div className='details-image-container col col-5'>
                <img className='details-image'src={thisProduct.image} />
            </div>
            <div className='details-description-container col col-5'>
                <h1>{thisProduct.title}</h1>
                <h2>{thisProduct.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                <p>{thisProduct.description}</p>
            </div>
            
        </div>
     
        </>
    )     
}