//todo  сделай по принципу logic.js LEFT, RIGHT, UP, DOWN
//Возвращает строку анимаций полученную из того что дали
export let shiftRowGetAnimationOnePhase=(row)=> {

    let thisAnimeRow = {
        one: 0, two: 0, three: 0, four: 0
    }
        //{x,0,0,0}
    if ((row.one !== 0) && (row.two === 0) && (row.four === 0) && (row.three === 0)) {
        console.log(' распознал ситуацию как {x,0,0,0}')
        thisAnimeRow = {
            one: 3, two: 0, three: 0, four: 0
        }
    }
    // {0,0,0,0}
    else if ((row.one === 0) && (row.two === 0) && (row.four === 0) && (row.three === 0)){
        console.log(' распознал ситуацию как {0,0,0,0}')
        thisAnimeRow={one:0, two: 0, three: 0, four: 0 }
    }// {0,0,0,x}
    else if ((row.one === 0) && (row.two === 0) && (row.four !== 0) && (row.three === 0)){
        console.log('распознал ситуацию как {0,0,0,x}')
        thisAnimeRow={one:0, two: 0, three: 0, four: 0 }
    }
    //{0,x,0,0}
    else if((row.two!==0)&&(row.one===0)&&(row.three===0)&&(row.four===0)){
        console.log('распознал ситуацию как {0,x,0,0}')
        thisAnimeRow={
            one:0, two: 2, three:0, four: 0
        }
        //{x,x,0,0}
    }else if ((row.one!==0)&&(row.two!==0)&&(row.four === 0) && (row.three === 0)) {
        console.log('распознал ситуацию как {x,x,0,0}')
        if(row.one===row.two){
            thisAnimeRow={
                one: 3, two: 2, three: 0, four: 0
            }
        }else{
            thisAnimeRow = {
                one: 2, two: 2, three: 0, four: 0
            }
        }

        //{x,0,0,x}
    } else if ((row.one!==0)&&(row.four!==0)&&(row.two === 0) && (row.three === 0)) {
        console.log('распознал ситуацию как {x,0,0,x}')
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
        console.log('распознал ситуацию как {0,0,x,0}')
        thisAnimeRow = {
            one: 0, two: 0, three: 1, four: 0
        }
        //{x,0,x,0}
    } else if ((row.one!==0)&&(row.two === 0)&&(row.three!==0) && (row.four === 0)) {
        console.log('распознал ситуацию как {x,0,x,0}')
        if(row.one===row.three){thisAnimeRow = {
            one: 3, two: 0, three: 1, four: 0
        }}else{
            thisAnimeRow = {
                one: 2, two: 0, three: 1, four: 0
            }
        }
        //{x,x,x,0}
    } else if ((row.one !== 0)&&(row.two !== 0)&&(row.three !== 0)&&(row.four === 0)) {
        console.log('распознал ситуацию как {x,x,x,0}')
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
        console.log('распознал ситуацию как {x,x,0,x}')
        if(row.four===row.two) {
            thisAnimeRow = {
                one: 2, two: 2, three: 0, four: 0
            }
        }else if(row.one===row.two){
                thisAnimeRow = {
                    one: 2, two: 1, three: 0, four: 0
                }
            }else {
            thisAnimeRow = {
                one: 1, two: 1, three: 0, four: 0
            }
        }
        //{x,0,x,x}
    } else if ((row.one!==0)&&(row.three!==0)&&(row.four!==0)&&(row.two === 0)) {
        console.log('распознал ситуацию как {x,0,x,x}')
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
        console.log('распознал ситуацию как {0,0,x,x}')
        if(row.three===row.four) {
            thisAnimeRow = {
                one: 0, two: 0, three: 1, four: 0
            }
        }else{
                thisAnimeRow = {one: 0, two: 0, three: 0, four: 0}
            }
        //{0,x,0,x}
    }else if((row.one===0)&&(row.two!==0)&&(row.three===0)&&(row.four!==0)){
        console.log('распознал ситуацию как {0,x,0,x}')
        if(row.two===row.four){
            thisAnimeRow= {one: 0, two: 2, three: 0, four: 0}
        }else{
            thisAnimeRow= {one: 0, two: 1, three: 0, four: 0}
        }
        //{0,x,x,0}
    }else if((row.one===0)&&(row.two!==0)&&(row.three !==0)&&(row.four===0)){
        console.log('распознал ситуацию как {0,x,x,0}')
        if(row.two===row.three ){
            //спорный вопрос как разрешить эту анимацию
            thisAnimeRow= {one: 0, two: 2, three: 1, four: 0}
        }else {
            thisAnimeRow= {one: 0, two: 1, three: 1, four: 0}
        }
        //{0,x,x,x}
    }else if((row.one===0)&&(row.two!==0)&&(row.three !==0)&&(row.four!==0)){
        console.log('распознал ситуацию как {0,x,x,x}')
        if(row.three===row.four){
            thisAnimeRow= {one: 0, two: 1, three: 1, four: 0}
        }else if(row.two===row.three){
            thisAnimeRow= {one: 0, two: 1, three: 0, four: 0}
        }else{
            thisAnimeRow= {one: 0, two: 0, three: 0, four: 0}
        }
        //{x,x,x,x}
    } else {
        console.log('распознал ситуацию как {x,x,x,x}')
        if((row.one===row.two)&&(row.three===row.four)){
            thisAnimeRow = {one: 2, two: 1, three: 1, four: 0}
        }else if(row.three===row.four){
            thisAnimeRow = {one: 1, two: 1, three: 1, four: 0}
        }else if(row.three===row.two){
            thisAnimeRow = {one: 1, two: 1, three: 0, four: 0}
        }
        else if(row.two===row.one){
            thisAnimeRow = {one: 1, two: 0, three: 0, four: 0}
        }else{
            thisAnimeRow = {one: 0, two: 0, three: 0, four: 0}
        }
    }
    return thisAnimeRow
}
// for result state usability
export let shiftRowGetAnimationTwoPhase=(row)=> {

    let thisAnimeRow = {
        one: 0, two: 0, three: 0, four: 0
    }
    //{x,0,0,0}
    if ((row.one !== 0) && (row.two === 0) && (row.four === 0) && (row.three === 0)) {
        console.log('two phase распознал ситуацию как {x,0,0,0}')
        thisAnimeRow = {
            one: 0, two: 0, three: 0, four: 0
        }
    }
    // {0,0,0,0}
    else if ((row.one === 0) && (row.two === 0) && (row.four === 0) && (row.three === 0)){
        console.log('two phase распознал ситуацию как {0,0,0,0}')
        thisAnimeRow={one:0, two: 0, three: 0, four: 0 }
    }// {0,0,0,x}
    else if ((row.one === 0) && (row.two === 0) && (row.four !== 0) && (row.three === 0)){
        console.log('two phase распознал ситуацию как {0,0,0,x}')
        thisAnimeRow={one:0, two: 0, three: 0, four: 0 }
    }
    //{0,x,0,0}
    else if((row.two!==0)&&(row.one===0)&&(row.three===0)&&(row.four===0)){
        console.log(' two phase распознал ситуацию как {0,x,0,0}')
        thisAnimeRow={
            one:0, two: 0, three:0, four: 0
        }
        //{x,x,0,0}
    }else if ((row.one!==0)&&(row.two!==0)&&(row.four === 0) && (row.three === 0)) {
        console.log('two phase распознал ситуацию как {x,x,0,0}')
        if(row.one===row.two){
            thisAnimeRow={
                one: 0, two: 0, three: 0, four: 4
            }
        }else{
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 0
            }
        }

        //{x,0,0,x}
    } else if ((row.one!==0)&&(row.four!==0)&&(row.two === 0) && (row.three === 0)) {
        console.log('two phase распознал ситуацию как {x,0,0,x}')
        if(row.one===row.four){
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 4
            }
        }else{
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 0
            }
        }
        //{0,0,x,0}
    }else if((row.three!==0)&&(row.one===0)&&(row.two===0)&&(row.four===0)){
        console.log('two phase распознал ситуацию как {0,0,x,0}')
        thisAnimeRow = {
            one: 0, two: 0, three: 0, four: 0
        }
        //{x,0,x,0}
    } else if ((row.one!==0)&&(row.two === 0)&&(row.three!==0) && (row.four === 0)) {
        console.log('two phase распознал ситуацию как {x,0,x,0}')
        if(row.one===row.three){thisAnimeRow = {
            one: 0, two: 0, three: 0, four: 4
        }}else{
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 0
            }
        }
        //{x,x,x,0}
    } else if ((row.one !== 0)&&(row.two !== 0)&&(row.three !== 0)&&(row.four === 0)) {
        console.log('two phase распознал ситуацию как {x,x,x,0}')
        if(row.two===row.three){
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 4
            }
        }else if(row.one===row.two){
            thisAnimeRow = {
                one: 0, two: 0, three: 4, four: 0
            }
        }else{
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 0
            }
        }
        //{x,x,0,x}
    } else if ((row.one!==0)&&(row.two!==0)&&(row.four!==0)&&(row.three === 0)) {
        console.log('two phase распознал ситуацию как {x,x,0,x}')
        if(row.four===row.two) {
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 4
            }
        }else if(row.one===row.two){
            thisAnimeRow = {
                one: 0, two: 0, three: 4, four: 0
            }
        }else {
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 0
            }
        }
        //{x,0,x,x}
    } else if ((row.one!==0)&&(row.three!==0)&&(row.four!==0)&&(row.two === 0)) {
        console.log('two phase распознал ситуацию как {x,0,x,x}')
        if(row.three===row.four){
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 4
            }
        }else if(row.one===row.three){
            thisAnimeRow = {
                one: 0, two: 0, three: 4, four: 0
            }
        }else{
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 0
            }
        }
        //{0,0,x,x}
    }else if(((row.one===0)&&(row.two===0)&&(row.three!==0)&&(row.four!==0))){
        console.log('two phase распознал ситуацию как {0,0,x,x}')
        if(row.three===row.four) {
            thisAnimeRow = {
                one: 0, two: 0, three: 0, four: 4
            }
        }else{
            thisAnimeRow = {one: 0, two: 0, three: 0, four: 0}
        }
        //{0,x,0,x}
    }else if((row.one===0)&&(row.two!==0)&&(row.three===0)&&(row.four!==0)){
        console.log(' two phase распознал ситуацию как {0,x,0,x}')
        if(row.two===row.four){
            thisAnimeRow= {one: 0, two: 0, three: 0, four: 4}
        }else{
            thisAnimeRow= {one: 0, two: 0, three: 0, four: 0}
        }
        //{0,x,x,0}
    }else if((row.one===0)&&(row.two!==0)&&(row.three !==0)&&(row.four===0)){
        console.log('two phase распознал ситуацию как {0,x,x,0}')
        if(row.two===row.three ){
            //спорный вопрос как разрешить эту анимацию
            thisAnimeRow= {one: 0, two: 0, three: 0, four: 4}
        }else {
            thisAnimeRow= {one: 0, two: 0, three: 0, four: 0}
        }
        //{0,x,x,x}
    }else if((row.one===0)&&(row.two!==0)&&(row.three !==0)&&(row.four!==0)){
        console.log('two phase распознал ситуацию как {0,x,x,x}')
        if(row.three===row.four){
            thisAnimeRow= {one: 0, two: 0, three: 0, four: 4}
        }else if(row.two===row.three){
            thisAnimeRow= {one: 0, two: 0, three: 4, four: 0}
        }else{
            thisAnimeRow= {one: 0, two: 0, three: 0, four: 0}
        }
        //{x,x,x,x}
    } else {
        console.log('two phase распознал ситуацию как {x,x,x,x}')
        if((row.one===row.two)&&(row.three===row.four)){
            thisAnimeRow = {one: 0, two: 0, three: 4, four: 4}
        }else if(row.three===row.four){
            thisAnimeRow = {one: 0, two: 0, three: 0, four: 4}
        }else if(row.three===row.two){
            thisAnimeRow = {one: 0, two: 0, three: 4, four: 0}
        }
        else if(row.two===row.one){
            thisAnimeRow = {one: 0, two: 4, three: 0, four: 0}
        }else{
            thisAnimeRow = {one: 0, two: 0, three: 0, four: 0}
        }
    }
    return thisAnimeRow
}

