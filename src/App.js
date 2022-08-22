import React from 'react'
import './App.css';
import Nav from './modules/Nav'
import Banner from './modules/Banner'
import ProductCard from './modules/ProductCard'
import {Context} from './Context'

function App(props) {

  const {wishlist, products, setProducts, remove} = React.useContext(Context)

  React.useEffect(()=>{
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  },[wishlist])


  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }, [])


  
  const productCardElements = products.map(product => {
    return <ProductCard
    products={products} 
    img={product.image} 
    title={product.title} 
    description={product.description} 
    key={product.id}
    id={product.id}/>
  })




  

  return (
    <>    <Nav />
    <Banner />
    <div className='product-card-container row'>
      {productCardElements}
    </div></>
  
   
    
  );
}

export default App;
