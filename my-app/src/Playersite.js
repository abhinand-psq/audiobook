import React, { useEffect, useState } from 'react'
import Player from './components/Player'

function Playersite() {
  const [songs, setsongs] = useState([])
 useEffect(()=>{
  fetch('http://localhost:4000/users/addaudio').then((response)=>{
    response.json().then((res)=>{
      let filteredArray = res.filter(obj => obj.adminapproved === true);
console.log('anme'+filteredArray)
setsongs(filteredArray)
    })
  })
 },[])

   
                                          

     const [currents, setcurent] = useState(0)
    const [next , setnext]=useState(0)
    
  //   useEffect(() => {
     
  //  setcurent(()=>{
  
  //   }, [currents])
    
   
  return (
   
<Player songs={songs} setcurent={setcurent} current={currents} next={next}  songlength={songs.length-1}/>
  )
}

export default Playersite