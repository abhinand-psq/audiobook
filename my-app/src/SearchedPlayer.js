import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
function SearchedPlayer() {
    const { id } = useParams()
const [Audio, setAudio] = useState('')
// const location = useLocation();
//   const { data } = location.state;
    useEffect(() => {
      let value=id.toLowerCase()
     fetch(`http://localhost:4000/users/searchedaudio?filename=${value}`,{
      method:'GET'
     }).then((res)=>{
      res.json().then((response)=>{
        setAudio(response)
      })
     })
    },[id])

    if(!id){
      return(<h3>loading</h3>)
    }

    if(!Audio){
      return(<h3>audio is not available</h3>)
    }

 
    
  return (


<div className='mainplayer'>
      <div class="player">
        <div class="imgBx">
          <img alt='loading' src={'http://localhost:4000/'+Audio.imagefilepath}/>
        </div>
        <h3>{Audio.name}</h3>
        <audio controls  src={'http://localhost:4000/'+Audio.audiofilepath }>
         
        </audio>
        
      </div>

    </div>
  )
}

export default SearchedPlayer