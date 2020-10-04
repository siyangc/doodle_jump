import React from 'react'
import {useSelector} from 'react-redux';

export default function Doodler() {

    const {
        doodlerX,
        doodlerY
    } = useSelector(state=>state.doodler)
    const { 
        doodlerWidth,
        doodlerHeight, 
    } = useSelector(state=>state.size)
    const doodleStyle = {
        background: "url(./materials/doodler.png)",
        width: doodlerWidth,
        height: doodlerHeight,
        backgroundSize: "contain",
        position: "absolute",
        bottom: doodlerY,
        left: doodlerX
    }

    
    return (
        <div style={doodleStyle}>
            
        </div>
    )
}
