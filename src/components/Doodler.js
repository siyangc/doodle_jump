import React, { useState, useEffect }from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {normal,down} from '../actions/doodlerJumpTypes';
export default function Doodler() {
    const dispatch = useDispatch();
    const { 
        doodleWidth,
        doodleHeight
    } = useSelector(state=>state.size)

    const {
        left,
        bottom,
        jumpHeight
    } = useSelector(state=>state.doodler)

   // const [bottom,setBottom] = useState(0)
    const doodleStyle = {
        background: "url(./materials/doodler.png)",
        width: doodleWidth,
        height: doodleHeight,
        backgroundSize: "contain",
        position: "absolute",
        bottom: bottom,
        left: left
    }
    
    const [flag,setFlag] = useState(true)
    useEffect(()=>{   
        if(bottom>=jumpHeight){
            setFlag(false)
        }
        if(bottom<=0){
            setFlag(true)
        }
        if(flag){
            const jump = setInterval(()=>{
                dispatch(normal())          
            },30)
            return ()=>{
                clearInterval(jump)
            }
        }        
        else{
            const fall = setInterval(()=>{
                dispatch(down())
            },30)
            return ()=>{
                clearInterval(fall)
            }
        }
        
    },[bottom])
    return (
        <div style={doodleStyle}>
            
        </div>
    )
}
