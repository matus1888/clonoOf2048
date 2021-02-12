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
    // console.log(matrixOfState)
    let massiveR= getMassiveOnMatrix(matrixOfState)
    // console.log(massiveR)
    let massiveL=getMassiveOnMatrix(getLeftRowsOutMatrix(matrixOfState))
    // console.log(massiveL)
    let massiveU=getMassiveOnMatrix(getUpRowsOutMatrix(matrixOfState))
    // console.log(massiveU)
    let massiveD=getMassiveOnMatrix(getDownRowsOutMatrix(matrixOfState))
    // console.log(massiveD)
    massiveR.forEach(x=>{
        if(x===0) {
            // console.log('null in massiveR')
            isGameOver=false
        }
    })
    for (let j=0; j<=3; j++){
    for (let i=1; i<=3; i++){
        // console.log('in R')
        // console.log(massiveR[(i+j*4)-1]+' Сравнили  с '+massiveR[(i+j*4)] )
        if(massiveR[(i+j*4)-1]===massiveR[(i+j*4)]) {
            isGameOver=false
        }
        }}
    for (let j=0; j<=3; j++){
    for (let i=1; i<=3; i++){
        // console.log('in L')
        // console.log(massiveL[(i+j*4)-1]+' Сравнили  с '+massiveL[(i+j*4)] )
        if(massiveL[(i+j*4)-1]===massiveL[(i+j*4)]) {
            isGameOver=false
        }
    }}
    for (let j=0; j<=3; j++){
    for (let i=1; i<=3; i++){
        // console.log('in D')
        // console.log(massiveD[(i+j*4)-1]+' Сравнили  с '+massiveD[(i+j*4)] )
        if(massiveD[(i+j*4)-1]===massiveD[(i+j*4)]) {
            isGameOver=false
        }
    }}
    for (let j=0; j<=3; j++){
    for (let i=1; i<=3; i++){
        // console.log('in U')
        // console.log(massiveU[(i+j*4)-1]+' Сравнили  с '+massiveU[(i+j*4)] )
        if(massiveU[(i+j*4)-1]===massiveU[(i+j*4)]) {
            isGameOver=false
        }
    }}

    return isGameOver
}
export default gameOver