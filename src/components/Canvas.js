import React, { useState, useEffect } from 'react';
import Platform from './Platform';
import Doodler from './Doodler';
import {useSelector,useDispatch} from 'react-redux';

export default function Canvas(){
        const canvasStyle = {
            width: "300px",
            height: "450px",
            background: "url(./materials/bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            margin: "auto",
            marginTop: "200px",
            position: 'relative',
            overflow:"hidden"
        }       

        //position of each board
        

        const dispatch = useDispatch()
        
        
        
        const platforms = useSelector(state=>state.platforms)
        return (
            <div style={canvasStyle}>
                {platforms.map((pos)=>{
                    return (<Platform pos={pos} key={pos[0]}/>)
                })}
                <Doodler />
            </div>
        )        
    }

