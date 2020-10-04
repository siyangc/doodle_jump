export const keyCodeReducer = (state=0,action) => {
    switch(action.type){
        case 'LEFT':
            return 37
        case 'RIGHT':
            return 39
        default:
            return 0
    }
}