export const platformsReducer = (state=[],action) => {
    switch (action.type){
        case 'INITIAL_PLATFORMS':
            return action.payload
        default:
            return state
    }

    
}