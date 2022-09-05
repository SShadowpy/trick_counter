import React from 'react'
export default function Intro(props:any){
    return (
        <div className='intro-page'>
            <h1>Truco Counter</h1>
            <p>Your favorite counter of truco</p>
            <button onClick={props.handleClick1}>Start game of 15</button>
            <button onClick={props.handleClick2 }>Start game of 30</button>

        </div>
    )
}