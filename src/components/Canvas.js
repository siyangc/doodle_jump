import React from 'react';
import Game from './Game';
import {Provider} from 'react-redux';
import store from '../store';
export default function Canvas(props){        


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
        <Provider store={store}>    
            <div style={canvasStyle}>
                <Game />                                      
            </div>
        </Provider>
        )        
    }

