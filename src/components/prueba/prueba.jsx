import React from 'react'

import characters from "../mocks/characters"

export default function Prueba() {
    return (
        <div>
            {characters.map((element,idx)=>{
                return(
                    <div key={idx} >
                        <p>{element.id}</p>
                        <p>{element.name}</p>
                        <p>{element.gender}</p>
                        <p>{element.homeworld}</p>
                        <p>{element.species}</p>
                        <img src={element.img} alt="" />
                        <p>{element.films.map((el,id)=>(el))}</p>
                    </div>
                )
            })}
        </div>
    )
}
