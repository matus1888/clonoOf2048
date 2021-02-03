import React from 'react'
import s from './LineInGame.module.css';
import GameFieldContainer from "./gameField/GameFieldContainer";
import {DOWN, getMatrixOnState, LEFT, RIGHT, RIGHT_ANAMATION_STEP_ONE, testRowSlide, UP} from "../redux/logic";
import {shiftRowGetAnimationOnePhase, testRowAnimationSlidePhaseOne} from "../redux/animationLogic";
import testMassive from "./testMassive";


//todo   на основе имеющихся данных и logics реализовать полностью рабочие кнопки

class LineInGame extends React.Component {
    constructor(props) {
        super(props);
        this.startTicker=this.startTicker.bind(this);
        this.testAnimationOneRowVisible=this.testAnimationOneRowVisible.bind(this);
        this.startTickerTwoPhase=this.startTickerTwoPhase.bind(this);
        this.state={massive:testMassive(), step:true}
    }
    startTickerTwoPhase(){
        if(this.state.step=true){
            console.log('установка НУЛЕВЫХ параметров в глобальный стейт')
                // установка глобвльного стейта в случае если взведен флаг STEP
                this.props.setCurrentState({
                    ...this.props.main,
                    oneRaw: {
                        one: {value: 0, anime: 0, timeout: this.props.main.oneRaw.one.timeout},
                        two: {value: 0, anime: 0, timeout: this.props.main.oneRaw.two.timeout},
                        three: {value: 0, anime: 0, timeout: this.props.main.oneRaw.three.timeout},
                        four: {value: 0, anime: 0, timeout: this.props.main.oneRaw.four.timeout},
                    }
                })
        }
    }
    //1)  в порядке отработки
    startTicker() {
            this.ticker = setInterval(this.testAnimationOneRowVisible, 1000)
    }
    // 2) в порядке
    testAnimationOneRowVisible (){
        const {massive}=this.state
        if (massive.length) {
            const next = massive.shift();
            let animationRow = shiftRowGetAnimationOnePhase(next)
            console.log(next)
            console.log(animationRow)

            if(next==={one:32,two:32, three:32,four:32}){
                clearInterval(this.ticker)
            }
            // Тут происходит установка глобального стейта
            setTimeout(this.startTickerTwoPhase, 900 )
            console.log('фактическая смена стейта')

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
            console.log('STEP_DOWN')
            this.setState({
                ...this.state, massive:massive, step:false
            });


        }

    }

    render() {

        // let SideEffect=()=> {
//     props.setAnimation()
//     setTimeout(() => props.setCurrentState(), 100)
// }
        let problemSituation=()=>{
            this.props.setCurrentState(
                {
                    oneRaw: {
                        one: {value: 0, anime: 0, timeout:false},
                        two: {value: 2, anime: 2, timeout:false},
                        three: {value: 0, anime: 0,timeout:false},
                        four: {value: 0, anime: 0, timeout:false}
                    },
                    twoRaw: {
                        one: {value: 2, anime: null, timeout:false},
                        two: {value: 2, anime: null, timeout:false},
                        three: {value: 2, anime: null, timeout:false},
                        four: {value: 2, anime: null, timeout:false}
                    },
                    threeRaw: {
                        one: {value: 2, anime: null, timeout:false},
                        two: {value: 2, anime:  null, timeout:false},
                        three: {value: 2, anime: null, timeout:false},
                        four: {value: 2, anime: null, timeout:false}
                    },
                    fourRaw: {
                        one: {value: 4, anime:  null, timeout:false},
                        two: {value: 4, anime:  null, timeout:false},
                        three: {value: 4, anime: null, timeout:false},
                        four: {value: 4, anime: null, timeout:false}
                    },
                }
                )
        }
        let noProblemSituation=()=>{
            this.props.setCurrentState(
                {
                    oneRaw: {
                        one: {value: 0, anime: 0, timeout:false},
                        two: {value: 0, anime: 0, timeout:false},
                        three: {value: 2, anime: 1,timeout:false},
                        four: {value: 0, anime: 0, timeout:false}
                    },
                    twoRaw: {
                        one: {value: 2, anime: null, timeout:false},
                        two: {value: 2, anime: null, timeout:false},
                        three: {value: 2, anime: null, timeout:false},
                        four: {value: 2, anime: null, timeout:false}
                    },
                    threeRaw: {
                        one: {value: 2, anime: null, timeout:false},
                        two: {value: 2, anime:  null, timeout:false},
                        three: {value: 2, anime: null, timeout:false},
                        four: {value: 2, anime: null, timeout:false}
                    },
                    fourRaw: {
                        one: {value: 4, anime:  null, timeout:false},
                        two: {value: 4, anime:  null, timeout:false},
                        three: {value: 4, anime: null, timeout:false},
                        four: {value: 4, anime: null, timeout:false}
                    },
                }
                )
        }
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
                        <button onClick={problemSituation}>problemTest</button>
                        <button onClick={noProblemSituation}>noProblemTest</button>
                        <button onClick={rightKey}>test on RIGHT KEY</button>
                        <button onClick={leftKey}>test on LEFT KEY</button>
                        <button onClick={upKey}>test on UP KEY</button>
                        <button onClick={downKey}>test on Down KEY</button>
                        <button onClick={this.props.reset}>Reset animation</button>
                    </div>
                    <GameFieldContainer />
                </div>
            </div>
        )
    }
}

export default LineInGame