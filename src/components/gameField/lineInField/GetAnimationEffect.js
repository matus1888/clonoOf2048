import s from "./cell/Cell.module.css"
const SLIDE = s.slide
const SLIDE_2 = s.slide2
const SLIDE_3 = s.slide3
// FROM LEFT
const SLIDE_6 = s.slide6
const SLIDE_7 = s.slide7
const SLIDE_8 = s.slide8
// FROM UP
const SLIDE_10 = s.slide10
const SLIDE_11 = s.slide11
const SLIDE_12 = s.slide12
//FROM DOWN
const SLIDE_14 = s.slide14
const SLIDE_15 = s.slide15
const SLIDE_16 = s.slide16
//FROM ALL
const MINI=s.mini
const SLIDE_0=s.slide0
const APPEARANCE=s.appearance
export let getAnimationEffect = (value) => {
    switch (value) {
        case 0: {
            return {
                changed: true,
                effect: SLIDE_0
            }
        }
        case 1: {
            return {
                changed: true,
                effect: SLIDE
            }
        }
        case 2: {
            return {
                changed: true,
                effect: SLIDE_2
            }
        }
        case 3:{
            return {
                changed: true,
                effect: SLIDE_3
            }
        }
        case 4:{
            return {
                changed: true,
                effect: MINI
            }
        }
        // FROM LEFT METHOD
        case 5:{
            return {
                changed: true,
                effect: SLIDE_0
            }
        }case 6:{
            return {
                changed: true,
                effect: SLIDE_6
            }
        }case 7:{
            return {
                changed: true,
                effect: SLIDE_7
            }
        }case 8:{
            return {
                changed: true,
                effect: SLIDE_8
            }
        }
        // FROM UP METHODS
        case 9:{
            return {
                changed: true,
                effect: SLIDE_0
            }
        }case 10:{
            return {
                changed: true,
                effect: SLIDE_10
            }
        }case 11:{
            return {
                changed: true,
                effect: SLIDE_11
            }
        }case 12:{
            return {
                changed: true,
                effect: SLIDE_12
            }
        }
        // FROM DOWN METHODS
        case 13:{
            return {
                changed: true,
                effect: SLIDE_0
            }
        }case 14:{
            return {
                changed: true,
                effect: SLIDE_14
            }
        }case 15:{
            return {
                changed: true,
                effect: SLIDE_15
            }
        }case 16:{
            return {
                changed: true,
                effect: SLIDE_16
            }
        }case 44:{
            return {
                changed: true,
                effect: APPEARANCE
            }
        }
        default :
            return {
                changed: true,
                effect: SLIDE_0
            }

    }
}