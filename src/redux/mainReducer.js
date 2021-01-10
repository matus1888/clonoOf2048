import  {logicLeft} from "./logic";

const LEFT='left';
const RIGHT='right';
const UP='up';
const DOWN='down';
const ANIME='anime';
const ANIME_RESET='reset';

let initialState={currentState:
        {oneRaw: {one: 2, two: 2, three: 2, four: 16},
        twoRaw: {one: 32, two: 64, three: 128, four: 256},
        threeRaw: {one: 512, two: 1024, three: 2048, four: 4096},
        fourRaw: {one: 8192, two: 16384, three: 32768, four: 65536}},
    animationObject:
        {oneRaw:{one: null, two: null, three: null, four: null},
        twoRaw: {one: null, two: null, three: null, four: null},
        threeRaw: {one: null, two: null, three: null, four: null},
        fourRaw: {one: null, two: null, three: null, four: null}}
}

    let mainReducer= (state=initialState, action) =>{
       switch (action.type){
           case LEFT:{
               return logicLeft(state)
           }
           case RIGHT:{return }
           case UP:{return }
           case DOWN:{return }
           case ANIME:{
               return {
                   ...state, animationObject:
                       {oneRaw:{one: null, two: null, three: null, four: null},
                           twoRaw: {one: 1, two: null, three: null, four: null},
                           threeRaw: {one: null, two: null, three: 1, four: 1},
                           fourRaw: {one: null, two: null, three: 1, four: null}}
               }
           }
           case ANIME_RESET:{
               return initialState
           }

           default :return state

       }
    }
export const actionCreatorLeft=()=>({type: LEFT})
export const actionCreatorRight=()=>({type: RIGHT})
export const actionCreatorUp=()=>({type: UP})
export const actionCreatorDown=()=>({type: DOWN})
export const ACsetAnimation=()=>({type: ANIME})
export const ACresetState=()=>({type: ANIME_RESET})

export default mainReducer;