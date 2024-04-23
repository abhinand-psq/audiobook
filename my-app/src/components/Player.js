import React, { useEffect, useRef, useState } from 'react'
import Control from './Control'
import Musicinfo from './Musicinfo'
import './player.css'
function Player(props) {
const first = useRef(null)
const [play, setplay] = useState(false)
const [next, setnext] = useState(0)

useEffect(() => {
  
  // src={'http://localhost:4000/'+props.songs[props.current].filepath }
  console.log('sidfbsi');
  props.songs[props.current]? console.log(props.songs[props.current].audiofilepath) : <p>nothing</p>
  props.songs[props.current]? console.log(props.songs[props.current]) : <p>nothing</p>
if(play){
    first.current.play()
}else{
    first.current.pause()
}
})

function skip(vala){
 
if(props.songlength > props.current){
  
  props.setcurent(()=>{
    if(vala==='forward'){
     let temp=props.current
     temp++
     return temp 
    }else if(vala==='backword'){
      let temp=props.current
      temp--
      return temp
    }
})
}else if(props.songlength == props.current){

  props.setcurent(()=>{
    return 0
  })
}else if(props.current == 0){
 
  props.setcurent(()=>{
    return props.songlength
  })
}

}

  return (


   <div className='mainplayer'>
      <div class="player">
        <div class="imgBx">
          <img alt='loading' src={props.songs[props.current]? 'http://localhost:4000/'+props.songs[props.current].imagefilepath : null }/>
        </div>
        <audio controls ref={first} src={props.songs[props.current]? 'http://localhost:4000/'+props.songs[props.current].audiofilepath : null }>
         
        </audio>
        <Musicinfo number={props.current} details={props.songs}/> 
    <Control skip={skip} setplay={setplay} play={play}/>
      </div>
   





    </div>
  )
}

export default Player

