import React from 'react'
import './Login.scss'
import axios from '../setup/axios'
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react'
const Login = (props) => {
  let navigate = useNavigate();

  
    const[login,setLogin]=useState({})
    useEffect(()=>{
     if( sessionStorage.getItem("SessionName")){
      navigate('/home')
     }
    },[])
const handLogin =async()=>{
    
    let a=await axios.post('/',{login})
    console.log(a)
    if(a.data.data==='Successd'){
      sessionStorage.setItem("SessionName","SessionData");
        navigate(`/home`)
      window.location.reload()
       
    }
    else{
        alert(a.data.data)
      setLogin({username:'',password:'',})
    }

}
  return (
    <div className="login">
    <div class="content">Login</div>
    <div class="input">
   <div class="username"><span>User: </span><input type="text" value={login.username} onChange={(e)=>setLogin({...login, username: e.target.value})}/></div> 
   <div class="password"><span>Password: </span><input type="password" value={login.password} onChange={(e)=>setLogin({...login, password: e.target.value})} /></div> 
   <button type="button" class="button" onClick={handLogin}>Login</button><br/>
   <span>If you don't have account, <a href="/register">Register here</a>.</span>
   </div>
  
  

    </div>
  )
}

export default Login