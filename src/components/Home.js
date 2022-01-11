import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from './Cart';
import Logout from './Logout';
import Checkout from './Checkout';
import './styles/Home.css'
import axios from 'axios';

export default function Home() {
    const [productArr,setProductArr] = useState([])
    const history = useNavigate()
    const [user, setUser] = useState("")
    
    useEffect(()=>{
        (async()=>{
        if(!localStorage.getItem("token")){
            history("/login")
        }else{
            let resData = await axios.get("http://localhost:8080/api/getUserFromToken",{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            if (resData.data.success === 1) {
                setUser(resData.data.user.username)

        
            let productData = await axios.get("http://localhost:8080/api/products")
            console.log(productData.data.products);
            setProductArr(productData.data)
        }
    }
        })()
    }, []);


    return (
        <div className='Home'>
            <div className='Nav-Bar'><h1>Home</h1><Logout /> <Checkout user={user} />
            <div className='p-arr'>
            {
                        productArr.map(item => {
                            return <Cart key={item.id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} id={item.id} />
                        })
                    }
                    </div>
            </div>
        </div>
    )
}
