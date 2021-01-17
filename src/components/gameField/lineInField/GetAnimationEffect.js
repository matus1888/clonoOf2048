import s from "./cell/Cell.module.css"
const SLIDE = s.slide
const MAGIC = s.magic
const S_SLIDE=s.slideAndDissolution
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
                effect: MAGIC
            }
        }
        case 3:{
            return {
                changed: true,
                effect: S_SLIDE
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