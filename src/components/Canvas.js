import React from 'react';
import Platform from './Platform';
import Doodler from './Doodler';
import {useSelector} from 'react-redux';
export default function Canvas(props){
        const {
            platformsOrder
        } = useSelector(state=> state.platforms)

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

        return (
            <div style={canvasStyle}>
                {platformsOrder.map((pos)=>{
                    return (<Platform pos={pos}/>)
                })}
                <Doodler />
            </div>
        )        
    }

