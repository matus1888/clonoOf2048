import React from "react";
import s from '../../LineInGame.module.css'
import CellContainer from "./cell/CellContainer";

const LineInField = (props) => {
    return (<div className={s.rowStyle}>
        <CellContainer value={props.currentRow.one.value}
                       animation={props.currentRow.one.anime}
                       timeout={props.currentRow.one.timeout}/>
        <CellContainer value={props.currentRow.two.value}
                       animation={props.currentRow.two.anime}
                       timeout={props.currentRow.two.timeout}/>
        <CellContainer value={props.currentRow.three.value}
                       animation={props.currentRow.three.anime}
                       timeout={props.currentRow.four.timeout}/>
        <CellContainer value={props.currentRow.four.value}
                       animation={props.currentRow.four.anime}
                       timeout={props.currentRow.four.timeout}/>
    </div>)
}
export default LineInField