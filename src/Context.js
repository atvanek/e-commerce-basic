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
    const [cart, setCart] = React.useState([])
    const numOfOptions = Array.from(Array(11).keys())
    const quantityOptions = numOfOptions.map(num => <option key={num} value={num} className="dropdown-item">{num}</option>)
        

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
        <Context.Provider value={{wishlist, setWishlist, addToWishlist, removeFromWishlist, products, setProducts, cart, setCart, quantityOptions}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};