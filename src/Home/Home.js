import React from 'react'
import { useEffect,useState} from 'react'
import ReactPaginate from 'react-paginate';
import './Home.scss'

import { useNavigate } from "react-router-dom";

const Home = (props) => {
  
  const {handleShow,currentItems,currentPage,handDelete,handlePageClick,pageCount,showPages}=props

  let navigate = useNavigate();
  useEffect(()=>{
    showPages();
    if(!sessionStorage.getItem("SessionName")){
      navigate('/')
    }
  },[currentPage])
  
    console.log(currentItems)
    // alert('Authent')
  return (

    <div>    
       
       <span>
    <button type="button" class="btn btn-primary" onClick={()=>handleShow('create','')}>Create</button>
<button type="button" class="btn btn-secondary" onClick={()=>window.location.reload()}>Refresh</button>
    </span>
      <table class="table table-dark">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Address</th>
    <th scope="col">Sex</th>
    <th scope="col">Phone</th>
    <th scope="col">Feature</th>
  </tr>
</thead>
<tbody>
  {
    currentItems&&currentItems.length>0&&currentItems.map((list)=>{
      return(
        <tr key={list.id}>
        <th scope="row">{list.id}</th>
        <td>{list.username}</td>
        <td>{list.address}</td>
        <td>{list.sex}</td>
        <td>{list.phone}</td>
        <td>
        <button type="button" class="btn btn-success" onClick={()=>handDelete(list.id)}>Delete</button>
        <button type="button" class="btn btn-success" onClick={()=>handleShow('update',list.id)}>Update</button>
        </td>
      </tr>
      )
    })
  }
</tbody>
</table>
<ReactPaginate className="demo"
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        activeClassName="haha"
        forcePage={currentPage-1}
      />

</div>
  )
}

export default Home