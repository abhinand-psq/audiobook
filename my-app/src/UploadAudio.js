import React, { useState } from 'react'
import './UploadAudio.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
function UploadAudio() {
  const navigate = useNavigate();
    const [audio, setaudio] = useState('')
    const [audioname,setaudioname]=useState('')
    const [image,setimage]=useState('')
    const [auther, setauther] = useState('')
    const [discription, setdiscription] = useState('')
   async function clicknow(e){
      e.preventDefault();
        let formdata =  new FormData()
         formdata.append('audio',audio)
         formdata.append('image',image)
         formdata.append('audioname',audioname)
         formdata.append('discription',discription)
         formdata.append('auther',auther)

         const Swal = require('sweetalert2')
try{
fetch('http://localhost:4000/users',{
method:'post',  
body:formdata
}).then((res)=>{
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Done",
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/')
    }
  });
 
})
}catch(e){

}

    }

    function uploadingaudiofile(e){
      
       setaudio(e.target.files[0])
    }

    function uploadingimagefile(e){
     
      setimage(e.target.files[0])
    }

  return (
    // <div>
    //   <form onSubmit={clicknow}>
    //   <input type='text' onChange={(e)=>{setaudioname(e.target.value)}} placeholder='enter file name' />
    //     <input type='file' onChange={uploadingfile} />
    //   <button>onSubmit</button>
    //   </form>
    // </div>


<main>
    <section className="form-section"  >
      <div class="form-wrapper">
        <h1 class="title">upload files</h1>
        <form class="form" onSubmit={clicknow}>
          <div class="form-group">
            <label>
              <span class="sr-only">file name</span>
              <input type="text" onChange={(e)=>{setaudioname(e.target.value)}} placeholder="file name" class="form-input" required/>
            </label>
          </div>
          <div class="form-group">
            <label>
              <span class="sr-only">author name</span>
              <input type="text" onChange={(e)=>{setauther(e.target.value)}} placeholder="author" class="form-input" />
            </label>
          </div>
          <div class="form-group">
            <label>
              <span class="sr-only">description</span>
              <input type="text" onChange={(e)=>{setdiscription(e.target.value)}} placeholder="description" class="form-input" />
            </label>
          </div>
          <div class="form-group">
            <label>
            <span class="sr-only">audio file</span>
            
        <input type='file'  onChange={uploadingaudiofile} required/>
            </label>
          </div>
          <div class="form-group">
            <label>
            <span class="sr-only">image file</span>
            
        <input type='file' onChange={uploadingimagefile} required/>
            </label>
          </div>
          <div class="form-group">
            <input type="submit" value="Submit" class="form-submit"/>
          </div>
        </form>
      </div>
    </section>
  </main>
  )
}

export default UploadAudio