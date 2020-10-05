const initialState = {
    platformsOrder: []
}

export const platformsReducer = (state=initialState,action) => {
    switch (action.type){
        case 'INITIAL_PLATFORMS':
            return {
                platformsOrder: action.payload
            }

        case 'PLATFORMS_FALL':
            return {
                platformsOrder: action.payload
            }
        default:
            return state
    }
}

