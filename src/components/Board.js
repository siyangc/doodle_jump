import React from 'react'
import {useSelector} from 'react-redux';

export default function Board(props) {

    const { 
        boardWidth,
        boardHeight, 
    } = useSelector(state=>state.size)

    const boardStyle = {
        width: boardWidth,
        height: boardHeight,
        backgroundColor: "yellow",
        position: "absolute",
        bottom: props.pos[2],
        left: props.pos[1]
    }

    return (
        <div style={boardStyle}>
            
        </div>
    )
}



