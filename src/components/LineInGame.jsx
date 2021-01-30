import React from 'react'
import s from './LineInGame.module.css';
import GameFieldContainer from "./gameField/GameFieldContainer";
import {DOWN, getMatrixOnState, LEFT, RIGHT, RIGHT_ANAMATION_STEP_ONE, testRowSlide, UP} from "../redux/logic";
import {shiftRowGetAnimationOnePhase, testRowAnimationSlidePhaseOne} from "../redux/animationLogic";
import testMassive from "./testMassive";

class LineInGame extends React.Component {
    constructor(props) {
        super(props);
        this.startTicker=this.startTicker.bind(this);
        this.testAnimationOneRowVisible=this.testAnimationOneRowVisible.bind(this);
        this.startTickerTwoPhase=this.startTickerTwoPhase.bind(this);
        this.state={massive:testMassive(), step:false}
    }
    startTickerTwoPhase(){
        if(this.state.step=true){
            console.log('set nulls')
                this.props.setCurrentState({
                    ...this.props.main, oneRaw: {
                        one: {
                            value: 0,
                            anime: 0,
                            timeout: this.props.main.oneRaw.one.timeout
                        },
                        two: {
                            value: 0,
                            anime: 0,
                            timeout: this.props.main.oneRaw.two.timeout
                        },
                        three: {
                            value: 0,
                            anime: 0,
                            timeout: this.props.main.oneRaw.three.timeout
                        },
                        four: {
                            value: 0,
                            anime: 0,
                            timeout: this.props.main.oneRaw.four.timeout
                        },
                    }
                })
        }
    }
    startTicker() {
            this.ticker = setInterval(this.testAnimationOneRowVisible, 2000)
    }

    testAnimationOneRowVisible (){
        const {massive}=this.state
        if (massive.length) {
            const next = massive.shift();
            this.setState({
                ...this.state, massive, step:!this.state.step
            });
            let animationRow = shiftRowGetAnimationOnePhase(next)
            console.log(next)
            console.log(animationRow)
            if(next==={one:32,two:32, three:32,four:32}){
                clearInterval(this.ticker)
            }
            this.props.setCurrentState({
                ...this.props.main, oneRaw: {
                    one: {
                        value: next.one,
                        anime: animationRow.one,
                        timeout: this.props.main.oneRaw.one.timeout
                    },
                    two: {
                        value: next.two,
                        anime: animationRow.two,
                        timeout: this.props.main.oneRaw.two.timeout
                    },
                    three: {
                        value: next.three,
                        anime: animationRow.three,
                        timeout: this.props.main.oneRaw.three.timeout
                    },
                    four: {
                        value: next.four,
                        anime: animationRow.four,
                        timeout: this.props.main.oneRaw.four.timeout
                    },
                }
            })
            setTimeout(this.startTickerTwoPhase, 1800)

        }

    }

    render() {
        let testAnimationPhaseOne = () => {
            testRowAnimationSlidePhaseOne()
        }

        // let SideEffect=()=> {
//     props.setAnimation()
//     setTimeout(() => props.setCurrentState(), 100)
// }
        let rightKey = () => {
            this.props.setCurrentState(RIGHT_ANAMATION_STEP_ONE(this.props.main))
            // props.setCurrentState(RIGHT(props.main))
        }
        let leftKey = () => {
            this.props.setCurrentState(LEFT(this.props.main))
        }
        let upKey = () => {
            console.log('нажали up')
            this.props.setCurrentState(UP(this.props.main))
        }
        let downKey = () => {
            this.props.setCurrentState(DOWN(this.props.main))
        }

        return (<div>
                <div className={s.b}>
                    <div className={s.head}>Header
                        <button onClick={this.startTicker}>testAnimationOneRowVisible</button>
                        <button onClick={rightKey}>test on RIGHT KEY</button>
                        <button onClick={leftKey}>test on LEFT KEY</button>
                        <button onClick={upKey}>test on UP KEY</button>
                        <button onClick={downKey}>test on Down KEY</button>
                        <button onClick={this.props.reset}>Reset animation</button>
                    </div>
                    <GameFieldContainer/>
                </div>
            </div>
        )
    }
}

export default LineInGame