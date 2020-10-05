import React, {useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {
    normalJumpLeft,
    normalJumpRight, 
    normalJump, 
    switchToJump, 
    leftToRight, 
    rightToLeft,
    stopLeft,
    stopRight,
    stop
} from '../actions/doodlerMoveAction'
import {left,right} from '../actions/key.js'
import {initPlatforms, platformsFall} from '../actions/platforms'

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

    const {
        platformsOrder
    } = useSelector(state=> state.platforms)
    const keyCode = useSelector(state=>state.keyCode)

    
    const generateInitPlatforms = () => {
        let initPlatforms = [[100,50]]
        for(let i=0;i<10;i++){
            let platformLeftPos = randomPlatformLeftPos()
            let platformRelativeBottomPos = randomPlatformRelativeBottomPos()
            initPlatforms.push([platformLeftPos,platformRelativeBottomPos+initPlatforms[i][1]])
        }  
        return initPlatforms      
    }
    const randomPlatformLeftPos = () => {
        return Math.random() * (260)
    }
    const randomPlatformRelativeBottomPos = () => {
        return Math.random() * 20 + 50
    }
    const generatePlatforms = () => {
        return [randomPlatformLeftPos(),randomPlatformRelativeBottomPos()]
    }

    useEffect(()=>{
        dispatch(initPlatforms(generateInitPlatforms()))
    },[])

    const checkCollision = () => {
        platformsOrder.forEach((platform)=>{
            if(
                doodlerX<platform[0]+platformWidth &&
                doodlerX+doodlerWidth>platform[0] &&
                doodlerY <platform[1]+platformHeight &&
                doodlerY >platform[1] &&
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
    const keyDown = (e) => {
        const a = setInterval(()=>{
            if(e.keyCode===37){
                dispatch(left())                
            }else if(e.keyCode===39){
                dispatch(right())                
            }
        },16)
            
        document.onkeyup = () => {
            clearInterval(a)
        }
        document.onkeydown = () => {
            clearInterval(a)
        }
    }
    const doodlerNormalMove = (keyCode) => {
        if(keyCode === 37){
            dispatch(normalJumpLeft())
        }else if (keyCode === 39){
            dispatch(normalJumpRight())
        }else{
            dispatch(normalJump())
        }
    }
    
    const platformsMove = () => {
        platformsOrder.forEach((platform)=>{
            platform[1] -= doodlerV
            if(platform[1]<-platformHeight){
                platformsOrder.shift()
            }
        })

        if(platformsOrder.length<10){
            platformsOrder.push(
                [
                    randomPlatformLeftPos(),
                    randomPlatformRelativeBottomPos() + platformsOrder[platformsOrder.length-1][1]
                ]
            )
        }
        dispatch(platformsFall(platformsOrder))
    }
    const doodlerMove = (keyCode) => {
        if(doodlerY>230 && doodlerV>0){
            //doodlerStop
            if(keyCode === 37){
                dispatch(stopLeft())
            }else if (keyCode === 39){
                dispatch(stopRight())
            }else{
                dispatch(stop())
            }
            platformsMove()
        }else{
            doodlerNormalMove(keyCode)
        }
    }
    useEffect(()=>{     
        
        window.addEventListener('keydown',keyDown)

        const game = setInterval(()=>{
            
            checkCollision()
            doodlerMove(keyCode)
    
        },16)

        const gameOver = doodlerY<0? true: false
        if(gameOver){
            clearInterval(game)
        } 

        return ()=>{
            clearInterval(game)
            window.removeEventListener('keydown',keyDown)
        }
    },[doodlerX,doodlerY,doodlerV,platformHeight,platformWidth,doodlerWidth,doodlerHeight,platformsOrder,keyCode])
    return (
        <div>
            <Canvas 
                platformsOrder={platformsOrder} 
            />  
        </div>
    )
}
