import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coors, setcoors] = useState({x:0,y:0})
    const {x,y} = coors;

    const mouseMove =(e)=>{
        const coors = {x:e.x, y:e.y};
        setcoors(coors);
    }

    useEffect(() => {
        window.addEventListener('mousemove',mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            console.log("componente desmontado");
        }
    }, [])
    
    
    return (
        <div>
            <h2>eres genial</h2>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
