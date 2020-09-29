import React, { Component } from 'react'
import Board from './Board'
export default class Canvas extends Component {
        state = {
            boardsPos:[],
            doodleJumpHeight:60,
            canvasWidth:300,
            boardWidth:30,        
        }
        
        canvasStyle = {
            width: this.state.canvasWidth + 'px',
            height: "450px",
            backgroundColor: "green",
            margin: "auto",
            marginTop: "30px",
            position: 'relative',
            overflow:"hidden"
        }
        componentDidMount(){
            this.generateInitBoardsPos()
        }

        //position of each board
        generateInitBoardsPos = () => {
            let initBoardsPos = [[0,100,50]]
            for(let i=0;i<9;i++){
                let boardLeftPos = this.randomBoardLeftPos()
                let boardRelativeBottomPos = this.randomBoardRelativeBottomPos()
                initBoardsPos.push([i+1,boardLeftPos,boardRelativeBottomPos+initBoardsPos[i][2]])
            }            
            this.setState({
                boardsPos: initBoardsPos
            },()=>{
                console.log(this.state.boardsPos)
            })
        }
        randomBoardLeftPos = () => {
            return Math.random() * (this.state.canvasWidth - this.state.boardWidth)
        }
        randomBoardRelativeBottomPos = () => {
            return Math.random() * (this.state.doodleJumpHeight-40) + 40
        }

        render() {
            return (
                <div style={this.canvasStyle}>
                    {this.state.boardsPos.map((pos)=>{
                        return (<Board pos={pos} key={pos[0]}/>)
                    })}
                </div>
            )
        }
    }

