import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Logout.css'


const Logout = () => {
    const history = useNavigate();
    return (
        <button className='btn-logout'
        onClick={()=>{
            localStorage.removeItem("token")
            history("/login")
        }}>Logout</button>
    );
}

export default Logout;
