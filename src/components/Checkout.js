import React, { useContext } from 'react'
import './styles/Checkout.css'
import CartContext from '../context/Context'

export default function Checkout() {
    const {cart} = useContext(CartContext);
    let total = 0;
    if(cart.length>0){
        cart.forEach(ele => {
            total += (ele.counter*ele.price);
        });
    }
    return (
        <button className='Checkout-btn'>
            Checkout = ₹{total}
        </button>
    )
}
