import React from 'react'

const Context = React.createContext();

function ContextProvider(props){

    const [wishlist, setWishlist] = React.useState(
        JSON.parse(localStorage.getItem('wishlist')) || []
    )

    return(
        <Context.Provider value={{wishlist, setWishlist}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};