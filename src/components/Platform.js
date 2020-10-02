import React from 'react'
import {useSelector} from 'react-redux';

export default function Board(props) {

    const { 
        platformWidth,
        platformHeight, 
    } = useSelector(state=>state.size)

    const platformStyle = {
        width: platformWidth,
        height: platformHeight,
        backgroundColor: "green",
        position: "absolute",
        bottom: props.pos[2],
        left: props.pos[1],
        borderRadius: "25px 20px 25px 20px"
    }

    return (
        <div style={platformStyle}>
            
        </div>
    )
}



