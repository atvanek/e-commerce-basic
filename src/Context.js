import React from 'react'

const Context = React.createContext();

function ContextProvider(props){

    React.useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [])

    const [products, setProducts] = React.useState([])
    const [wishlist, setWishlist] = React.useState(
        JSON.parse(localStorage.getItem('wishlist')) || [])

    function addToWishlist(id){
        products.map(item=>{
          if (item.id === id){
            setWishlist(prev=>[...prev, item])
          }})}

    function removeFromWishlist(id){
        products.map(item=>{
          if (item.id === id){
            setWishlist(prev=> prev.filter(item=> item.id !== id))
          }})}

    return(
        <Context.Provider value={{wishlist, setWishlist, addToWishlist, removeFromWishlist, products, setProducts}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};