import React, { useEffect, useState } from 'react'
import './Adminpanel.css'
import { Link } from 'react-router-dom'


function Adminpanel() {
    
  const [alldata, setalldata] = useState([])
    
useEffect(() => {
fetch('http://localhost:4000/users/getall').then((res)=>{
res.json().then((val)=>{
    console.log(val);
    setalldata(val)
})
    })
},[])
const Swal = require('sweetalert2')

const [change, setchange] = useState(true)

  return (
    <div className='admincss'>
       <div id="viewport">
  <div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3 bg-light">
    <header class="d-flex justify-content-between align-items-center mb-4">
      <Link class="h4">Admin panel</Link>
    </header>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">

        <Link style={{background:change ? 'gray' : 'white'}} onClick={()=>{setchange(true)}} class="nav-link">

          approved
        </Link>
      </li>
      <li class="nav-item">
        <Link style={{background:change ? 'white' : 'gray'}} href="#" onClick={()=>{setchange(false)}} class="nav-link">
          pending
        </Link>
      </li>
      </ul>
  </div>




{
    change ? 
   alldata.map((res)=>{
    if(res.adminapproved == true){
        return(
            <div id="content" class="p-4">
              <h3>{`Name : ${res.name}`}</h3>
              <h3>{`Auther : ${res.auther}`}</h3>
                <h3>{  res.discription}</h3>
                
<audio id="myAudio" controls>
  <source src={'http://localhost:4000/'+res.audiofilepath } type="audio/ogg"/>
</audio>
            <div class="container-fluid">
              <h1>Admin Approved </h1>
              <p>Make sure all audio are not correpted <code>#content</code>.</p>
            </div>
          </div>
        )
    }
   })
    :
    alldata.map((res)=>{
       if(res.adminapproved === false){
        return(
            <div id="content" class="p-4">
    <h3>{`Name : ${res.name}`}</h3>
              <h3>{`Auther : ${res.auther}`}</h3>
                <h3>{  res.discription}</h3>
                <audio id="myAudio" controls>
  <source src={'http://localhost:4000/'+res.audiofilepath } type="audio/ogg"/>
</audio>
<button onClick={async()=>{
 alldata.map((resdata)=>{
if(res.audiofilename === resdata.audiofilename){
     const filenameToSend=resdata.audiofilename
    fetch(`http://localhost:4000/users/update?filename=${filenameToSend}`,{
        method: 'POST',
}).then(()=>{
  Swal.fire({
    title: "successfully approved the audio",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      url("/tenor-unscreen.gif")
      left top
      no-repeat
    `
  });
  setchange(true)
})
}
})
}}>approve</button>
    <div class="container-fluid">
      <h1>Simple Sidebar</h1>
      <p>Make sure to keep all page content within the <code>#content</code>.</p>
    </div>
  </div>
        )
       }
    })


}
</div>
    </div>
  )
}

export default Adminpanel