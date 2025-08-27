import React from 'react'

 function Functionclick() {

    function clicked(){
        console.log('button clicked')
    }
  return (
    <div>
      <button onClick={clicked}>Click me</button>
    </div>
  )
}

export default Functionclick