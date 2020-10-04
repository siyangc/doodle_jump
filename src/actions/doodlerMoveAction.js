export const normalJumpLeft = () => {
    return {
        type: 'NORMAL_JUMP_LEFT'
    }
}

export const normalJumpRight = () => {
    return {
        type: 'NORMAL_JUMP_RIGHT'
    }
}

export const normalJump = () => {
    return {
        type: 'NORMAL_JUMP'
    }
}

export const switchToJump = () => {
    return {
        type: 'SWITCH_TO_JUMP'
    }
}

export const leftToRight = () => {
    return {
        type: 'LEFT_TO_RIGHT'
    }
}

export const rightToLeft = (width) => {
    return {
        type: 'RIGHT_TO_LEFT',
        payload: width
    }
}