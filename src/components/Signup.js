import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const history = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() => {
        (async()=>{
        if(localStorage.getItem("token")){
            let resData = await axios.get("http://localhost:8080/api/getUserFromToken",{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            if(resData.data.success === 1){
                history("/")
            }
        }
    })()
    }, [])

    async function handleSignup(){
        let data = await axios.post("http://localhost:8080/api/signup",{
            username,
            password
        })
        if(data.data.success ===1){
            history("/login")
        }else{
            alert("Not Signed Up")
        }
    }
    
    return (
        <main>
        <div className="outer">
            <div className="plus">
                <div className="circle"></div>
            </div>
            <div className="login">Sign Up</div>
            <div className="login-in-to">Log Up</div>
            <div className="label-text">username</div>
            <div className="input-text">
                <input value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="email" placeholder="example@example.com" />
            </div>
            <div className="label-text">Password</div>
            <div className="input-text">
                <input value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" placeholder="Enter your Password" />
            </div>
            <div className="btn">
                <button onClick={handleSignup} type='button'>Sign Up</button>
            </div>
            <div className="ftg-pw">
                <Link to="/login">
                    Login
                </Link>
            </div>
        </div>
    </main>
    )
}
