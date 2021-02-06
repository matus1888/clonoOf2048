 const LEFT = 'left';
 const RIGHT = 'right';
 const UP = 'up';
 const DOWN = 'down';
 const NULL= 'null'


let initialState = {
    key: null
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
        default :
            return initialState

    }
}
export const actionCreatorLeft = () => ({type: LEFT})
export const actionCreatorRight = () => ({type: RIGHT})
export const actionCreatorUP = () => ({type: UP})
export const actionCreatorDown = () => ({type: DOWN})
export const actionCreatorNull = () => ({type: NULL})


export default keyPressReducer;