import React from "react";

const Greet=({name,hero})=>
     {

     return (

        <div>
            <h1>Hello {name} a.k.a {hero}</h1>
            {name.children}

        </div>
            
     )
     
   

     }


export default Greet;