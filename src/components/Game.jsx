import React from 'react';
import s from './Game.module.css'
import m from './Application.module.css'

const Game=(props)=>{
let x=(pr)=>{ if (pr===2){return s.bg2}
else if(pr===4){return s.bg4}
else if(pr===8){return s.bg8}
else if(pr===16){return s.bg16}
else if(pr===32){return s.bg32}
else if(pr===64){return s.bg64}
else if(pr===128){return s.bg128}
else if(pr===256){return s.bg256}
else if(pr===512){return s.bg512}
else if(pr===1024){return s.bg1024}
else if(pr===2048){return s.bg2048}
}
    return(
        <div className={`${m.data} ${s.game}`}>
            <div className={`${s.cell1}  ${x(props.a[0][0])}`} >{props.a[0][0]}</div>
            <div className={`${s.cell2}  ${x(props.a[0][1])}`}>{props.a[0][1]}</div>
            <div className={`${s.cell3}  ${x(props.a[0][2])}`}>{props.a[0][2]}</div>
            <div className={`${s.cell4}  ${x(props.a[0][3])}`}>{props.a[0][3]}</div>
            <div className={`${s.cell5 } ${x(props.a[1][0])}`}>{props.a[1][0]}</div>
            <div className={`${s.cell6 } ${x(props.a[1][1])}`}>{props.a[1][1]}</div>
            <div className={`${s.cell7 } ${x(props.a[1][2])}`}>{props.a[1][2]}</div>
            <div className={`${s.cell8 } ${x(props.a[1][3])}`}>{props.a[1][3]}</div>
            <div className={`${s.cell9 } ${x(props.a[2][0])}`}>{props.a[2][0]}</div>
            <div className={`${s.cell10} ${x(props.a[2][1])}`}>{props.a[2][1]}</div>
            <div className={`${s.cell11} ${x(props.a[2][2])}`}>{props.a[2][2]}</div>
            <div className={`${s.cell12} ${x(props.a[2][3])}`}>{props.a[2][3]}</div>
            <div className={`${s.cell13} ${x(props.a[3][0])}`}>{props.a[3][0]}</div>
            <div className={`${s.cell14} ${x(props.a[3][1])}`}>{props.a[3][1]}</div>
            <div className={`${s.cell15} ${x(props.a[3][2])}`}>{props.a[3][2]}</div>
            <div className={`${s.cell16} ${x(props.a[3][3])}`}>{props.a[3][3]}</div>
        </div>
    )
}
export default Game