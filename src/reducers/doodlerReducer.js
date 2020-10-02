const initialState = {
    doodlerX: 100,
    doodlerY: 0,
    doodlerV: 10,   // velocity
    doodlerA: 0.25  // acceleration
}

export const doodlerReducer = (state = initialState,action) => {
    switch(action.type){
        case 'NORMAL_JUMP_LEFT':
            return {
                ...state,
                doodlerX: state.doodlerX - 4,      
                doodlerY: state.doodlerY + state.doodlerV,
                doodlerV: state.doodlerV - state.doodlerA
            }
            
        case 'NORMAL_JUMP_RIGHT':
            return {
                ...state,
                doodlerX: state.doodlerX + 4,      
                doodlerY: state.doodlerY + state.doodlerV,
                doodlerV: state.doodlerV - state.doodlerA
            }

        case 'NORMAL_JUMP':
            return {
                ...state, 
                doodlerY: state.doodlerY + state.doodlerV,
                doodlerV: state.doodlerV - state.doodlerA
            }

        case 'SWITCH_TO_JUMP':
            return {
                ...state,
                doodlerV: 10
            }
        default:
            return state;
    }
}
