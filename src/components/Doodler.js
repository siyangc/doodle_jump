import React, { useState, useEffect }from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {normal,down} from '../actions/doodlerMoveAction';
export default function Doodler() {
    const dispatch = useDispatch();

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
