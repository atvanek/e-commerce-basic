import React from 'react'
import './App.css';
import Nav from './modules/Nav'
import Banner from './modules/Banner'
import ProductCard from './modules/ProductCard'
import {Context} from './Context'

function App(props) {

  const {wishlist, products, cart} = React.useContext(Context)
  const productCardElements = products.map(product => {
    return <ProductCard
    product={product} 
    img={product.image} 
    title={product.title} 
    description={product.description} 
    key={product.id}
    id={product.id}
    count={product.rating.count}/>
  })

  console.log(products)

  return (
    <>    
    <Nav />
    <Banner />
    <div className='product-card-container row'>
      {productCardElements}
    </div></>
   
  );
}

export default App;
