import React from 'react'

const Context = React.createContext();

function ContextProvider(props){

    const [products, setProducts] = React.useState([])

    const [wishlist, setWishlist] = React.useState(
        JSON.parse(localStorage.getItem('wishlist')) || []
    )


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
          console.log('removed from wishlist')
          console.log(wishlist)
        })
      }

    return(
        <Context.Provider value={{wishlist, setWishlist, addToWishlist, removeFromWishlist, products, setProducts}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};