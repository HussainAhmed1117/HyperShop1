import React, { useState } from 'react'
import CartContext from './Context';
export default function ContextWrapper({children}) {
    const [cart,setCart] = useState([]);
    const addToCart = (product)=>{
        let check = cart.find(item=>item.id === product.id)
        if(check){
            let newCart = cart.map(item => {
                if(item.id == check.id){
                    return product;
                }else{
                    return item;
                }
            })
            setCart(newCart)
        }else{
            setCart([...cart,product])
        }
    }
    return (
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}
