import {rowSlide, shiftRow} from "./logic";
export let shiftRowGetAnimationOnePhase=(row)=> {
    let thisAnimeRow = {
        one: 0, two: 0, three: 0, four: 0
    }
        //{x,0,0,0}
    if ((row.one !== 0) && (row.two === 0) && (row.four === 0) && (row.three === 0)) {
        thisAnimeRow = {
            one: 3, two: 0, three: 0, four: 0
        }
        //{0,x,0,0}
    }else if((row.two!==0)&&(row.one===0)&&(row.three===0)&&(row.four===0)){
        thisAnimeRow={
            one:0,two: 2, three:0, four: 0
        }
        //{x,x,0,0}
    }else if ((row.one!==0)&&(row.two!==0)&&(row.four === 0) && (row.three === 0)) {
        thisAnimeRow = {
            one: 2, two: 2, three: 0, four: 0
        }
        //{x,0,0,x}
    } else if ((row.one!==0)&&(row.four!==0)&&(row.two === 0) && (row.three === 0)) {
        if(row.one===row.four){
            thisAnimeRow = {
            one: 3, two: 0, three: 0, four: 0
        }
        }else{
            thisAnimeRow = {
                one: 2, two: 0, three: 0, four: 0
            }
        }
        //{0,0,x,0}
    }else if((row.three!==0)&&(row.one===0)&&(row.two===0)&&(row.four===0)){
        thisAnimeRow = {
            one: 0, two: 0, three: 1, four: 0
        }
        //{x,0,x,0}
    } else if ((row.one!==0)&&(row.two === 0)&&(row.three!==0) && (row.four === 0)) {
        if(row.one===row.three){thisAnimeRow = {
            one: 3, two: 0, three: 1, four: 0
        }}else{
            thisAnimeRow = {
                one: 2, two: 0, three: 1, four: 0
            }
        }
        //{x,x,x,0}
    } else if ((row.one !== 0)&&(row.two !== 0)&&(row.three !== 0)&&(row.four === 0)) {
        if(row.two===row.three){
            thisAnimeRow = {
                one: 2, two: 2, three: 1, four: 0
            }
        }else if(row.one===row.two){
            thisAnimeRow = {
                one: 2, two: 1, three: 1, four: 0
            }
        }else{
            thisAnimeRow = {
                one: 1, two: 1, three: 1, four: 0
            }
        }
        //{x,x,0,x}
    } else if ((row.one!==0)&&(row.two!==0)&&(row.four!==0)&&(row.three === 0)) {
        thisAnimeRow = {
            one: 1, two: 1, three: 0, four: 0
        }
        //{x,0,x,x}
    } else if ((row.one!==0)&&(row.three!==0)&&(row.four!==0)&&(row.two === 0)) {
        if(row.three===row.four){
            thisAnimeRow = {
                one: 2, two: 0, three: 1, four: 0
            }
        }else if(row.one===row.three){
            thisAnimeRow = {
                one: 2, two: 0, three: 0, four: 0
            }
        }else{
            thisAnimeRow = {
            one: 1, two: 0, three: 0, four: 0
            }
        }
        //{0,0,x,x}
    }else if(((row.one===0)&&(row.two===0)&&(row.three!==0)&&(row.four!==0))){
        if(row.three===row.four) {
            thisAnimeRow = {
                one: 0, two: 0, three: 1, four: 0
            }
        }else{
                thisAnimeRow = {one: 0, two: 0, three: 0, four: 0}
            }
        //{0,x,0,x}
    }else if((row.one===0)&&(row.two!==0)&&(row.three===0)&&(row.four!==0)){
        if(row.two===row.four){
            thisAnimeRow= {one: 0, two: 2, three: 0, four: 0}
        }else{
            thisAnimeRow= {one: 0, two: 1, three: 0, four: 0}
        }
        //{0,x,x,0}
    }else if((row.one===0)&&(row.two!==0)&&(row.three !==0)&&(row.four===0)){
        if(row.two===row.three ){
            //спорный вопрос как разрешить эту анимацию
            thisAnimeRow= {one: 0, two: 2, three: 1, four: 0}
        }else {
            thisAnimeRow= {one: 0, two: 1, three: 1, four: 0}
        }
        //{0,x,x,x}
    }else if((row.one===0)&&(row.two!==0)&&(row.three !==0)&&(row.four!==0)){
        if(row.three===row.four){
            thisAnimeRow= {one: 0, two: 1, three: 1, four: 0}
        }else if(row.two===row.three){
            thisAnimeRow= {one: 0, two: 1, three: 0, four: 0}
        }else{
            thisAnimeRow= {one: 0, two: 0, three: 0, four: 0}
        }
        //{x,x,x,x}
    } else {
        if((row.one===row.two)&&(row.three===row.four)){
            thisAnimeRow = {one: 1, two: 0, three: 1, four: 0}
        }else if(row.three===row.two){
            thisAnimeRow = {one: 1, two: 1, three: 0, four: 0}
        }
        else if(row.three===row.four){
            thisAnimeRow = {one: 1, two: 1, three: 1, four: 0}
        }else if(row.one===row.two){
            thisAnimeRow = {one: 1, two: 0, three: 0, four: 0}
        }else{
            thisAnimeRow = {one: 0, two: 0, three: 0, four: 0}
        }
    }
    return thisAnimeRow
}
export let rowAnimationOnePhaseSlide = (row) => {
    console.log('input  row in rowAnimationOnePhaseSlide is')
    console.log(row)
// для данных расчетов использована логика:
// value:1 -  сдиг на одну клетку вправо:2 - сдвиг на 2 клетки вправо, :3 -сдвиг на 3 клетки вправо :0 - ничего
//Сдвиг элементов,  если есть нули

     let rowAnimationTwoPhaseSlide=(row)=>{
         console.log('input raw in rowAnimationTwoPhaseSlide is')
         console.log(row)

//Сдвиг элементов,  если есть нули
        let shiftRow=shiftRow(row)
         //Объявление исходного ВАРИАНТА(он же ОТВЕТ если никакие условия НЕ сработают)
         //здесь value anime: 4- это наш magic
         let returnedRow = {
             one: shiftRow.one,
             two: shiftRow.two,
             three: shiftRow.three,
             four: shiftRow.four
         }
         let returnedAnimationRow={
             one:0, two:0, three:0, four:0
         }
         let compare2Num = (a, b) => {
             if (b === 0) {
                 return {
                     a: 0, b: a
                 }
             }
             if (a === b) {
                 return {a: 0, b: 4}
             } else
                 return {a: a, b: b}
         }
         let oneAndTwo = compare2Num(shiftRow.one, shiftRow.two)
         let twoAndThree = compare2Num(shiftRow.two, shiftRow.three)
         let threeAndFour = compare2Num(shiftRow.three, shiftRow.four)


         //функция ПОПАРНОГО СРАВННЕНИЯ
         let pairwiseComparison = (oneAndTwo, threeAndFour) => {
             //Вариант когда результат содержит ноль посередине
             if (threeAndFour.a === 0) {
                 returnedRow = {
                     one: 0, two: oneAndTwo.a, three: oneAndTwo.b, four: threeAndFour.b
                 }
             } else {
                 //НЕ содежит НОЛЬ ПОСЕРЕДИНЕ
                 returnedRow = {
                     one: oneAndTwo.a, two: oneAndTwo.b, three: threeAndFour.a, four: threeAndFour.b
                 }
             }
             console.log('парное')
             console.log(returnedRow)
             return returnedRow
         }
         //для исключения ситуаций: input row is  {x:0;y:1;z:1;c:2}
         //                         output row is {x:0;y:1;z:1;c:2}
         let comparisonOfCentralMembers = (twoAndThree) => {
             console.log('по центральным')
             if(twoAndThree.a===0){
                 returnedRow={one: 0, two: shiftRow.one, three: twoAndThree.b, four: shiftRow.four}
             }else {
                 returnedRow = {one: shiftRow.one, two: twoAndThree.a, three: twoAndThree.b, four: shiftRow.four}
             }
             console.log(returnedAnimationRow)
             return returnedAnimationRow
         }
         let result = ((shiftRow.three !== shiftRow.four) && shiftRow.two === shiftRow.three)
             ? comparisonOfCentralMembers(twoAndThree) : pairwiseComparison(oneAndTwo, threeAndFour)

         return result
     }}
export let testRowAnimationSlidePhaseOne = () => {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            for (let z = 0; z < 3; z++) {
                for (let c = 0; c < 3; c++) {
                    let rowSlide1 = shiftRowGetAnimationOnePhase({
                        one: x,
                        two: y,
                        three: z,
                        four: c
                    })
                    console.log('input row is {x:' + x + ';y:' + y + ';z:' + z + ';c:' + c + '} ' +
                        ' output animationRow is {x:' + rowSlide1.one + ';y:' + rowSlide1.two + ';z:'
                        + rowSlide1.three + ';c:' + rowSlide1.four + '}')
                }
            }
        }
    }
    return "test is completed!"
}