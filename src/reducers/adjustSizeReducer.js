const initialState = {
    canvasWidth: 300,
    canvasHeight: 450,
    boardWidth: 30,
    boardHeight: 10
}

export const adjustSizeReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}