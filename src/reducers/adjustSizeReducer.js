const initialState = {
    canvasWidth: 300,
    canvasHeight: 450,
    boardWidth: 45,
    boardHeight: 10,
    doodleWidth: 40,
    doodleHeight: 40
}

export const adjustSizeReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}