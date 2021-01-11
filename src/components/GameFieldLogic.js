import s from './LineInGame.module.css';
const SLIDE = s.anime
const MAGIC = s.magic

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
        default :
            return {
                changed: true,
                effect: null
            }

    }
}