const initialState = {
    canvasWidth: 300,
    canvasHeight: 450,
    platformWidth: 45,
    platformHeight: 10,
    doodlerWidth: 40,
    doodlerHeight: 40
}

export const sizeReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}