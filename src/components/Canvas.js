import React, { useState, useEffect } from 'react';
import Board from './Board';
import Doodler from './Doodler';
import {useSelector} from 'react-redux';
export default function Canvas(){
        
        const { 
            canvasWidth,
            canvasHeight, 
            boardWidth,
        } = useSelector(state=>state.size)

        const canvasStyle = {
            width: canvasWidth,
            height: canvasHeight,
            background: "url(./materials/bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            margin: "auto",
            marginTop: "200px",
            position: 'relative',
            overflow:"hidden"
        }       

        //position of each board
        const generateInitBoardsPos = () => {
            let initBoardsPos = [[0,100,50]]
            for(let i=0;i<15;i++){
                let boardLeftPos = randomBoardLeftPos()
                let boardRelativeBottomPos = randomBoardRelativeBottomPos()
                initBoardsPos.push([i+1,boardLeftPos,boardRelativeBottomPos+initBoardsPos[i][2]])
            }  
            return initBoardsPos         
        }
        const randomBoardLeftPos = () => {
            return Math.random() * (canvasWidth - boardWidth)
        }
        const randomBoardRelativeBottomPos = () => {
            return Math.random() * (60-40) + 40
        }

        const [boardsPos] = useState(generateInitBoardsPos());
        // useEffect(()=>{
        //      console.log(boardsPos)
        //  },[])
        
        return (
            <div style={canvasStyle}>
                {boardsPos.map((pos)=>{
                    return (<Board pos={pos} key={pos[0]}/>)
                })}
                <Doodler />
            </div>
        )        
    }

