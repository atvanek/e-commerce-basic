import React from 'react'
import {Context} from '../Context'
import {Link} from 'react-router-dom'

export default function ProductCard ({img, title, description, id, product, count}) {
   
    const [details, setDetails] = React.useState(false);
    const [hovered, setHovered] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);
    const {wishlist, addToWishlist, removeFromWishlist, cart} = React.useContext(Context)

    function addFavorite(id){
        addToWishlist(id)
        console.log('added to wishlist')
    }

    function removeFavorite(id){
        removeFromWishlist(id)
        console.log('removed from wishlist')
    }

    function isOnWishlist (id) {
        return wishlist.some(item => item.id === id)
    }

    function heartIcon () {
        if(isOnWishlist(id)){
            return <i className="fa-solid fa-heart filled heart-icon" 
            onClick={()=>removeFavorite(id)}></i>
        }
        else if (hovered){
            return <i className="fa-regular fa-heart heart-icon" 
            onClick={()=>addFavorite(id)}></i>
        }
    }

    const charArr = Array.from(Array(11).keys(), x => x/2)
    const full = <i className="fa-solid fa-star star"></i>
    const half = <i className="fa-solid fa-star-half-stroke star"></i>
    const empty = <i class="fa-regular fa-star"></i>
    const isInCart = cart.some(item => item.product.id === product.id)

    return (
        <div className="card col-12 col-md-3 m-3 product-card" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            <img className="card-img-top product-card-img" src={img} alt="Card image cap" />
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
                        {count}
                        <br/>
                        </p>
                </div>
                <div className='product-buttons m-4'>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button id='accordian' class="text-bg-light accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="true" aria-controls="collapseOne">
                            Product Details
                        </button>
                        </h2>
                        <div id={`collapse${id}`} class="accordion-collapse collapse" data-bs-toggle="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>{description}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <Link to={`/${id}`}><button className="btn btn-primary m-1">Go to Product Page</button></Link>
                    {isInCart && 
                    <div className='added-tag m-3'><i className="fa-solid fa-circle-check added-icon"></i><p>Added</p></div>}
                </div>
            </div>
        </div>
    )
}