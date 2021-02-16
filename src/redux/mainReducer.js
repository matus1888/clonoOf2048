const ANIME = 'anime';
const RESET_ALL = 'reset';
const ANIME_RESET_EFFECT = 'resetEffect';
const SET_CURRENT_STATE= 'setCurrentState';


let initialState = {

    oneRaw: {
        one: {value: 2, anime: 0 },
        two: {value: 0, anime: 0 },
        three: {value: 0, anime: 0},
        four: {value: 0, anime: 0}
    },
    twoRaw: {
        one: {value: 0, anime: 0},
        two: {value: 0, anime: 0},
        three: {value: 0, anime: 0},
        four: {value: 0, anime: 0}
    },
    threeRaw: {
        one: {value: 0, anime: 0},
        two: {value: 0, anime:  0},
        three: {value: 0, anime: 0},
        four: {value: 0, anime: 0}
    },
    fourRaw: {
        one: {value: 0, anime:  0},
        two: {value: 0, anime:  0},
        three: {value: 0, anime: 0},
        four: {value: 0, anime: 0}
    },
    score:0
}
let mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case ANIME: {
            return {
                ...state,
                oneRaw: {
                    one: {value: 2, anime: 1},
                    two: {value: 2, anime: 1},
                    three: {value: 2, anime: 0},
                    four: {value: 4, anime: 0}
                },
                twoRaw: {
                    one: {value: 32, anime: 1},
                    two: {value: 64, anime: 1},
                    three: {value: 64, anime: 0},
                    four: {value: 128, anime: 0}
                },
                threeRaw: {
                    one: {value: 256, anime: 0},
                    two: {value: 512, anime:  0},
                    three: {value: 1024, anime: 0},
                    four: {value: 2048, anime: 0}
                },
                fourRaw: {
                    one: {value: 8192, anime:  0},
                    two: {value: 16384, anime:  0},
                    three: {value: 32768, anime: 0},
                    four: {value: 65536, anime: 0}
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
                    one:    {value: state.oneRaw.one.value,     anime: 0},
                    two:    {value: state.oneRaw.two.value,     anime: 0},
                    three:  {value: state.oneRaw.three.value,   anime: 0},
                    four:   {value: state.oneRaw.four.value,    anime: 0}
                },twoRaw: {
                    one:    {value: state.twoRaw.one.value,     anime: 0},
                    two:    {value: state.twoRaw.two.value,     anime: 0},
                    three:  {value: state.twoRaw.three.value,   anime: 0},
                    four:   {value: state.twoRaw.four.value,    anime: 0}
                },threeRaw: {
                    one:    {value: state.threeRaw.one.value,     anime: 0},
                    two:    {value: state.threeRaw.two.value,     anime: 0},
                    three:  {value: state.threeRaw.three.value,   anime: 0},
                    four:   {value: state.threeRaw.four.value,    anime: 0}
                },fourRaw: {
                    one:    {value: state.fourRaw.one.value,     anime: 0},
                    two:    {value: state.fourRaw.two.value,     anime: 0},
                    three:  {value: state.fourRaw.three.value,   anime: 0},
                    four:   {value: state.fourRaw.four.value,    anime: 0}
                }
            }
        }
        case SET_CURRENT_STATE: {
            return {
                ...state,
                oneRaw: {
                    one: {value: action.newState.oneRaw.one.value, anime: action.newState.oneRaw.one.anime},
                    two: {value: action.newState.oneRaw.two.value, anime: action.newState.oneRaw.two.anime},
                    three: {value: action.newState.oneRaw.three.value, anime: action.newState.oneRaw.three.anime},
                    four: {value: action.newState.oneRaw.four.value, anime: action.newState.oneRaw.four.anime}
                },
                twoRaw: {
                    one: {value: action.newState.twoRaw.one.value, anime: action.newState.twoRaw.one.anime},
                    two: {value: action.newState.twoRaw.two.value, anime: action.newState.twoRaw.two.anime},
                    three:{value: action.newState.twoRaw.three.value, anime: action.newState.twoRaw.three.anime},
                    four: {value: action.newState.twoRaw.four.value, anime:action.newState.twoRaw.four.anime}
                },
                threeRaw: {
                    one: {value: action.newState.threeRaw.one.value, anime: action.newState.threeRaw.one.anime},
                    two: {value: action.newState.threeRaw.two.value, anime: action.newState.threeRaw.two.anime},
                    three:{value: action.newState.threeRaw.three.value, anime: action.newState.threeRaw.three.anime},
                    four: {value: action.newState.threeRaw.four.value, anime:action.newState.threeRaw.four.anime}
                },
                fourRaw: {
                    one: {value: action.newState.fourRaw.one.value, anime: action.newState.fourRaw.one.anime},
                    two: {value: action.newState.fourRaw.two.value, anime: action.newState.fourRaw.two.anime},
                    three:{value: action.newState.fourRaw.three.value, anime: action.newState.fourRaw.three.anime},
                    four: {value: action.newState.fourRaw.four.value, anime:action.newState.fourRaw.four.anime}
                },
                score: action.newState.score
            }
        }

        default :
            return state

    }
}
export const ACSetAnimation = () => ({type: ANIME})
export const ACResetState = () => ({type: RESET_ALL})
export const ACResetAnimation = () => ({type: ANIME_RESET_EFFECT})
export const ACSetCurrentState = (newState) => ({type: SET_CURRENT_STATE, newState:newState})

export default mainReducer;