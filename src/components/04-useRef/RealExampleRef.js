import React, { useState } from 'react'
import "../02-useEffect/effects.css"
import { MultipleCustomHooks } from '../03-ejemplos/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>
            { show && <MultipleCustomHooks/>}
            <button
                className="btn btn-primary mt-5"
                onClick={()=>{
                    setShow( !show);
                }}
            >
                Show/Hidden
            </button>
        </div>
    )
}
