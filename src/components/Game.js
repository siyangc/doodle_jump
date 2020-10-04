import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {
    normalJumpLeft,
    normalJumpRight, 
    normalJump, 
    switchToJump, 
    leftToRight, 
    rightToLeft
} from '../actions/doodlerMoveAction'
import {left,right} from '../actions/key.js'
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

    const platforms = useSelector(state=> state.platforms)
    const keyCode = useSelector(state=>state.keyCode)
    const generateInitPlatforms = () => {
        let initPlatforms = [[0,100,50]]
        for(let i=0;i<15;i++){
            let platformLeftPos = randomPlatformLeftPos()
            let platformRelativeBottomPos = randomPlatformRelativeBottomPos()
            initPlatforms.push([i+1,platformLeftPos,platformRelativeBottomPos+initPlatforms[i][2]])
        }  
        return initPlatforms      
    }
    const randomPlatformLeftPos = () => {
        return Math.random() * (360)
    }
    const randomPlatformRelativeBottomPos = () => {
        return Math.random() * 20 + 50
    }


    useEffect(()=>{
        dispatch(initPlatforms(generateInitPlatforms()))
    },[])

    const checkCollision = () => {
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

        if(doodlerX< -doodlerWidth){
            dispatch(leftToRight())
        }else if(doodlerX > 300){
            dispatch(rightToLeft(doodlerWidth))
        }
    }   
    const keyDetect = (e) => {
        if(e.keyCode===37){
            dispatch(left())
        }else if(e.keyCode===39){
            dispatch(right())
        }
    }
    const doodlerMove = (keyCode) => {
        if(keyCode === 37){
            dispatch(normalJumpLeft())
        }else if (keyCode === 39){
            dispatch(normalJumpRight())
        }  else{
            dispatch(normalJump())
        }
    }
    useEffect(()=>{     
        //checkCollision()
        //keyDetect()
        const game = setInterval(()=>{
            checkCollision()
            doodlerMove(keyCode)

            //doodlerMove(keyDetect())

            //Make sure X-Y move together!!!
            
            //platformsMove()
            //switchToJump()
            //dispatch(normalJump())      
        },16)

        const gameOver = doodlerY<0? true: false
        if(gameOver){
            clearInterval(game)
        } 

        return ()=>{
            clearInterval(game)
        }
    },[doodlerX,doodlerY,doodlerV,platformHeight,platformWidth,doodlerWidth,doodlerHeight,platforms,keyCode])
    return (
        <div onKeyDown ={keyDetect} tabIndex="0">
            <Canvas />  
        </div>
    )
}
