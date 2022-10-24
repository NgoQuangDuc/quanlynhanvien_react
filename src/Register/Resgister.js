import React from 'react'
import { useState } from 'react'
import './Resgister.scss'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Resgister = () => {
    let navigate = useNavigate();
    const[list,setList] = useState({})
    const Register=async()=>{
    let a=await axios.post('http://localhost:8081/resgister',list)
    alert(a.data.data)
    navigate('/')
    }
  return (
    <>
  <div><span>Username: </span><input type="text" value={list.username} onChange={e=>setList({...list,username: e.target.value})} /></div>  
  <div><span>Address: </span><input type="text" value={list.address} onChange={e=>setList({...list,address: e.target.value})}/></div>  
  <div><span>Phone: </span><input type="text" value={list.phone} onChange={e=>setList({...list,phone: e.target.value })}/></div>   
  <div><span>Sex: </span><input type="text" value={list.sex} onChange={e=>setList({...list,sex: e.target.value })}/></div>  
  <div><span>Email: </span><input type="text" value={list.email} onChange={e=>setList({...list,email: e.target.value })}/></div>  
  <div><span>Password: </span><input type="text" value={list.password} onChange={e=>setList({...list,password: e.target.value })} /></div>  
  <div><span>Group ID: </span><input type="text" value={list.group_id} onChange={e=>setList({...list,group_id: e.target.value })} /></div>  
  <button class="button" onClick={Register}>Register</button>
    </>
  )
}

export default Resgister