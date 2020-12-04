import {fullOp,getNext} from "./logic";

const DOWN='down';
const UP='up';
const LEFT='left';
const RIGHT='right';

let initialState={
   a:[[0,0,0,0], [0,0,0,0],[0,0,0,0],[0,0,0,0]]}

const MainReducer=(state=initialState, action)=>{

        switch (action.type) {
            case UP :{
                let a= state.a
                let one=fullOp(a[0])
                let two=fullOp(a[1])
                let three=fullOp(a[2])
                let four=fullOp(a[3])
                let rezUp=[one,two,three,four]
                let next= getNext([one[3],two[3],three[3],four[3]] )
                let newUp=rezUp
                newUp[0][3]=next[0]; newUp[1][3]=next[1]; newUp[2][3]=next[2]; newUp[3][3]=next[3]
                return {a:newUp}
            }case DOWN :{
                let a= state.a
                let one=fullOp(     [a[0][3],a[0][2],a[0][1],a[0][0]])
                let two=fullOp(     [a[1][3],a[1][2],a[1][1],a[1][0]])
                let three=fullOp(   [a[2][3],a[2][2],a[2][1],a[2][0]])
                let four=fullOp(    [a[3][3],a[3][2],a[3][1],a[3][0]])
                let newDown=[[one[3],   one[2],     one[1],     one[0]],
                            [two[3],    two[2],     two[1] ,    two[0]],
                            [three[3],  three[2],   three[1],   three[0]],
                            [four[3],   four[2],    four[1],    four[0] ] ]
                let next= getNext([one[3],two[3],three[3],four[3]] )
                newDown[0][0]=next[0]; newDown[1][0]=next[1]; newDown[2][0]=next[2]; newDown[3][0]=next[3]
                return {a:newDown}
            }case LEFT :{
                let a= state.a
                let one=fullOp(  [a[0][0],a[1][0],a[2][0],a[3][0]])
                let two=fullOp(  [a[0][1],a[1][1],a[2][1],a[3][1]])
                let three=fullOp([a[0][2],a[1][2],a[2][2],a[3][2]])
                let four=fullOp( [a[0][3],a[1][3],a[2][3],a[3][3]])
                let newLEFT=[
                    [one[0],two[0],three[0],four[0]],
                    [one[1],two[1],three[1],four[1]],
                    [one[2],two[2],three[2],four[2]],
                    [one[3],two[3],three[3],four[3]],
                ]
                let next= getNext([one[3],two[3],three[3],four[3]] )
                newLEFT[3][0]=next[0]; newLEFT[3][1]=next[1]; newLEFT[3][2]=next[2]; newLEFT[3][2]=next[3]
                return {a:newLEFT}
            }case RIGHT : {
                let a = state.a
                let one = fullOp([a[3][0], a[2][0], a[1][0], a[0][0]])
                let two = fullOp([a[3][1], a[2][1], a[1][1], a[0][1]])
                let three = fullOp([a[3][2], a[2][2], a[1][2], a[0][2]])
                let four = fullOp([a[3][3], a[2][3], a[1][3], a[0][3]])
                let newRIGHT=[
                    [one[3],two[3],three[3],four[3]],
                    [one[2],two[2],three[2],four[2]],
                    [one[1],two[1],three[1],four[1]],
                    [one[0],two[0],three[0],four[0]],
                ]
                let next= getNext([one[3],two[3],three[3],four[3]] )
                newRIGHT[0][0]=next[0]; newRIGHT[0][1]=next[1]; newRIGHT[0][2]=next[2]; newRIGHT[0][2]=next[3]
                    return {a:newRIGHT}
            }
            default:{
                return state
            }

        }
}
export const actCrUP=()=>({type:UP})
export const actCrDOWN=()=>({type:DOWN})
export const actCrLEFT=()=>({type:LEFT})
export const actCrRIGHT=()=>({type:RIGHT})

export default MainReducer;
