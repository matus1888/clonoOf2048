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
    for (let j=1; j<=3; j++){
    for (let i=1; i<=3; i++){
            if(massiveR[(i+j*4)-1]===massiveR[(i+j*4)])
                return false
        }}
    for (let j=0; j<3; j++){
    for (let i=1; i<=3; i++){
        if(massiveL[(i+j*4)-1]===massiveL[(i+j*4)])
            return false
    }}
    for (let j=0; j<3; j++){
    for (let i=1; i<=3; i++){
        if(massiveD[(i+j*4)-1]===massiveD[(i+j*4)])
            return false
    }}
    for (let j=0; j<3; j++){
    for (let i=1; i<=3; i++){
        if(massiveU[(i+j*4)-1]===massiveU[(i+j*4)])
            return false
    }}

    return isGameOver
}
export default gameOver