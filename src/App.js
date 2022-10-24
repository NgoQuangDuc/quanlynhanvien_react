import React from 'react'
import axios from './setup/axios'
import Role from './Role/Role'
import { useEffect,useState } from 'react'
import Modal from './Modal/Modal'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import Login from './Login/Login'
import { Routes, Route, Link } from "react-router-dom";
import Resgister from './Register/Resgister'
import AddRoles from './addRole/addRoles'
import _ from 'lodash'


const App = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [limit, setLimit] = useState(2)
  const [currentPage, setCurrentPage] =useState(1)

  const handlePageClick = (event) => {
    setCurrentPage(event.selected+1)


  };
  const showPages=async()=>{   
     
    const fetch=await axios.get(`pagtion?limit=${limit}&currentPage=${currentPage}`)
console.log(fetch)
    // if(fetch.EC===1)  navigate('/')
    setPageCount(fetch.data.da.cout)
    setCurrentItems(fetch.data.da.data.rows)
    
  }
  
    const [list,setList]=useState([])
    const [show, setShow] = useState(false);
    const [current,setCurrent]= useState('')
    const handleClose = () => setShow(false);
    const[crup,setCrup]=useState({})
    const handleShow = (strings,id) =>{ 
      setShow(true)
    setCurrent(strings)
    if(strings==='update'){

      let a=list.filter(b=>b.id===id)
    
setCrup(a[0])
    }

    };


  
    
    
    const fetchs=async()=>{
        const fetch=await axios.get('/home')
        console.log(fetch)
  setList(fetch.data.data)

    }
   const handDelete=async(id)=>{
await axios.post('/deletes',{id})

   showPages()
   if(currentItems.length===1){
     let c=pageCount
   setCurrentPage(c-1)
   }}
  
  //  if(_.isEmpty(currentItems)){
  //   showPages()
  //   let c=pageCount
  //   setCurrentPage(c-1)
  //  }


   
  //  }
  //  else{
  //   let c=pageCount
  //   setCurrentPage(c)
  //  }

  

  
  
  return (
    <>{
      sessionStorage.getItem("SessionName")&&<Nav limit={limit} currentPage={currentPage} />
    }
      
       <Modal currentItems={currentItems} limit={limit} pageCount={pageCount} setCurrentPage={setCurrentPage} show={show} handleClose={handleClose} current={current}    showPages={showPages}  fetchs={fetchs} crup={crup} setCrup={setCrup}/>
     <Routes>
  
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Resgister />} />
        <Route path="/role" element={<Role />} />
        <Route path="/addrole" element={<AddRoles />} />
        <Route path='/home' element={<Home fetchs={fetchs} showPages={showPages} currentPage={currentPage} handleShow={handleShow} list={list} handDelete={handDelete}  currentItems={currentItems} handlePageClick={handlePageClick} pageCount={pageCount}/>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
   


    </>
  )
}

export default App