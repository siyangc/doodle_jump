import React, { useState, useEffect } from 'react';
import Board from './Board';
//import {useSelector} from 'react-redux';
export default function Canvas(){
        const state = {
            canvasWidth:300,
            boardWidth:30,        
        }
        
        //const canvasWidth = useSelector(state=>state.size.canvasWidth)
        const canvasStyle = {
            width: '300px',
            height: "450px",
            backgroundColor: "green",
            margin: "auto",
            marginTop: "30px",
            position: 'relative',
            overflow:"hidden"
        }       

        //position of each board
        const generateInitBoardsPos = () => {
            let initBoardsPos = [[0,100,50]]
            for(let i=0;i<9;i++){
                let boardLeftPos = randomBoardLeftPos()
                let boardRelativeBottomPos = randomBoardRelativeBottomPos()
                initBoardsPos.push([i+1,boardLeftPos,boardRelativeBottomPos+initBoardsPos[i][2]])
            }  
            return initBoardsPos
            //setBoardsPos([initBoardsPos])          
            
        }
        const randomBoardLeftPos = () => {
            return Math.random() * (state.canvasWidth - state.boardWidth)
        }
        const randomBoardRelativeBottomPos = () => {
            return Math.random() * (60-40) + 40
        }

        const [boardsPos, setBoardsPos] = useState(generateInitBoardsPos());
        useEffect(()=>{
            //generateInitBoardsPos()         
             console.log(boardsPos)
             console.log('haha')
         },[])
        
        return (
            <div style={canvasStyle}>
                {boardsPos.map((pos)=>{
                    return (<Board pos={pos} key={pos[0]}/>)
                })}
            </div>
        )
        
    }

