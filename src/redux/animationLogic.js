//Возвращает строку анимаций полученную из того что дали
export let shiftRowGetAnimationOnePhase = (row) => {
    let thisAnimeRow = {
        one: 0, two: 0, three: 0, four: 0
    }
    let variant= {
         ax000 : ((row.one !== 0) && (row.two === 0) && (row.four === 0) && (row.three === 0)),
         a0000 : ((row.one === 0) && (row.two === 0) && (row.four === 0) && (row.three === 0)),
         a000x : ((row.one === 0) && (row.two === 0) && (row.four !== 0) && (row.three === 0)),
         a0x00 : ((row.two !== 0) && (row.one === 0) && (row.three === 0) && (row.four === 0)),
         axx00 : ((row.one !== 0) && (row.two !== 0) && (row.four === 0) && (row.three === 0)),
         ax00x : ((row.one !== 0) && (row.four !== 0) && (row.two === 0) && (row.three === 0)),
         a00x0 : ((row.three !== 0) && (row.one === 0) && (row.two === 0) && (row.four === 0)),
         ax0x0 : ((row.one !== 0) && (row.two === 0) && (row.three !== 0) && (row.four === 0)),
         axxx0 : ((row.one !== 0) && (row.two !== 0) && (row.three !== 0) && (row.four === 0)),
         axx0x : ((row.one !== 0) && (row.two !== 0) && (row.four !== 0) && (row.three === 0)),
         ax0xx : ((row.one !== 0) && (row.three !== 0) && (row.four !== 0) && (row.two === 0)),
         a00xx : (((row.one === 0) && (row.two === 0) && (row.three !== 0) && (row.four !== 0))),
         a0x0x : ((row.one === 0) && (row.two !== 0) && (row.three === 0) && (row.four !== 0)),
         a0xx0 : ((row.one === 0) && (row.two !== 0) && (row.three !== 0) && (row.four === 0)),
         a0xxx : ((row.one === 0) && (row.two !== 0) && (row.three !== 0) && (row.four !== 0)),
         axxxx : ((row.one !== 0) && (row.two !== 0) && (row.three !== 0) && (row.four !== 0))
    }
    let correspondenceObject={
        a0000: {one: 0, two: 0, three: 0, four: 0},
        ax000: {one: 3, two: 0, three: 0, four: 0},
        a000x: {one: 0, two: 0, three: 0, four: 0},
        a0x00: {one: 0, two: 2, three: 0, four: 0},
        axx00: (row.one === row.two)?{one: 3, two: 2, three: 0, four: 0}:{one: 2, two: 2, three: 0, four: 0},
        ax00x: (row.one === row.four)?{one: 3, two: 0, three: 0, four: 0}:{one: 2, two: 0, three: 0, four: 0},
        a00x0: {one: 0, two: 0, three: 1, four: 0} ,
        ax0x0: (row.one === row.three)?{one: 3, two: 0, three: 1, four: 0}:{one: 2, two: 0, three: 1, four: 0},
        axxx0: (row.two === row.three)?{one: 2, two: 2, three: 1, four: 0}:(row.one === row.two)?{one: 2, two: 1, three: 1, four: 0}:{one: 1, two: 1, three: 1, four: 0},
        axx0x: (row.four === row.two)?{one: 2, two: 2, three: 0, four: 0}:(row.one === row.two)?{one: 2, two: 1, three: 0, four:0}:{one: 1, two: 1, three: 0, four: 0},
        ax0xx: (row.three === row.four)? {one: 2, two: 0, three: 1, four: 0}:(row.one === row.three)?{one: 2, two: 0, three: 0, four: 0}:{one: 1, two: 0, three: 0, four: 0},
        a00xx: (row.three === row.four)? {one: 0, two: 0, three: 1, four: 0}:{one: 0, two: 0, three: 0, four: 0},
        a0x0x: (row.two === row.four)?{one: 0, two: 2, three: 0, four: 0}:{one: 0, two: 1, three: 0, four: 0},
        a0xx0: (row.two === row.three)? {one: 0, two: 2, three: 1, four: 0}: {one: 0, two: 1, three: 1, four: 0},
        a0xxx: (row.three === row.four)?{one: 0, two: 1, three: 1, four: 0}:(row.two === row.three)?{one: 0, two: 1, three: 0, four: 0}:{one: 0, two: 0, three: 0, four: 0},
        axxxx: ((row.one === row.two) && (row.three === row.four))? {one: 2, two: 1, three: 1, four: 0}:(row.three === row.four)?{one: 1, two: 1, three: 1, four: 0}
        :(row.three === row.two)?{one: 1, two: 1, three: 0, four: 0}:(row.two === row.one)?{one: 1, two: 0, three: 0, four: 0}:{one: 0, two: 0, three: 0, four: 0}}

    for (let variantKey in variant) {
        if (variant[variantKey]){
             thisAnimeRow=correspondenceObject[variantKey]
            return  thisAnimeRow
        }
    }

    return thisAnimeRow
}
// for result state usability
// входная строка  OLD !!!
export let shiftRowGetAnimationTwoPhase = (row) => {

    let thisAnimeRow = {
        one: 0, two: 0, three: 0, four: 0
    }
    let variant= {
        ax000 : ((row.one !== 0) && (row.two === 0) && (row.four === 0) && (row.three === 0)),
        a0000 : ((row.one === 0) && (row.two === 0) && (row.four === 0) && (row.three === 0)),
        a000x : ((row.one === 0) && (row.two === 0) && (row.four !== 0) && (row.three === 0)),
        a0x00 : ((row.two !== 0) && (row.one === 0) && (row.three === 0) && (row.four === 0)),
        axx00 : ((row.one !== 0) && (row.two !== 0) && (row.four === 0) && (row.three === 0)),
        ax00x : ((row.one !== 0) && (row.four !== 0) && (row.two === 0) && (row.three === 0)),
        a00x0 : ((row.three !== 0) && (row.one === 0) && (row.two === 0) && (row.four === 0)),
        ax0x0 : ((row.one !== 0) && (row.two === 0) && (row.three !== 0) && (row.four === 0)),
        axxx0 : ((row.one !== 0) && (row.two !== 0) && (row.three !== 0) && (row.four === 0)),
        axx0x : ((row.one !== 0) && (row.two !== 0) && (row.four !== 0) && (row.three === 0)),
        ax0xx : ((row.one !== 0) && (row.three !== 0) && (row.four !== 0) && (row.two === 0)),
        a00xx : (((row.one === 0) && (row.two === 0) && (row.three !== 0) && (row.four !== 0))),
        a0x0x : ((row.one === 0) && (row.two !== 0) && (row.three === 0) && (row.four !== 0)),
        a0xx0 : ((row.one === 0) && (row.two !== 0) && (row.three !== 0) && (row.four === 0)),
        a0xxx : ((row.one === 0) && (row.two !== 0) && (row.three !== 0) && (row.four !== 0)),
        axxxx : ((row.one !== 0) && (row.two !== 0) && (row.three !== 0) && (row.four !== 0))
    }

    let correspondenceObject={
        a0000: {one: 0, two: 0, three: 0, four: 0},
        ax000: {one: 0, two: 0, three: 0, four: 0},
        a000x: {one: 0, two: 0, three: 0, four: 0},
        a0x00: {one: 0, two: 0, three: 0, four: 0},
        axx00: (row.one === row.two)?{one: 0, two: 0, three: 0, four: 4}:{one: 0, two: 0, three: 0, four: 0},
        ax00x: (row.one === row.four)?{one: 0, two: 0, three: 0, four: 4}:{one: 0, two: 0, three: 0, four: 0},
        a00x0:  {one: 0, two: 0, three: 0, four: 0} ,
        ax0x0: (row.one === row.three)?{one: 0, two: 0, three: 0, four: 4}:{one: 0, two: 0, three: 0, four: 0},
        axxx0: (row.two === row.three)?{one: 0, two: 0, three: 0, four: 4}:(row.one === row.two)?{one: 0, two: 0, three: 4, four: 0}:{one: 0, two: 0, three: 0, four: 0},
        axx0x: (row.four === row.two)?{one: 0, two: 0, three: 0, four: 4}:(row.one === row.two)?{one: 0, two: 0, three: 4, four: 0}:{one: 0, two: 0, three: 0, four: 0},
        ax0xx: (row.three === row.four)? {one: 0, two: 0, three: 0, four: 4}:(row.one === row.three)?{one: 0, two: 0, three: 4, four: 0}:{one: 0, two: 0, three: 0, four: 0},
        a00xx: (row.three === row.four)? {one: 0, two: 0, three: 0, four: 4}:{one: 0, two: 0, three: 0, four: 0},
        a0x0x: (row.two === row.four)?{one: 0, two: 0, three: 0, four: 4}:{one: 0, two: 0, three: 0, four: 0},
        a0xx0: (row.two === row.three)?{one: 0, two: 0, three: 0, four: 4}: {one: 0, two: 0, three: 0, four: 0},
        a0xxx: (row.three === row.four)?{one: 0, two: 0, three: 0, four: 4}:(row.two === row.three)?{one: 0, two: 0, three: 4, four: 0}:{one: 0, two: 0, three: 0, four: 0},
        axxxx: ((row.one === row.two) && (row.three === row.four))?{one: 0, two: 0, three: 4, four: 4}:(row.three === row.four)?{one: 0, two: 0, three: 0, four: 4}
            :(row.three === row.two)?{one: 0, two: 0, three: 4, four: 0}:(row.two === row.one)?{one: 0, two: 4, three: 0, four: 0}:{one: 0, two: 0, three: 0, four: 0}}

    for (let variantKey in variant) {
        if (variant[variantKey]){
            thisAnimeRow=correspondenceObject[variantKey]
            return  thisAnimeRow
        }
    }

    return thisAnimeRow
}

