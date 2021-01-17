import s from "../LineInGame.module.css";
import React from "react";
import LineInField from "./lineInField/LineInField";


class GameField extends React.Component {

    render() {
        return (<div className={s.bodyField}>
                <LineInField currentRow={this.props.state.oneRaw}/>
                <LineInField currentRow={this.props.state.twoRaw}/>
                <LineInField currentRow={this.props.state.threeRaw}/>
                <LineInField currentRow={this.props.state.fourRaw}/>
            </div>
        )
    }
}


export default GameField