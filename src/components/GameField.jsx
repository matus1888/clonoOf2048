import s from "./LineInGame.module.css";
import Cell from "./Cell";
import React from "react";
import {getAnimationEffect} from "./GameFieldLogic";


class GameField extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.animationObject.changed!==false) {
           setTimeout(this.props.resetAnimation, 100)
            console.log('componentDidUpdate')
        }
    }
    render() {
        return (<div className={s.bodyField}>
            <div className={s.rowStyle}>
                <Cell value={this.props.currentState.oneRaw.one}
                      animation={getAnimationEffect(this.props.animationObject.oneRaw.one)}/>
                <Cell value={this.props.currentState.oneRaw.two}
                      animation={getAnimationEffect(this.props.animationObject.oneRaw.two)}/>
                <Cell value={this.props.currentState.oneRaw.three}
                      animation={getAnimationEffect(this.props.animationObject.oneRaw.three)}/>
                <Cell value={this.props.currentState.oneRaw.four}
                      animation={getAnimationEffect(this.props.animationObject.oneRaw.four)}/>
            </div>
            <div className={s.rowStyle}>
                <Cell value={this.props.currentState.twoRaw.one}
                      animation={getAnimationEffect(this.props.animationObject.twoRaw.one) }/>
                <Cell value={this.props.currentState.twoRaw.two}
                      animation={getAnimationEffect(this.props.animationObject.twoRaw.two) }/>
                <Cell value={this.props.currentState.twoRaw.three}
                      animation={getAnimationEffect(this.props.animationObject.twoRaw.three)}/>
                <Cell value={this.props.currentState.twoRaw.four}
                      animation={getAnimationEffect(this.props.animationObject.twoRaw.four) }/>
            </div>
            <div className={s.rowStyle}>
                <Cell value={this.props.currentState.threeRaw.one}
                      animation={getAnimationEffect(this.props.animationObject.threeRaw.one) }/>
                <Cell value={this.props.currentState.threeRaw.two}
                      animation={getAnimationEffect(this.props.animationObject.threeRaw.two) }/>
                <Cell value={this.props.currentState.threeRaw.three}
                      animation={getAnimationEffect(this.props.animationObject.threeRaw.three)}/>
                <Cell value={this.props.currentState.threeRaw.four}
                      animation={getAnimationEffect(this.props.animationObject.threeRaw.four)}/>
            </div>
            <div className={s.rowStyle}>
                <Cell value={this.props.currentState.fourRaw.one}
                      animation={getAnimationEffect(this.props.animationObject.fourRaw.one) }/>
                <Cell value={this.props.currentState.fourRaw.two}
                      animation={getAnimationEffect(this.props.animationObject.fourRaw.one) }/>
                <Cell value={this.props.currentState.fourRaw.three}
                      animation={getAnimationEffect(this.props.animationObject.fourRaw.three)}/>
                <Cell value={this.props.currentState.fourRaw.four}
                      animation={getAnimationEffect(this.props.animationObject.fourRaw.four)}/>
            </div>
        </div>)
    }
}


export default GameField