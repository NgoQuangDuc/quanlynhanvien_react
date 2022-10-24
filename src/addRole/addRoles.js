import React from 'react'
import './addRoles.scss';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import _ from 'lodash';
import axios from '../setup/axios';

const AddRoles = () => {
    let navigate = useNavigate();
    const [list,setList] =useState([{ url:'',des:''}])
    const Add=()=>{
        setList([...list,{url:'',des:''}])
    }
    const handChange=(e,id,type)=>{
        let a=_.cloneDeep(list)
        a[id][type]=e
        setList(a)
    }
    const handSave=async()=>{
        let d=await axios.post('/saveall',list)
     setList([])
    }
  return (
    <>
    {list&&list.length>0&&list.map((li,index)=>{
        return (
            <div key={index} className='all' style={{display:'flex'}}>
            <span>Url: <input type="text" values={li.url} onChange={(e)=>handChange(e.target.value,index,'url')} /></span>
            <span>Description: <input type="text" values={li.des} onChange={(e)=>handChange(e.target.value,index,'des')}/></span>
            <button type="button" onClick={Add}>Add</button>
            </div>
        )
    })}
    <button class="butt" onClick={handSave}>ADD ROLES</button>
   
    </>
  )
}

export default AddRoles