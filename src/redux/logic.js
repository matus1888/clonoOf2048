import {shiftRowGetAnimationOnePhase, shiftRowGetAnimationTwoPhase} from './animationLogic';
// основные элементы это 4 функции LEFT RIGHT UP DOWN
// отдаем стейт, получаем измененный стейт
export let logicLeft = (matrix) => {
    return null;
}
//матрица здесь- это объект из 4х строк(объект из 4х значений)
//получить матрицу из стейта
export let getMatrixOnState = (state) => {
    let matrix = {
        oneRaw: {
            one: state.oneRaw.one.value,
            two: state.oneRaw.two.value,
            three: state.oneRaw.three.value,
            four: state.oneRaw.four.value
        },
        twoRaw: {
            one: state.twoRaw.one.value,
            two: state.twoRaw.two.value,
            three: state.twoRaw.three.value,
            four: state.twoRaw.four.value
        },
        threeRaw:
            {
                one: state.threeRaw.one.value,
                two: state.threeRaw.two.value,
                three: state.threeRaw.three.value,
                four: state.threeRaw.four.value
            }
        , fourRaw:
            {
                one: state.fourRaw.one.value,
                two: state.fourRaw.two.value,
                three: state.fourRaw.three.value,
                four: state.fourRaw.four.value
            }
    }
    return matrix;

}
//сдвинуть строку
export let shiftRow = (row) => {
    let thisRow = {
        one: 0, two: 0, three: 0, four: 0
    }
    //{x,x,0,0}
    if ((row.four === 0) && (row.three === 0)) {
        thisRow = {
            one: 0, two: 0, three: row.one, four: row.two
        }
        //    {0,x,x,0}
    } else if ((row.two === 0) && (row.three === 0)) {
        thisRow = {
            one: 0, two: 0, three: row.one, four: row.four
        }
        // {0,x,0,x}
    } else if ((row.two === 0) && (row.four === 0)) {
        thisRow = {
            one: 0, two: 0, three: row.one, four: row.three
        }
        //    {x,x,x,0}
    } else if (row.four === 0) {
        thisRow = {
            one: 0, two: row.one, three: row.two, four: row.three
        }
        //    {x,x,0,x}
    } else if (row.three === 0) {
        thisRow = {
            one: 0, two: row.one, three: row.two, four: row.four
        }
        //    {x,0,x,x}
    } else if (row.two === 0) {
        thisRow = {
            one: 0, two: row.one, three: row.three, four: row.four
        }
    } else {
        thisRow = {one: row.one, two: row.two, three: row.three, four: row.four}
    }
    return thisRow
}
export let rowSlide = (row) => {
    console.log('input raw is')
    console.log(row)

//Сдвиг элементов,  если есть нули

    //Объявление исходного ВАРИАНТА(он же ОТВЕТ если никакие условия НЕ сработают)
    let thisRow = shiftRow(row)
    let returnedRow = {
        one: thisRow.one,
        two: thisRow.two,
        three: thisRow.three,
        four: thisRow.four
    }
    let compare2Num = (a, b) => {
        if (b === 0) {
            return {
                a: 0, b: a
            }
        }
        if (a === b) {
            return {a: 0, b: a * 2}
        } else
            return {a: a, b: b}
    }
    let oneAndTwo = compare2Num(thisRow.one, thisRow.two)
    let twoAndThree = compare2Num(thisRow.two, thisRow.three)
    let threeAndFour = compare2Num(thisRow.three, thisRow.four)


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
        if (twoAndThree.a === 0) {
            returnedRow = {one: 0, two: thisRow.one, three: twoAndThree.b, four: thisRow.four}
        } else {
            returnedRow = {one: thisRow.one, two: twoAndThree.a, three: twoAndThree.b, four: thisRow.four}
        }
        console.log(returnedRow)
        return returnedRow
    }
    let rezult = ((thisRow.three !== thisRow.four) && thisRow.two === thisRow.three)
        ? comparisonOfCentralMembers(twoAndThree) : pairwiseComparison(oneAndTwo, threeAndFour)

    return rezult
}
// функция для тестирования   сдвига
export let testRowSlide = () => {
    for (let x = 0; x < 2; x++) {
        for (let y = 0; y < 2; y++) {
            for (let z = 0; z < 2; z++) {
                for (let c = 0; c < 2; c++) {
                    let rowSlide1 = rowSlide({
                        one: x,
                        two: y,
                        three: z,
                        four: c
                    })
                    console.log('input row is {x:' + x + ';y:' + y + ';z:' + z + ';c:' + c + '} ' +
                        ' output row is {x:' + rowSlide1.one + ';y:' + rowSlide1.two + ';z:'
                        + rowSlide1.three + ';c:' + rowSlide1.four + '}')
                }
            }
        }
    }
    return "test is completed!"
}
//повороты матрицы для реализации нажатий кнопок
let getRightRowsOutMatrix = (matrix) => {
    return matrix
}
let getLeftRowsOutMatrix = (matrix) => {
    console.log(matrix)
    let leftMatrix = {
        oneRaw: {
            one: matrix.oneRaw.four,
            two: matrix.oneRaw.three,
            three: matrix.oneRaw.two,
            four: matrix.oneRaw.one
        },
        twoRaw: {
            one: matrix.twoRaw.four,
            two: matrix.twoRaw.three,
            three: matrix.twoRaw.two,
            four: matrix.twoRaw.one
        },
        threeRaw: {
            one: matrix.threeRaw.four,
            two: matrix.threeRaw.three,
            three: matrix.threeRaw.two,
            four: matrix.threeRaw.one
        },
        fourRaw: {
            one: matrix.fourRaw.four,
            two: matrix.fourRaw.three,
            three: matrix.fourRaw.two,
            four: matrix.fourRaw.one

        }
    }
    return leftMatrix
}
let getDownRowsOutMatrix = (matrix) => {
    let downMatrix = {
        oneRaw: {
            one: matrix.oneRaw.one,
            two: matrix.twoRaw.one,
            three: matrix.threeRaw.one,
            four: matrix.fourRaw.one
        },
        twoRaw: {
            one: matrix.oneRaw.two,
            two: matrix.twoRaw.two,
            three: matrix.threeRaw.two,
            four: matrix.fourRaw.two
        },
        threeRaw: {
            one: matrix.oneRaw.three,
            two: matrix.twoRaw.three,
            three: matrix.threeRaw.three,
            four: matrix.fourRaw.three
        },
        fourRaw: {
            one: matrix.oneRaw.four,
            two: matrix.twoRaw.four,
            three: matrix.threeRaw.four,
            four: matrix.fourRaw.four

        }
    }
    return downMatrix
}
let getUpRowsOutMatrix = (matrix) => {
    let upMatrix = {
        oneRaw: {
            one: matrix.fourRaw.one,
            two: matrix.threeRaw.one,
            three: matrix.twoRaw.one,
            four: matrix.oneRaw.one
        },
        twoRaw: {
            one: matrix.fourRaw.two,
            two: matrix.threeRaw.two,
            three: matrix.twoRaw.two,
            four: matrix.oneRaw.two
        },
        threeRaw: {
            one: matrix.fourRaw.three,
            two: matrix.threeRaw.three,
            three: matrix.twoRaw.three,
            four: matrix.oneRaw.three
        },
        fourRaw: {
            one: matrix.fourRaw.four,
            two: matrix.threeRaw.four,
            three: matrix.twoRaw.four,
            four: matrix.oneRaw.four

        }
    }
    return upMatrix
}
//
// export let RIGHT_ANAMATION_STEP_ONE=(state)=>{
//     //1) get matrix animations:
//     let animationMatrix={
//         oneRaw:shiftRowGetAnimationOnePhase(
//             {
//                 one: state.oneRaw.one.value,
//                 two: state.oneRaw.two.value,
//                 three: state.oneRaw.three.value,
//                 four: state.oneRaw.four.value
//             }
//         ),
//         twoRaw:shiftRowGetAnimationOnePhase(
//             {
//                 one: state.twoRaw.one.value,
//                 two: state.twoRaw.two.value,
//                 three: state.twoRaw.three.value,
//                 four: state.twoRaw.four.value
//             }
//         ),
//         threeRaw:shiftRowGetAnimationOnePhase(
//             {
//                 one: state.threeRaw.one.value,
//                 two: state.threeRaw.two.value,
//                 three: state.threeRaw.three.value,
//                 four: state.threeRaw.four.value
//             }
//         ),
//         fourRaw:shiftRowGetAnimationOnePhase(
//             {
//                 one: state.fourRaw.one.value,
//                 two: state.fourRaw.two.value,
//                 three: state.fourRaw.three.value,
//                 four: state.fourRaw.four.value
//             }
//         )
//     }
//     //2)return state in matrix
//     return {
//         ...state,
//         oneRaw: {
//             one: {value: state.oneRaw.one.value,     anime: animationMatrix.oneRaw.one,  timeout: state.oneRaw.one.timeout},
//             two: {value: state.oneRaw.two.value,     anime:animationMatrix.oneRaw.two,   timeout: state.oneRaw.two.timeout},
//             three: {value: state.oneRaw.three.value, anime:animationMatrix.oneRaw.three, timeout: state.oneRaw.three.timeout},
//             four: {value: state.oneRaw.four.value,   anime:animationMatrix.oneRaw.four,  timeout: state.oneRaw.four.timeout}
//         },
//         twoRaw: {
//             one: {value: state.twoRaw.one.value,     anime: animationMatrix.twoRaw.one,  timeout: state.twoRaw.one.timeout},
//             two: {value: state.twoRaw.two.value,     anime:animationMatrix.twoRaw.two,   timeout: state.twoRaw.two.timeout},
//             three: {value: state.twoRaw.three.value, anime:animationMatrix.twoRaw.three, timeout: state.twoRaw.three.timeout},
//             four: {value: state.twoRaw.four.value,   anime:animationMatrix.twoRaw.four,  timeout: state.twoRaw.four.timeout}
//         },
//         threeRaw: {
//             one: {value: state.threeRaw.one.value,       anime: animationMatrix.threeRaw.one,  timeout: state.threeRaw.one.timeout},
//             two: {value: state.threeRaw.two.value,       anime:animationMatrix.threeRaw.two,   timeout: state.threeRaw.two.timeout},
//             three: {value: state.threeRaw.three.value,   anime:animationMatrix.threeRaw.three, timeout: state.threeRaw.three.timeout},
//             four: {value: state.threeRaw.four.value,     anime:animationMatrix.threeRaw.four,  timeout: state.threeRaw.four.timeout}
//         },
//         fourRaw: {
//             one: {value: state.fourRaw.one.value,        anime: animationMatrix.fourRaw.one,  timeout: state.fourRaw.one.timeout},
//             two: {value: state.fourRaw.two.value,        anime:animationMatrix.fourRaw.two,   timeout: state.fourRaw.two.timeout},
//             three: {value: state.fourRaw.three.value,    anime:animationMatrix.fourRaw.three, timeout: state.fourRaw.three.timeout},
//             four: {value: state.fourRaw.four.value,      anime:animationMatrix.fourRaw.four,  timeout: state.fourRaw.four.timeout}
//         }
//     }
// }
export let RIGHT = (state) => {
    //1)get matrix  on state:
    let matrixOnState = getMatrixOnState(state);
    //2)rotate on key
    let rotateMatrix = getRightRowsOutMatrix(matrixOnState);
    //3)slide all rows in matrix
    //получить матрицу из анимаций текущей матрицы
    let oldAnimationMatrix = {
        oneRaw: shiftRowGetAnimationOnePhase(rotateMatrix.oneRaw),
        twoRaw: shiftRowGetAnimationOnePhase(rotateMatrix.twoRaw),
        threeRaw: shiftRowGetAnimationOnePhase(rotateMatrix.threeRaw),
        fourRaw: shiftRowGetAnimationOnePhase(rotateMatrix.fourRaw)
    }
    //получить матрицу из анимаций ВТОРАЯ ФАЗА!!!
    let newAnimationMatrix = {
        oneRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.oneRaw),
        twoRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.twoRaw),
        threeRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.threeRaw),
        fourRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.fourRaw)
    }
    //создать объект Текущая матрица + анимация ПЕРВЫЙ ОБЪЕКТ
    let oldMatrixOldAnimation = {
        oneRaw: {
            one: {value: rotateMatrix.oneRaw.one, anime: oldAnimationMatrix.oneRaw.one},
            two: {value: rotateMatrix.oneRaw.two, anime: oldAnimationMatrix.oneRaw.two},
            three: {value: rotateMatrix.oneRaw.three, anime: oldAnimationMatrix.oneRaw.three},
            four: {value: rotateMatrix.oneRaw.four, anime: oldAnimationMatrix.oneRaw.four}
        },
        twoRaw: {
            one: {value: rotateMatrix.twoRaw.one, anime: oldAnimationMatrix.twoRaw.one},
            two: {value: rotateMatrix.twoRaw.two, anime: oldAnimationMatrix.twoRaw.two},
            three: {value: rotateMatrix.twoRaw.three, anime: oldAnimationMatrix.twoRaw.three},
            four: {value: rotateMatrix.twoRaw.four, anime: oldAnimationMatrix.twoRaw.four}
        },
        threeRaw: {
            one: {value: rotateMatrix.threeRaw.one, anime: oldAnimationMatrix.threeRaw.one},
            two: {value: rotateMatrix.threeRaw.two, anime: oldAnimationMatrix.threeRaw.two},
            three: {value: rotateMatrix.threeRaw.three, anime: oldAnimationMatrix.threeRaw.three},
            four: {value: rotateMatrix.threeRaw.four, anime: oldAnimationMatrix.threeRaw.four}
        },
        fourRaw: {
            one: {value: rotateMatrix.fourRaw.one, anime: oldAnimationMatrix.fourRaw.one},
            two: {value: rotateMatrix.fourRaw.two, anime: oldAnimationMatrix.fourRaw.two},
            three: {value: rotateMatrix.fourRaw.three, anime: oldAnimationMatrix.fourRaw.three},
            four: {value: rotateMatrix.fourRaw.four, anime: oldAnimationMatrix.fourRaw.four}
        }
    }

    //сдвинутая матрица
    let slideRotateMatrix = {
        oneRaw: rowSlide(rotateMatrix.oneRaw),
        twoRaw: rowSlide(rotateMatrix.twoRaw),
        threeRaw: rowSlide(rotateMatrix.threeRaw),
        fourRaw: rowSlide(rotateMatrix.fourRaw)
    }
    //4) unRotateMatrix (повернули матрицу обратно)
    let unRotateMatrix = slideRotateMatrix
    //5) return state in parent
    // создать объект новый стейт и новая анимация ВТОРОЙ ОБЪЕКТ
    //todo  функцию которая склеит матрицу значений и матрицу анимаций в стейт
    let newMatrixNewAnimation = {
        oneRaw: {
            one: {value: unRotateMatrix.oneRaw.one, anime: newAnimationMatrix.oneRaw.one},
            two: {value: unRotateMatrix.oneRaw.two, anime: newAnimationMatrix.oneRaw.two},
            three: {value: unRotateMatrix.oneRaw.three, anime: newAnimationMatrix.oneRaw.three},
            four: {value: unRotateMatrix.oneRaw.four, anime: newAnimationMatrix.oneRaw.four}
        },
        twoRaw: {
            one: {value: unRotateMatrix.twoRaw.one, anime: newAnimationMatrix.twoRaw.one},
            two: {value: unRotateMatrix.twoRaw.two, anime: newAnimationMatrix.twoRaw.two},
            three: {value: unRotateMatrix.twoRaw.three, anime: newAnimationMatrix.twoRaw.three},
            four: {value: unRotateMatrix.twoRaw.four, anime: newAnimationMatrix.twoRaw.four}
        },
        threeRaw: {
            one: {value: unRotateMatrix.threeRaw.one, anime: newAnimationMatrix.threeRaw.one},
            two: {value: unRotateMatrix.threeRaw.two, anime: newAnimationMatrix.threeRaw.two},
            three: {value: unRotateMatrix.threeRaw.three, anime: newAnimationMatrix.threeRaw.three},
            four: {value: unRotateMatrix.threeRaw.four, anime: newAnimationMatrix.threeRaw.four}
        },
        fourRaw: {
            one: {value: unRotateMatrix.fourRaw.one, anime: newAnimationMatrix.fourRaw.one},
            two: {value: unRotateMatrix.fourRaw.two, anime: newAnimationMatrix.fourRaw.two},
            three: {value: unRotateMatrix.fourRaw.three, anime: newAnimationMatrix.fourRaw.three},
            four: {value: unRotateMatrix.fourRaw.four, anime: newAnimationMatrix.fourRaw.four}
        }
    }
    return {oneState: oldMatrixOldAnimation, twoState: newMatrixNewAnimation}
}
export let LEFT = (state) => {
    //1)get matrix  on state:
    let matrixOnState = getMatrixOnState(state);
    //2)rotate on key
    let rotateMatrix = getLeftRowsOutMatrix(matrixOnState);
    //получить матрицу анимаций СДВИГИ ВПРАВО
    let oldAnimationMatrixRight=getLeftRowsOutMatrix({
        oneRaw: shiftRowGetAnimationOnePhase(rotateMatrix.oneRaw),
        twoRaw: shiftRowGetAnimationOnePhase(rotateMatrix.twoRaw),
        threeRaw: shiftRowGetAnimationOnePhase(rotateMatrix.threeRaw),
        fourRaw: shiftRowGetAnimationOnePhase(rotateMatrix.fourRaw)
    })
    let x= 5;
    let oldAnimationMatrix={
        oneRaw:{one:oldAnimationMatrixRight.oneRaw.one+x ,      two:oldAnimationMatrixRight.oneRaw.two+x,   three: oldAnimationMatrixRight.oneRaw.three+x,     four: oldAnimationMatrixRight.oneRaw.four+x},
        twoRaw:{one: oldAnimationMatrixRight.twoRaw.one+x ,     two:oldAnimationMatrixRight.twoRaw.two+x,   three: oldAnimationMatrixRight.twoRaw.three+x,     four: oldAnimationMatrixRight.twoRaw.four+x},
        threeRaw:{one: oldAnimationMatrixRight.threeRaw.one+x , two:oldAnimationMatrixRight.threeRaw.two+x, three: oldAnimationMatrixRight.threeRaw.three+x,   four: oldAnimationMatrixRight.threeRaw.four+x},
        fourRaw:{one: oldAnimationMatrixRight.fourRaw.one+x ,   two:oldAnimationMatrixRight.fourRaw.two+x,  three: oldAnimationMatrixRight.fourRaw.three+x,    four: oldAnimationMatrixRight.fourRaw.four+x},
    }
    //анимация для второй фазы
    let newAnimationMatrix=getLeftRowsOutMatrix({
        oneRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.oneRaw),
        twoRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.twoRaw),
        threeRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.threeRaw),
        fourRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.fourRaw)
    })
    // получить стейт для ПЕРВОЙ ФАЗЫ
    let oldMatrixOldAnimation=gluingMatrix(matrixOnState, oldAnimationMatrix)
    //3)slide all rows in matrix
    //Сдвиг перевернутой матрицы
    let slideRotateMatrix = {
        oneRaw: rowSlide(rotateMatrix.oneRaw),
        twoRaw: rowSlide(rotateMatrix.twoRaw),
        threeRaw: rowSlide(rotateMatrix.threeRaw),
        fourRaw: rowSlide(rotateMatrix.fourRaw)
    }
    //4) unRotateMatrix
    // развернуть сдвинутую матрицу обратно 1для 2-ой фазы
    let unRotateMatrix = getLeftRowsOutMatrix(slideRotateMatrix)
    //5) return state in parent
    //получить стейт для ВТОРОЙ ФАЗЫ
    let newAnimationNewMatrix=gluingMatrix(unRotateMatrix, newAnimationMatrix)

    return {oneState: oldMatrixOldAnimation, twoState: newAnimationNewMatrix}
}
export let UP = (state) => {
    //1)get matrix  on state:
    let matrixOnState = getMatrixOnState(state);
    //2)rotate on key
    let rotateMatrix = getUpRowsOutMatrix(matrixOnState);
    //3)slide all rows in matrix
    let slideRotateMatrix = {
        oneRaw: rowSlide(rotateMatrix.oneRaw),
        twoRaw: rowSlide(rotateMatrix.twoRaw),
        threeRaw: rowSlide(rotateMatrix.threeRaw),
        fourRaw: rowSlide(rotateMatrix.fourRaw)
    }
    //4) unRo
    //5) return state in parent
    return {
        ...state, oneRaw: {
            one: {value: slideRotateMatrix.oneRaw.four, anime: state.oneRaw.one.anime},
            two: {value: slideRotateMatrix.twoRaw.four, anime: state.oneRaw.two.anime},
            three: {value: slideRotateMatrix.threeRaw.four, anime: state.oneRaw.three.anime},
            four: {value: slideRotateMatrix.fourRaw.four, anime: state.oneRaw.four.anime}
        },
        twoRaw: {
            one: {value: slideRotateMatrix.oneRaw.three, anime: state.twoRaw.one.anime},
            two: {value: slideRotateMatrix.twoRaw.three, anime: state.twoRaw.two.anime},
            three: {value: slideRotateMatrix.threeRaw.three, anime: state.twoRaw.three.anime},
            four: {value: slideRotateMatrix.fourRaw.three, anime: state.twoRaw.four.anime}
        },
        threeRaw: {
            one: {value: slideRotateMatrix.oneRaw.two, anime: state.threeRaw.one.anime},
            two: {value: slideRotateMatrix.twoRaw.two, anime: state.threeRaw.two.anime},
            three: {value: slideRotateMatrix.threeRaw.two, anime: state.threeRaw.three.anime},
            four: {value: slideRotateMatrix.fourRaw.two, anime: state.threeRaw.four.anime}
        },
        fourRaw: {
            one: {value: slideRotateMatrix.oneRaw.one, anime: state.fourRaw.one.anime},
            two: {value: slideRotateMatrix.twoRaw.one, anime: state.fourRaw.two.anime},
            three: {value: slideRotateMatrix.threeRaw.one, anime: state.fourRaw.three.anime},
            four: {value: slideRotateMatrix.fourRaw.one, anime: state.fourRaw.four.anime}
        }
    }
}
export let DOWN = (state) => {
    //1)get matrix  on state:
    let matrixOnState = getMatrixOnState(state);
    //2)rotate on key
    let rotateMatrix = getDownRowsOutMatrix(matrixOnState);
    //3)slide all rows in matrix
    let slideRotateMatrix = {
        oneRaw: rowSlide(rotateMatrix.oneRaw),
        twoRaw: rowSlide(rotateMatrix.twoRaw),
        threeRaw: rowSlide(rotateMatrix.threeRaw),
        fourRaw: rowSlide(rotateMatrix.fourRaw)
    }
    //4) unRotateMatrix
    let unRotateMatrix = getDownRowsOutMatrix(slideRotateMatrix)
    //5) return state in parent
    return {
        ...state, oneRaw: {
            one: {value: unRotateMatrix.oneRaw.one, anime: state.oneRaw.one.anime},
            two: {value: unRotateMatrix.oneRaw.two, anime: state.oneRaw.two.anime},
            three: {value: unRotateMatrix.oneRaw.three, anime: state.oneRaw.three.anime},
            four: {value: unRotateMatrix.oneRaw.four, anime: state.oneRaw.four.anime}
        },
        twoRaw: {
            one: {value: unRotateMatrix.twoRaw.one, anime: state.twoRaw.one.anime},
            two: {value: unRotateMatrix.twoRaw.two, anime: state.twoRaw.two.anime},
            three: {value: unRotateMatrix.twoRaw.three, anime: state.twoRaw.three.anime},
            four: {value: unRotateMatrix.twoRaw.four, anime: state.twoRaw.four.anime}
        },
        threeRaw: {
            one: {value: unRotateMatrix.threeRaw.one, anime: state.threeRaw.one.anime},
            two: {value: unRotateMatrix.threeRaw.two, anime: state.threeRaw.two.anime},
            three: {value: unRotateMatrix.threeRaw.three, anime: state.threeRaw.three.anime},
            four: {value: unRotateMatrix.threeRaw.four, anime: state.threeRaw.four.anime}
        },
        fourRaw: {
            one: {value: unRotateMatrix.fourRaw.one, anime: state.fourRaw.one.anime},
            two: {value: unRotateMatrix.fourRaw.two, anime: state.fourRaw.two.anime},
            three: {value: unRotateMatrix.fourRaw.three, anime: state.fourRaw.three.anime},
            four: {value: unRotateMatrix.fourRaw.four, anime: state.fourRaw.four.anime}
        }
    }
}


//склеиватель матрицы данных и матрицы анимаций
let gluingMatrix=(valMatrix, animeMatrix)=> {
    return {
        oneRaw: {
            one: {value: valMatrix.oneRaw.one, anime: animeMatrix.oneRaw.one},
            two: {value: valMatrix.oneRaw.two, anime: animeMatrix.oneRaw.two},
            three: {value: valMatrix.oneRaw.three, anime: animeMatrix.oneRaw.three},
            four: {value: valMatrix.oneRaw.four, anime: animeMatrix.oneRaw.four}
        },
        twoRaw: {
            one: {value: valMatrix.twoRaw.one, anime: animeMatrix.twoRaw.one},
            two: {value: valMatrix.twoRaw.two, anime: animeMatrix.twoRaw.two},
            three: {value: valMatrix.twoRaw.three, anime: animeMatrix.twoRaw.three},
            four: {value: valMatrix.twoRaw.four, anime: animeMatrix.twoRaw.four}
        },
        threeRaw: {
            one: {value: valMatrix.threeRaw.one, anime: animeMatrix.threeRaw.one},
            two: {value: valMatrix.threeRaw.two, anime: animeMatrix.threeRaw.two},
            three: {value: valMatrix.threeRaw.three, anime: animeMatrix.threeRaw.three},
            four: {value: valMatrix.threeRaw.four, anime: animeMatrix.threeRaw.four}
        },
        fourRaw: {
            one: {value: valMatrix.fourRaw.one, anime: animeMatrix.fourRaw.one},
            two: {value: valMatrix.fourRaw.two, anime: animeMatrix.fourRaw.two},
            three: {value: valMatrix.fourRaw.three, anime: animeMatrix.fourRaw.three},
            four: {value: valMatrix.fourRaw.four, anime: animeMatrix.fourRaw.four}
        }
    }
    }