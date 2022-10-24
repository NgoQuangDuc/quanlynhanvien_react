import React from 'react'
import { useState,useEffect } from 'react'
import axios from '../setup/axios'
import './Role.scss'
import _ from 'lodash'
import { useNavigate } from "react-router-dom";
const Role = () => {
    const[options,setOptions] =useState([])
    const[idd,setIdd]=useState(null)
    const [list,setList]=useState([])
    const[fetchGroup,setFetchGroup] = useState([])

    const [bool,setBoolean] = useState(false)
let navigate = useNavigate();

    useEffect(()=>{

        Roles()
        roless()
      

    },[])
    const Roles=async()=>{
        let d=await axios.get('/role')


setList(d.data.data)
    }
const roless=async()=>{
    let dd=await   axios.get('/fetchgroup')
let upd=dd.data.data.map(data=>{
        data.isCheck=false
      return data
    })

  setFetchGroup(upd)
}

const handRoles=async(ed)=>{
    let a=await axios.post('/handroles',{name:ed})
//  console.log(d.data.data)

// console.log(check)  
setBoolean(true)
// //    console.log(list)
// //    let id=list.findIndex(c=>c.name===ed)
// //    setIdd(list[id].id)
   let copy=_.cloneDeep(fetchGroup)


 
//     let d=await handRoles(ed)
 let d=copy.map(abc=>{
        abc.isCheck=a.data.data.some(ab=>ab.Roles.url===abc.url)
     return abc
    })
 
setFetchGroup(d)


}
const handChex=(e,id)=>{
   
const a=_.cloneDeep(fetchGroup)
    a[id].isCheck=!a[id].isCheck
    
setFetchGroup(a)
}
const show=()=>{
    console.log(fetchGroup)
let a=fetchGroup.find(a=>a.isCheck===true)

    var resultss = fetchGroup.reduce((results, c) => {
        if (c.isCheck) results.push( {group_id:a.id,role_id:c.id}) // modify is a fictitious function that would apply some change to the items in the array
        return results
    }, [])

return resultss
}
const handSave=async()=>{
 
let a=show()

   let dd=await axios.post('/options',a)
   console.log(dd)

}
  return (
    <> 
    <select     onChange={(e)=>handRoles(e.target.value)}   id="choice" >


    <option value="2" style={{display: 'none'}} selected>Select....</option>
        {
            list.map((list,key)=>{
                return(
                    <option key={list.id}   value={list.name}>{list.name}</option>
                )
            })}
</select>
{
    bool&&fetchGroup&&fetchGroup.length>0&&fetchGroup.map((f,index)=>{
   
        return(
        
           <span><input  key={index}      onChange={(e)=>handChex(e.target.checked,index)} type="checkbox" id='check'  checked={f.isCheck}/>{f.url}</span>
      
        )
    })
}
<button onClick={handSave} style={{width: '60px',marginLeft:"40px",borderRadius:'10px',backgroundColor:'yellow'}} >Save</button>

    
     </>
  

  )
}

export default Role