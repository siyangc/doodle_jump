import React from 'react'
import {useSelector} from 'react-redux';
export default function Doodler() {
    const { 
        doodleWidth,
        doodleHeight
    } = useSelector(state=>state.size)

    const {
        left,
        bottom
    } = useSelector(state=>state.doodler)
    const doodleStyle = {
        background: "url(./materials/doodler.png)",
        width: doodleWidth,
        height: doodleHeight,
        backgroundSize: "contain",
        position: "absolute",
        bottom: bottom,
        left: left
    }
    return (
        <div style={doodleStyle}>
            
        </div>
    )
}
