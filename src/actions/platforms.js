export const initPlatforms = (platforms) => {
    return {
        type: "INITIAL_PLATFORMS",
        payload: platforms
    }
}

export const platformsFall = (platforms) => {
    return {
        type: "PLATFORMS_FALL",
        payload: platforms
    }
}