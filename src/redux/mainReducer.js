import {logicLeft} from "./logic";

const LEFT = 'left';
const RIGHT = 'right';
const UP = 'up';
const DOWN = 'down';
const ANIME = 'anime';
const ANIME_RESET = 'reset';
const ANIME_RESET_EFFECT = 'resetEffect'

let initialState = {
    currentState:
        {
            oneRaw: {one: 2, two: 2, three: 2, four: 4},
            twoRaw: {one: 32, two: 64, three: 64, four: 128},
            threeRaw: {one: 512, two: 1024, three: 2048, four: 4096},
            fourRaw: {one: 8192, two: 16384, three: 32768, four: 65536}
        },
    animationObject:
        {
            changed: false,
            oneRaw: {one: null, two: null, three: null, four: null},
            twoRaw: {one: null, two: null, three: null, four: null},
            threeRaw: {one: null, two: null, three: null, four: null},
            fourRaw: {one: null, two: null, three: null, four: null}
        }
}

let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LEFT: {
            return logicLeft(state)
        }
        case RIGHT: {
            return
        }
        case UP: {
            return
        }
        case DOWN: {
            return
        }
        case ANIME: {
            return {
                ...state,
                animationObject:
                    {
                        changed: true,
                        oneRaw: {one: 2, two: 1, three: null, four: null},
                        twoRaw: {one: 2, two: 1, three: null, four: null},
                        threeRaw: {one: null, two: null, three: null, four: null},
                        fourRaw: {one: null, two: null, three: null, four: null}
                    }
            }
        }
        case ANIME_RESET: {
            return initialState
        }
        case ANIME_RESET_EFFECT: {
            return {
                ...state, animationObject: {
                    changed: false,
                    oneRaw: {one: null, two: null, three: null, four: null},
                    twoRaw: {one: null, two: null, three: null, four: null},
                    threeRaw: {one: null, two: null, three: null, four: null},
                    fourRaw: {one: null, two: null, three: null, four: null}
                }

            }
        }

        default :
            return state

    }
}
export const actionCreatorLeft = () => ({type: LEFT})
export const actionCreatorRight = () => ({type: RIGHT})
export const actionCreatorUp = () => ({type: UP})
export const actionCreatorDown = () => ({type: DOWN})
export const ACsetAnimation = () => ({type: ANIME})
export const ACresetState = () => ({type: ANIME_RESET})
export const ACresetAnimation = () => ({type: ANIME_RESET_EFFECT})

export default mainReducer;