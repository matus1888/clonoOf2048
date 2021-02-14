// функция приминает матрицу oldAnimation и матрицу  oldMatrixValue
// возвращает количество очков, которое нужно прибавить к новому стейту
import {getMassiveOnMatrix} from "./logic";

export let getScoreOfMatrixes=(newAnimationMatrix, oldMatrixValue)=> {
    let massiveOldAnimation=getMassiveOnMatrix(newAnimationMatrix);
    let massiveOldMatrixValue=getMassiveOnMatrix(oldMatrixValue);
    let massiveOfDoubleTheValue=[]
    massiveOldAnimation.forEach((value, index)=>{
        if(value===4){
            massiveOfDoubleTheValue.push(index)
        }
    })
    let score=0;
    massiveOfDoubleTheValue.forEach(x=>{
        massiveOldMatrixValue.forEach((value, index)=>{
            if(index===x){
                score=score+(value*2)
                    }
                })
    })
    console.log('score='+score)
    return score
}