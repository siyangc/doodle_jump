import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {normalJumpLeft, normalJumpRight, normalJump, switchToJump} from '../actions/doodlerMoveAction'
import {initPlatforms} from '../actions/platforms'
import Canvas from './Canvas'

export default function Game() {
    const dispatch = useDispatch();
    const {
        doodlerX,
        doodlerY,
        doodlerV
    } = useSelector(state=>state.doodler)

    const {
        platformWidth,
        platformHeight,
        doodlerWidth,
        doodlerHeight
    } = useSelector(state=> state.size)

    
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
        return Math.random() * (360)
    }
    const randomBoardRelativeBottomPos = () => {
        return Math.random() * 20 + 50
    }

    const doodlerMove = () => {
        console.log('a')
    }
    useEffect(()=>{
        dispatch(initPlatforms(generateInitBoardsPos()))
    },[])
    const platforms = useSelector(state=> state.platforms)

    const checkCollision = () => {
        console.log('aa')
        platforms.forEach((platform)=>{
            if(
                doodlerX<platform[1]+platformWidth &&
                doodlerX+doodlerWidth>platform[1] &&
                doodlerY <platform[2]+platformHeight &&
                doodlerY >platform[2] &&
                doodlerV <0
            ) {
                dispatch(switchToJump())
            }
        })
    }
    

    useEffect(()=>{     
        //checkCollision()
        const game = setInterval(()=>{
            checkCollision()
            
            //Make sure X-Y move together!!!
            //doodlerMove()
            //platformsMove()
            //switchToJump()
            dispatch(normalJump())         
        },16)

        const gameOver = doodlerY<0? true: false
        if(gameOver){
            clearInterval(game)
        } 

        return ()=>{
            clearInterval(game)
        }
    },[doodlerX,doodlerY,doodlerV,platformHeight,platformWidth,doodlerWidth,doodlerHeight,platforms])
    return (
        <div>
            <Canvas />  
        </div>
    )
}
