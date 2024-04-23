import React, { useEffect, useState } from 'react'


import Carousels from './components/Carousels';
import Slider from './Slider/Slider';
import Slider1 from './Slider1';
import Roundslider from './Roundslider';
function Frontone() {
  useEffect(() => {
    fetch('http://localhost:4000/users/getall',{
      method:'GET'
    }).then((response)=>{
      response.json().then((res)=>{
          setadd(res)
      })
    })

  }, [])

  const [add, setadd] = useState('')
if(!add){
  return <p>loading</p>
}
  
  // useEffect(() => {
  //   axios.get('http://localhost:3000/allfiles').then(function (response) {console.log(response);})
  // }, [])
  
  return (
<div>
  <br/>
  <Slider alldata={add}/>
  <br/>
  <Carousels/>
  <Roundslider alldata={add}/>
  <Slider1 alldata={add}/>

  

</div>
  )
}

export default Frontone