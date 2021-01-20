import {logicLeft} from "./logic";

const LEFT = 'left';
const RIGHT = 'right';
const UP = 'up';
const DOWN = 'down';
const ANIME = 'anime';
const RESET_ALL = 'reset';
const ANIME_RESET_EFFECT = 'resetEffect';
const SET_CURRENT_STATE= 'setCurrentState';
const SET_TIMEOUT='setTIMEOUT';

let initialState = {

    oneRaw: {
        one: {value: 2, anime: null, timeout:false},
        two: {value: 2, anime: null, timeout:false},
        three: {value: 2, anime: null,timeout:false},
        four: {value: 4, anime: null,timeout:false}
    },
    twoRaw: {
        one: {value: 2, anime: null, timeout:false},
        two: {value: 2, anime: null, timeout:false},
        three: {value: 2, anime: null, timeout:false},
        four: {value: 2, anime: null, timeout:false}
    },
    threeRaw: {
        one: {value: 2, anime: null, timeout:false},
        two: {value: 2, anime:  null, timeout:false},
        three: {value: 2, anime: null, timeout:false},
        four: {value: 2, anime: null, timeout:false}
    },
    fourRaw: {
        one: {value: 4, anime:  null, timeout:false},
        two: {value: 4, anime:  null, timeout:false},
        three: {value: 4, anime: null, timeout:false},
        four: {value: 4, anime: null, timeout:false}
    },
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
                oneRaw: {
                    one: {value: 2, anime: 1, timeout:false},
                    two: {value: 2, anime: 1, timeout:false},
                    three: {value: 2, anime: null,timeout:false},
                    four: {value: 4, anime: null,timeout:false}
                },
                twoRaw: {
                    one: {value: 32, anime: 1, timeout:false},
                    two: {value: 64, anime: 1, timeout:false},
                    three: {value: 64, anime: null, timeout:false},
                    four: {value: 128, anime: null, timeout:false}
                },
                threeRaw: {
                    one: {value: 256, anime: null, timeout:false},
                    two: {value: 512, anime:  null, timeout:false},
                    three: {value: 1024, anime: null, timeout:false},
                    four: {value: 2048, anime: null, timeout:false}
                },
                fourRaw: {
                    one: {value: 8192, anime:  null, timeout:false},
                    two: {value: 16384, anime:  null, timeout:false},
                    three: {value: 32768, anime: null, timeout:false},
                    four: {value: 65536, anime: null, timeout:false}
                }
            }
        }
        case RESET_ALL: {
            return initialState
        }
        case ANIME_RESET_EFFECT: {
            return {
                ...state,
                oneRaw: {
                    one:    {value: state.oneRaw.one.value,     anime: null, timeout:state.oneRaw.one.timeout},
                    two:    {value: state.oneRaw.two.value,     anime: null, timeout:state.oneRaw.two.timeout},
                    three:  {value: state.oneRaw.three.value,   anime: null, timeout:state.oneRaw.three.timeout},
                    four:   {value: state.oneRaw.four.value,    anime: null, timeout:state.oneRaw.four.timeout}
                },twoRaw: {
                    one:    {value: state.twoRaw.one.value,     anime: null, timeout:state.twoRaw.one.timeout},
                    two:    {value: state.twoRaw.two.value,     anime: null, timeout:state.twoRaw.two.timeout},
                    three:  {value: state.twoRaw.three.value,   anime: null, timeout:state.twoRaw.three.timeout},
                    four:   {value: state.twoRaw.four.value,    anime: null, timeout:state.twoRaw.four.timeout}
                },threeRaw: {
                    one:    {value: state.threeRaw.one.value,     anime: null, timeout:state.threeRaw.one.timeout},
                    two:    {value: state.threeRaw.two.value,     anime: null, timeout:state.threeRaw.two.timeout},
                    three:  {value: state.threeRaw.three.value,   anime: null, timeout:state.threeRaw.three.timeout},
                    four:   {value: state.threeRaw.four.value,    anime: null, timeout:state.threeRaw.four.timeout}
                },fourRaw: {
                    one:    {value: state.fourRaw.one.value,     anime: null, timeout:state.fourRaw.one.timeout},
                    two:    {value: state.fourRaw.two.value,     anime: null, timeout:state.fourRaw.two.timeout},
                    three:  {value: state.fourRaw.three.value,   anime: null, timeout:state.fourRaw.three.timeout},
                    four:   {value: state.fourRaw.four.value,    anime: null, timeout:state.fourRaw.four.timeout}
                }
            }
        }
        case SET_CURRENT_STATE: {
            return {
                ...state,
                oneRaw: {
                    one: {value: action.newState.oneRaw.one.value, anime: action.newState.oneRaw.one.anime, timeout:action.newState.oneRaw.one.timeout},
                    two: {value: action.newState.oneRaw.two.value, anime: action.newState.oneRaw.one.anime, timeout:action.newState.oneRaw.one.timeout},
                    three: {value: action.newState.oneRaw.three.value, anime: action.newState.oneRaw.three.anime, timeout:action.newState.oneRaw.three.timeout},
                    four: {value: action.newState.oneRaw.four.value, anime: action.newState.oneRaw.four.anime, timeout:action.newState.oneRaw.four.timeout}
                },
                twoRaw: {
                    one: {value: action.newState.twoRaw.one.value, anime: action.newState.twoRaw.one.anime, timeout:action.newState.twoRaw.one.timeout},
                    two: {value: action.newState.twoRaw.two.value, anime: action.newState.twoRaw.two.anime, timeout:action.newState.twoRaw.two.timeout},
                    three:{value: action.newState.twoRaw.three.value, anime: action.newState.twoRaw.three.anime, timeout:action.newState.twoRaw.three.timeout},
                    four: {value: action.newState.twoRaw.four.value, anime:action.newState.twoRaw.four.anime, timeout:action.newState.twoRaw.four.timeout}
                },
                threeRaw: {
                    one: {value: action.newState.threeRaw.one.value, anime: action.newState.threeRaw.one.anime, timeout:action.newState.threeRaw.one.timeout},
                    two: {value: action.newState.threeRaw.two.value, anime: action.newState.threeRaw.two.anime, timeout:action.newState.threeRaw.two.timeout},
                    three:{value: action.newState.threeRaw.three.value, anime: action.newState.threeRaw.three.anime, timeout:action.newState.threeRaw.three.timeout},
                    four: {value: action.newState.threeRaw.four.value, anime:action.newState.threeRaw.four.anime, timeout:action.newState.threeRaw.four.timeout}
                },
                fourRaw: {
                    one: {value: action.newState.fourRaw.one.value, anime: action.newState.fourRaw.one.anime, timeout:action.newState.fourRaw.one.timeout},
                    two: {value: action.newState.fourRaw.two.value, anime: action.newState.fourRaw.two.anime, timeout:action.newState.fourRaw.two.timeout},
                    three:{value: action.newState.fourRaw.three.value, anime: action.newState.fourRaw.three.anime, timeout:action.newState.fourRaw.three.timeout},
                    four: {value: action.newState.fourRaw.four.value, anime:action.newState.fourRaw.four.anime, timeout:action.newState.fourRaw.four.timeout}
                }
            }
        }
        case SET_TIMEOUT: {
            return {
                ...state, ...state,
                oneRaw: {
                    one:    {value: state.oneRaw.one.value,     anime: state.oneRaw.one.anime, timeout:null},
                    two:    {value: state.oneRaw.two.value,     anime: state.oneRaw.two.anime, timeout:null},
                    three:  {value: state.oneRaw.three.value,   anime: state.oneRaw.three.anime, timeout:null},
                    four:   {value: state.oneRaw.four.value,    anime: state.oneRaw.four.anime, timeout:null}
                },twoRaw: {
                    one:    {value: state.twoRaw.one.value,     anime: state.twoRaw.one.anime, timeout:null},
                    two:    {value: state.twoRaw.two.value,     anime: state.twoRaw.two.anime, timeout:null},
                    three:  {value: state.twoRaw.three.value,   anime: state.twoRaw.three.anime, timeout:null},
                    four:   {value: state.twoRaw.four.value,    anime: state.twoRaw.four.anime, timeout:null}
                },threeRaw: {
                    one:    {value: state.threeRaw.one.value,     anime: state.threeRaw.one.anime, timeout:null},
                    two:    {value: state.threeRaw.two.value,     anime: state.threeRaw.two.anime, timeout:null},
                    three:  {value: state.threeRaw.three.value,   anime: state.threeRaw.three.anime, timeout:null},
                    four:   {value: state.threeRaw.four.value,    anime: state.threeRaw.four.anime, timeout:null}
                },fourRaw: {
                    one:    {value: state.fourRaw.one.value,     anime: state.fourRaw.one.anime, timeout:null},
                    two:    {value: state.fourRaw.two.value,     anime: state.fourRaw.two.anime, timeout:null},
                    three:  {value: state.fourRaw.three.value,   anime: state.fourRaw.three.anime, timeout:null},
                    four:   {value: state.fourRaw.four.value,    anime: state.fourRaw.four.anime, timeout:null}
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
export const ACSetAnimation = () => ({type: ANIME})
export const ACResetState = () => ({type: RESET_ALL})
export const ACResetAnimation = () => ({type: ANIME_RESET_EFFECT})
export const ACSetCurrentState = (newState) => ({type: SET_CURRENT_STATE, newState:newState})
export const ACSetTimeout=()=>({type: SET_TIMEOUT})

export default mainReducer;