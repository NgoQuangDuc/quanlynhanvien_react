
import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.scss'
import axios from '../setup/axios'


function Example(props) {
const{currentItems,limit,show,handleClose,current,setCurrentPage,pageCount,   showPages, fetchs,crup,setCrup}=props
useEffect(()=>{
  fetchs()
},[])
const handChange=async()=>{
  
if(current==='create'){
await axios.post('/create',crup) 

// console.log(crt.AxiosError.response.data )
 handleClose()
 showPages()
 if(currentItems.length===limit){
  alert('Successd')
   let c=pageCount
 setCurrentPage(c+1)
 }
 else{
  alert('Successd')
  let c=pageCount
  setCurrentPage(c)
 }

}
else{
  let d= await axios.post('/create',crup)
    handleClose()
    showPages()
}
}
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Changes</Modal.Title>
        </Modal.Header >
       <Modal.Body><label for="name">Name:<br /> <input id="name" type="text" value={crup.username} onChange={(e)=>setCrup({...crup,username:e.target.value})}/></label></Modal.Body>
       <Modal.Body><label for="address">Address:<br /> <input id="address" type="text" value={crup.address} onChange={(e)=>setCrup({...crup,address:e.target.value})}/></label></Modal.Body>
       <Modal.Body><label for="sex">Sex:<br /> <input id="sex" type="text" value={crup.sex} onChange={(e)=>setCrup({...crup,sex:e.target.value})}/></label></Modal.Body>
       <Modal.Body><label for="phone">Phone:<br /> <input id="phone" type="text" value={crup.phone} onChange={(e)=>setCrup({...crup,phone:e.target.value})}/></label></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handChange()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example