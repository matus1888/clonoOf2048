import s from "./cell/Cell.module.css"
const SLIDE = s.slide
const SLIDE_2 = s.slide2
const SLIDE_3 = s.slide3
const MINI=s.mini
export let getAnimationEffect = (value) => {
    switch (value) {
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
        default :
            return {
                changed: true,
                effect: null
            }

    }
}