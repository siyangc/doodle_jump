const initialState = {
    jumpHeight: 200,
    left: 100,
    bottom: 0
}

export const doodlerBehaviorReducer = (state = initialState,action) => {
    switch(action.type){
        case 'NORMAL_JUMP':
            
            return {
                ...state,
                bottom: state.bottom +5
            }

            
            
        case 'DOWN':

            return {
                ...state,
                bottom: state.bottom -5
            }

            
        default:
            return state;
    }
}