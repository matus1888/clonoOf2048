 const LEFT = 'left';
 const RIGHT = 'right';
 const UP = 'up';
 const DOWN = 'down';
 const NULL= 'null';
 const ADD_SCORE= 'score'


let initialState = {
    key: null,
    score: 0
}
let keyPressReducer = (state = initialState, action) => {
    switch (action.type) {
        case LEFT: {
            return{
                ...state, key: LEFT
            }
        }
        case RIGHT: {
            return{
                ...state, key: RIGHT
            }
        }
        case UP: {
            return{
                ...state, key: UP
            }
        }
        case DOWN: {
            return{
                ...state, key: DOWN
            }
        }
        case NULL: {
            return{
                ...state, key: null
            }
        }
        case ADD_SCORE: {
            return{
                ...state, score: state.score+action.score
            }
        }
        default :
            return initialState

    }
}
export const actionCreatorLeft = () => ({type: LEFT})
export const actionCreatorRight = () => ({type: RIGHT})
export const actionCreatorUP = () => ({type: UP})
export const actionCreatorDown = () => ({type: DOWN})
export const actionCreatorNull = () => ({type: NULL})
export const actionCreatorAddScore = (score) => ({type:ADD_SCORE,score:score })


export default keyPressReducer;