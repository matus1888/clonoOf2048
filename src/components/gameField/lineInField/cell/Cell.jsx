import React from "react";
import lineInGameStyles from "../../../LineInGame.module.css";
import styleOfCell from "./Cell.module.css"
import {getAnimationEffect} from "../GetAnimationEffect";


class Cell extends React.Component {


    render() {
        let getColor = (val) => {
            const cellStyles = [styleOfCell.zero,
                styleOfCell.one, styleOfCell.two,
                styleOfCell.three, styleOfCell.four,
                styleOfCell.five, styleOfCell.six,
                styleOfCell.seven, styleOfCell.eight,
                styleOfCell.nine, styleOfCell.ten,
                styleOfCell.eleven, styleOfCell.twelve,
                styleOfCell.thirteen, styleOfCell.fourteen,
                styleOfCell.fifteen, styleOfCell.sixteen];
            console.log('value= ' + val + ' getColor return a:' + cellStyles[Math.log2(val)])
            return cellStyles[Math.log2(val)];
        }
        let an = getAnimationEffect(this.props.animation)
        return (
            <div className={`${lineInGameStyles.cellStyle} ${getColor(this.props.value)}
            ${an.changed && an.effect} `}>
                <p className={lineInGameStyles.p}>{(this.props.value) ? this.props.value : null}</p></div>
        )
    }
}

export default Cell
