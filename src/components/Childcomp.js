import React from 'react'

function Childcomp(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>CLick</button>
    </div>
  )
}

export default Childcomp
