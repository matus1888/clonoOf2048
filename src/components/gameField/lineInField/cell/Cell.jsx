import React from "react";
import s from "../../../LineInGame.module.css";
import f from "./Cell.module.css"
import {getAnimationEffect} from "../GetAnimationEffect";


class Cell extends React.Component {

componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.animation===15){
            setTimeout(()=> {
                console.log("сработал таймаут")
                this.props.resetTimeout()
                this.props.resetAnimation()
            }, 100)
        }
}

    render() {
        let getColor = (val) => {
            let x = Math.log2(val)
            if (val === 0) {
                return f.zero
            } else {
                switch (x) {
                    case 1: {
                        return f.one
                    }
                    case 2: {
                        return f.two
                    }
                    case 3: {
                        return f.three
                    }
                    case 4: {
                        return f.four
                    }
                    case 5: {
                        return f.five
                    }
                    case 6: {
                        return f.six
                    }
                    case 7: {
                        return f.seven
                    }
                    case 8: {
                        return f.eight
                    }
                    case 9: {
                        return f.nine
                    }
                    case 10: {
                        return f.ten
                    }
                    case 11: {
                        return f.eleven
                    }
                    case 12: {
                        return f.twelve
                    }
                    case 13: {
                        return f.thirteen
                    }
                    case 14: {
                        return f.fourteen
                    }
                    case 15: {
                        return f.fifteen
                    }
                    case 16: {
                        return f.sixteen
                    }
                    default : {
                        return f.sixteen
                    }
                }
            }
        }
        let an=getAnimationEffect(this.props.animation)
        return (
            <div className={`${s.cellStyle} ${getColor(this.props.value)}
            ${an.changed&&an.effect} `}>
                <p className={s.p}>{this.props.value}</p></div>
        )
    }
}

export default Cell