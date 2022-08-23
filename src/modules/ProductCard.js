import React from 'react'
import {Context} from '../Context'
import {Link} from 'react-router-dom'

export default function ProductCard ({img, title, description, id, product}) {
   
    const [details, setDetails] = React.useState(false);
    const [hovered, setHovered] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);
    const {products, setProducts, addToWishlist, removeFromWishlist} = React.useContext(Context)

    function addFavorite(id){
        addToWishlist(id)
        console.log('added to wishlist')
    }

    function removeFavorite(id){
        removeFromWishlist(id)
        console.log('removed from wishlist')
    }


    function heartIcon () {
        if(product.isFavorited){
            return <i className="fa-solid fa-heart filled" onClick={()=>removeFavorite(id)}></i>
        }
        else if (hovered){
            return <i className="fa-regular fa-heart" onClick={()=>addFavorite(id)}></i>
        }
    }

    return (
        <div className="card col-12 col-md-3 m-3" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            {heartIcon()}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className='card-text-container'>
                    <p className="card-text rating">
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star-half-stroke star"></i>
                        <br/>
                        {details && description}
                        </p>
                </div>
                <button className="btn btn-primary" onClick={() => setDetails(prev => !prev)}>{details ? 'Hide Details' : 'View Details'}</button>
                <Link to={`/${id}`}><button className="btn btn-secondary">Go to Product Page</button></Link>
            </div>
        </div>
    )
}