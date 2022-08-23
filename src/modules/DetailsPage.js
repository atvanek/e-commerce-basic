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
        <h1>{thisProduct.title}</h1>
        <h2>{thisProduct.price}</h2>
        <p>{thisProduct.description}</p>
        <img src={thisProduct.image} />
        </>
    )
       
}