import React from 'react'
import Person from './Person'
function NameList() {
    //  const names=['Rida','Laiba','Areena','Ayesha']
    const persons=[
        {
            id: 1,
            name: 'Rida',
            age: 20
        },
          {
            id: 2,
            name: 'Laiba',
            age: 21
        }
        ,  {
            id: 3,
            name: 'Areena',
            age: 22
        }
    ]

    const personList= persons.map(person=><Person key={person.id} person={person}></Person>)
  return (
   
    <div>
          {
           personList
          }    
    </div>

  )
}

export default NameList
