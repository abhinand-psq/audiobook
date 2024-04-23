import React from 'react'

function Musicinfo(props) {
  return (
    <div>
         <h1>{ props.details[props.number] ? props.details[props.number].name : 'loading'}</h1>
    </div>
  )
}

export default Musicinfo