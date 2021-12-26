import React from "react"

export default function Person(props){
    const {name}=props
    return(
        <div>
            <h1> hi</h1>
            <p>my name is {name}</p>
        </div>
    )
}