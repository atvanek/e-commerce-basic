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
    const [cart, setCart] = React.useState(
      JSON.parse(localStorage.getItem('cart')) || [])
    const numOfOptions = Array.from(Array(11).keys())
    const quantityOptions = numOfOptions.map(num => <option key={num} value={num} className="dropdown-item">{num}</option>)
    const [loggedIn, setLoggedIn] = React.useState(
        JSON.parse(localStorage.getItem('loggedIn')) || false)
    const [user, setUser] = React.useState(
        JSON.parse(localStorage.getItem('user')) || '')

    React.useEffect(()=>{
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    },[wishlist])
  
    React.useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    React.useEffect(()=>{
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn))
      },[loggedIn])
    
    React.useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user))
      },[user])
        

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

    function updateCart (e) {
            const newCart = cart.map(item=>{
                if(item.product.id == e.target.id){
                        return {
                            ...item,
                            quantity: parseInt(e.target.value, 10)
                        }}
                else {
                    return item
                }
            })
            setCart(newCart)
            newCart.map(item=>{
                if(item.quantity == 0){
                    setCart(prevCart => prevCart.filter(item => item.quantity !==0))
                }
            })
            console.log(newCart)
        }

    const priceArr = cart.map(item=>{
          return item.product.price * item.quantity
      })
  
     const subtotal = priceArr.reduce((init, next) => init + next, 0);

    return(
        <Context.Provider 
        value={{wishlist, 
        setWishlist, 
        addToWishlist, 
        removeFromWishlist, 
        products, 
        setProducts, 
        cart, 
        setCart, 
        quantityOptions, 
        updateCart, 
        subtotal,
        loggedIn,
        setLoggedIn,
        user,
        setUser}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};