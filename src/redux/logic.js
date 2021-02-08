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
//полчить матрицу анимаций из стейта
let getAnimationMatrixOnState=(state)=>{
    let matrix = {
        oneRaw: {
            one: state.oneRaw.one.anime,
            two: state.oneRaw.two.anime,
            three: state.oneRaw.three.anime,
            four: state.oneRaw.four.anime
        },
        twoRaw: {
            one: state.twoRaw.one.anime,
            two: state.twoRaw.two.anime,
            three: state.twoRaw.three.anime,
            four: state.twoRaw.four.anime
        },
        threeRaw:
            {
                one: state.threeRaw.one.anime,
                two: state.threeRaw.two.anime,
                three: state.threeRaw.three.anime,
                four: state.threeRaw.four.anime
            }
        , fourRaw:
            {
                one: state.fourRaw.one.anime,
                two: state.fourRaw.two.anime,
                three: state.fourRaw.three.anime,
                four: state.fourRaw.four.anime
            }
    }
    return matrix
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
    let result = ((thisRow.three !== thisRow.four) && thisRow.two === thisRow.three)
        ? comparisonOfCentralMembers(twoAndThree) : pairwiseComparison(oneAndTwo, threeAndFour)

    return result
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
let getUnDownRowsOutMatrix = (matrix) => {
    let unDownMatrix = {
        oneRaw: {
            one: matrix.oneRaw.four,
            two: matrix.twoRaw.four,
            three: matrix.threeRaw.four,
            four: matrix.fourRaw.four
        },
        twoRaw: {
            one: matrix.oneRaw.three,
            two: matrix.twoRaw.three,
            three: matrix.threeRaw.three,
            four: matrix.fourRaw.three
        },
        threeRaw: {
            one: matrix.oneRaw.two,
            two: matrix.twoRaw.two,
            three: matrix.threeRaw.two,
            four: matrix.fourRaw.two
        },
        fourRaw: {
            one: matrix.oneRaw.one,
            two: matrix.twoRaw.one,
            three: matrix.threeRaw.one,
            four: matrix.fourRaw.one
        }
    }
    return unDownMatrix
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
let getUnUpRowsOutMatrix = (matrix) => {
    let unUpMatrix = {
        oneRaw: {
            one: matrix.oneRaw.one,
            two: matrix.oneRaw.two,
            three: matrix.oneRaw.three,
            four: matrix.oneRaw.four
        },
        twoRaw: {
            one: matrix.twoRaw.one,
            two: matrix.twoRaw.two,
            three: matrix.twoRaw.three,
            four: matrix.twoRaw.four
        },
        threeRaw: {
            one: matrix.threeRaw.one,
            two: matrix.threeRaw.two,
            three: matrix.threeRaw.three,
            four: matrix.threeRaw.four
        },
        fourRaw: {
            one: matrix.fourRaw.one,
            two: matrix.fourRaw.two,
            three: matrix.fourRaw.three,
            four: matrix.fourRaw.four

        }
    }
    return unUpMatrix
}
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
    let newMatrixNewAnimationPlusNewPlayingPiece=addNewPlayingPiece(newMatrixNewAnimation)

    return {oneState: oldMatrixOldAnimation, twoState: newMatrixNewAnimationPlusNewPlayingPiece}
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

    let newMatrixNewAnimationPlusNewPlayingPiece=addNewPlayingPiece(newAnimationNewMatrix)

    return {oneState: oldMatrixOldAnimation, twoState: newMatrixNewAnimationPlusNewPlayingPiece}
}
export let UP = (state) => {
    //1)get matrix  on state:
    let matrixOnState = getMatrixOnState(state);
    //2)rotate on key
    let rotateMatrix = getUpRowsOutMatrix(matrixOnState);
    // получим матрицу анимаций для первой фазы:
    let x=9;
    let oldAnimationMatrix=
        getUnDownRowsOutMatrix({
         oneRaw:Object.fromEntries(
             Object.entries(shiftRowGetAnimationOnePhase(rotateMatrix.oneRaw))
                 .map(([key, value])=>[key,value+x])
         ),
         twoRaw: Object.fromEntries(
             Object.entries(shiftRowGetAnimationOnePhase(rotateMatrix.twoRaw))
                 .map(([key, value])=>[key,value+x])
         ),
         threeRaw:Object.fromEntries(
             Object.entries(shiftRowGetAnimationOnePhase(rotateMatrix.threeRaw))
                 .map(([key, value])=>[key,value+x])
         ),
         fourRaw: Object.fromEntries(
             Object.entries(shiftRowGetAnimationOnePhase(rotateMatrix.fourRaw))
                 .map(([key, value])=>[key,value+x])
         )
                         })
    //готовый стейт для ПЕРВОЙ ФАЗЫ
    let oldMatrixOldAnimation=gluingMatrix(matrixOnState,oldAnimationMatrix )
    //3)slide all rows in matrix
    // Получим матрицу новых анимаций
    let newAnimationMatrix=
        getUnDownRowsOutMatrix({
            oneRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.oneRaw),
            twoRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.twoRaw),
            threeRaw:shiftRowGetAnimationTwoPhase(rotateMatrix.threeRaw),
            fourRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.fourRaw)
        })
    let slideRotateMatrix = {
        oneRaw: rowSlide(rotateMatrix.oneRaw),
        twoRaw: rowSlide(rotateMatrix.twoRaw),
        threeRaw: rowSlide(rotateMatrix.threeRaw),
        fourRaw: rowSlide(rotateMatrix.fourRaw)
    }
    //получим матрицу новых значений:
    let newValuesMatrix=getUnDownRowsOutMatrix(slideRotateMatrix)
    //Получим стейт для ВТОРОЙ ФАЗЫ
    let newMatrixNewAnimation=gluingMatrix(newValuesMatrix, newAnimationMatrix)

    let newMatrixNewAnimationPlusNewPlayingPiece=addNewPlayingPiece(newMatrixNewAnimation)
    return {
        oneState: oldMatrixOldAnimation,
        twoState: newMatrixNewAnimationPlusNewPlayingPiece
    }
}
export let DOWN = (state) => {
    //1)get matrix  on state:
    let matrixOnState = getMatrixOnState(state);
    //2)rotate on key
    let rotateMatrix = getDownRowsOutMatrix(matrixOnState);
    //3)slide all rows in matrix
    //получим матрицу анимаций сдвигов
    let x = 13
    let oldAnimationMatrix = getUnUpRowsOutMatrix(getDownRowsOutMatrix({
        oneRaw: Object.fromEntries(
            Object.entries(shiftRowGetAnimationOnePhase(rotateMatrix.oneRaw))
                .map(([key, value]) => [key, value + x])
        ),
        twoRaw: Object.fromEntries(
            Object.entries(shiftRowGetAnimationOnePhase(rotateMatrix.twoRaw))
                .map(([key, value]) => [key, value + x])
        ),
        threeRaw: Object.fromEntries(
            Object.entries(shiftRowGetAnimationOnePhase(rotateMatrix.threeRaw))
                .map(([key, value]) => [key, value + x])
        ),
        fourRaw: Object.fromEntries(
            Object.entries(shiftRowGetAnimationOnePhase(rotateMatrix.fourRaw))
                .map(([key, value]) => [key, value + x])
        )
    }))
    //получим стейт ПЕРВОЙ ФАЗЫ
    let oldMatrixOldAnimation = gluingMatrix(matrixOnState, oldAnimationMatrix)
    let slideRotateMatrix = {
        oneRaw: rowSlide(rotateMatrix.oneRaw),
        twoRaw: rowSlide(rotateMatrix.twoRaw),
        threeRaw: rowSlide(rotateMatrix.threeRaw),
        fourRaw: rowSlide(rotateMatrix.fourRaw)
    }
    //4) unRotateMatrix
    let unRotateMatrix = getDownRowsOutMatrix(slideRotateMatrix)
    //5) return state in parent
    // получим матрицу значений после преобразовния
    let newValuesMatrix = getUnUpRowsOutMatrix(unRotateMatrix)
    // получим матрицу анимаций после преобразования
    let newAnimationMatrix = getUnUpRowsOutMatrix(getDownRowsOutMatrix(
        {
            oneRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.oneRaw),
            twoRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.twoRaw),
            threeRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.threeRaw),
            fourRaw: shiftRowGetAnimationTwoPhase(rotateMatrix.fourRaw)
        }
    ))
    //получим стей ВТОРОЙ ФАЗЫ
    let newMatrixNewAnimation = gluingMatrix(newValuesMatrix, newAnimationMatrix)

    let newMatrixNewAnimationPlusNewPlayingPiece=addNewPlayingPiece(newMatrixNewAnimation)
    return {
        oneState: oldMatrixOldAnimation,
        twoState: newMatrixNewAnimationPlusNewPlayingPiece
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
//Для одобавлления новых плиток в процессе игры
// возвращает измененный стейт
export let addNewPlayingPiece=(state)=>{
    //получить текущую матрицу
    let currentMatrix=getMatrixOnState(state);
    let getMatrixMassive=getMassiveOnMatrix(currentMatrix)
    let matrixMassive=getMatrixMassive
    //посчитаем все нули
    let counter=0;
    let nullsIndexMassive=[]
    matrixMassive.forEach((currentValue, index)=>{
        if(currentValue===0){nullsIndexMassive.push(index)
            counter=counter+1}
    })
    //выберем случайное число от из нулей
    let rndNull=Math.floor(Math.random() * Math.floor(counter))
    //получим индекс случайной клетки которую будем увеличивать
    let nullIndex=nullsIndexMassive[rndNull]
    // с учетом случайного числа создадим матрицу значений
    matrixMassive[nullIndex]=matrixMassive[nullIndex]+2
    let newValuesMatrix=getMatrixOnMassive(matrixMassive)
    //создание измененной матрицы анимаций объекта
    let oldAnimations=getAnimationMatrixOnState(state)
    //полчим массив из матрицы анимаций
    let animationsMatrixMassive=getMassiveOnMatrix(oldAnimations)
    //заменим в массиве анимаций необходимое значение для чего
    animationsMatrixMassive[nullIndex]=44
//    соберем обратно матрицу из массива
    let newAnimationMatrix=getMatrixOnMassive(animationsMatrixMassive)
    let returnedState=gluingMatrix(newValuesMatrix, newAnimationMatrix);
    return returnedState
}
//общий метод получения массива из матрицы
let getMassiveOnMatrix=(matrix)=>{
    let massive=[];
    Object.entries(matrix.oneRaw)
        .map(([key, value])=>massive.push(value))
    Object.entries(matrix.twoRaw)
        .map(([key, value])=>massive.push(value))
    Object.entries(matrix.threeRaw)
        .map(([key, value])=>massive.push(value))
    Object.entries(matrix.fourRaw)
        .map(([key, value])=>massive.push(value))
    return massive
}
// общий метод для получения матрицы из  массива
let getMatrixOnMassive=(massive)=>{
    let oneRaw=[];
    let twoRaw=[];
    let threeRaw=[];
    let fourRaw=[]
    massive.forEach(
        (cV, index)=>{
            if(index<=3){
                oneRaw.push(cV)
            }else if(index<=7){
                twoRaw.push(cV)
            }else if(index<=11){
                threeRaw.push(cV)
            }else{
                fourRaw.push(cV)
            }
        })
    let shift=(massive)=>{
        let obj={
            one: massive[0],
            two: massive[1],
            three: massive[2],
            four: massive[3],
        }
        return obj;
    }
    let returnedValuesMatrix={
        oneRaw:shift(oneRaw),
        twoRaw:shift(twoRaw),
        threeRaw:shift(threeRaw),
        fourRaw:shift(fourRaw)
    }
    return returnedValuesMatrix
}
