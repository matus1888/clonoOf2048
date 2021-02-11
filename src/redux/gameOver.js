import {
    getDownRowsOutMatrix,
    getLeftRowsOutMatrix,
    getMassiveOnMatrix,
    getMatrixOnState,
    getUpRowsOutMatrix,
} from "./logic";

let gameOver = (state) => {
    let  isGameOver=true
    let matrixOfState = getMatrixOnState(state);
    let massiveR= getMassiveOnMatrix(matrixOfState)
    let massiveL=getMassiveOnMatrix(getLeftRowsOutMatrix(matrixOfState))
    let massiveU=getMassiveOnMatrix(getUpRowsOutMatrix(matrixOfState))
    let massiveD=getMassiveOnMatrix(getDownRowsOutMatrix(matrixOfState))
    massiveR.forEach(x=>{
        if(x===0){
            return false
        }
    })
    massiveL.forEach(x=>{
        if(x===0){
            return false
        }
    })
    massiveU.forEach(x=>{
        if(x===0){
            return false
        }
    })
    massiveD.forEach(x=>{
        if(x===0){
            return false
        }
    })
    for (let i=1; i<massiveR.length; i++){
        if(massiveR[i-1]===massiveR[i])
            return false
    }
    for (let i=1; i<massiveL.length; i++){
        if(massiveL[i-1]===massiveL[i])
            return false
    }
    for (let i=1; i<massiveD.length; i++){
        if(massiveD[i-1]===massiveD[i])
            return false
    }
    for (let i=1; i<massiveU.length; i++){
        if(massiveU[i-1]===massiveU[i])
            return false
    }

    return isGameOver
}
export default gameOver