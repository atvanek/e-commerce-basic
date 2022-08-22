import React from 'react'
import './App.css';
import Nav from './modules/Nav'
import Banner from './modules/Banner'
import ProductCard from './modules/ProductCard'

function App() {

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }, [])

  const [products, setProducts] = React.useState([])
  const [wishlist, setWishlist] = React.useState([])

  const productCardElements = products.map(product => {
    return <ProductCard
    products={products} 
    img={product.image} 
    title={product.title} 
    description={product.description} 
    key={product.id}
    id={product.id}
    wishlist={wishlist}
    addToWishlist={addToWishlist}
    removeFromWishlist={removeFromWishlist}/>
  })

function addToWishlist(id){
  products.map(item=>{
    if (item.id === id){
      setWishlist(prev=>[...prev, item])
    }
  })
}

function removeFromWishlist(id){
  products.map(item=>{
    if (item.id === id){
      setWishlist(prev=> prev.filter(item=> item.id !== id))
    }
  })
}

  

  return (
    <>
      <Nav />
      <Banner />
      <div className='product-card-container row'>
        {productCardElements}
      </div>
      
    </>
    
  );
}

export default App;
