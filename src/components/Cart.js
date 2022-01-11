import React, { useContext, useEffect, useState } from 'react'
import './styles/Cart.css';
import logo from '../macbookpro.jpeg'
import CartContext from '../context/Context';


export default function Cart({ name, price, image, quantity, id }) {
    const [counter, setCounter] = useState(0);
    const { addToCart } = useContext(CartContext);
    function AddCart() {
        addToCart({ name, price, image, counter, id })
    }
    console.log(price);


    function addbtn() {
        if (counter <= quantity) {
            setCounter(counter + 1);
        }
    }


    function minus() {

        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <div className='Parent'>
            <div className='Product'>
                <h1>{name}</h1>
                <img src={logo} alt='product' />
                <div className='price'>Price: ₹{price}</div>
                <div className='p-footer'>{counter}
                    <button onClick={AddCart}>Add to Cart</button>
                    <div className='Add'><button onClick={addbtn}>+</button>
                        <button onClick={minus}>-</button>
                    </div>
                </div>
            </div>      
        </div>

    )
}
