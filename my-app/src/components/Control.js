import React from 'react'
import './Control.css'
function Control(props) {

    function plays(){
        props.setplay(()=>{
            return !props.play
        })
    }

  return (
    <div className='buttonsam'>
        <button onClick={()=>{props.skip('backword')}} class="custom-btn btn-4"><span>backword</span></button>
        <button onClick={()=>{plays()}} class="custom-btn btn-4"><span>pause</span></button>
         <button onClick={()=>{props.skip('forward')}} class="custom-btn btn-4"><span>forward</span></button>
    </div>
  )
}

export default Control