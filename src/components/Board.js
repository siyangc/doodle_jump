import React, { Component } from 'react'

export default class Board extends Component {

    boardStyle = {
        width: "30px",
        height: "10px",
        backgroundColor: "yellow",
        position: "absolute",
        bottom:this.props.pos[2],
        left: this.props.pos[1]
    }

    render() {
        return (
            <div  style={this.boardStyle}>
                
            </div>
        )
    }
}


