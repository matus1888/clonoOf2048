import React from 'react'
import s from './LineInGame.module.css';
import GameFieldContainer from "./gameField/GameFieldContainer";
import {DOWN, LEFT, RIGHT, UP} from "../redux/logic";
import testMassive from "./testMassive";
import gameOver, {youWin} from "../redux/gameOver";


class LineInGame extends React.Component {
    constructor(props) {
        super(props);
        this.startTicker = this.startTicker.bind(this);
        this.magic = this.magic.bind(this);
        this.setNewStateAndNewAnimation = this.setNewStateAndNewAnimation.bind(this)
        this.setNullAnimation = this.setNullAnimation.bind(this)
        this.keyFunction = this.keyFunction.bind(this);
        this.setNewScore = this.setNewScore.bind(this);
        this.state = {massive: testMassive(), step: true, pressingLock: false}
        this.keyFunction = this.keyFunction.bind(this)
    }

    keyFunction(event) {
        if (!this.state.pressingLock) {
            if (event.keyCode === 40) {
                this.setState({...this.state, pressingLock: true})
                this.props.down()
            } else if (event.keyCode === 38) {
                this.setState({...this.state, pressingLock: true})
                this.props.up()
            } else if (event.keyCode === 37) {
                this.setState({...this.state, pressingLock: true})
                this.props.left()
            } else if (event.keyCode === 39) {
                this.setState({...this.state, pressingLock: true})
                this.props.right()
            }
            if (this.props.keys === 'left') {
                this.magic(LEFT(this.props.main))
            } else if (this.props.keys === 'right') {
                this.magic(RIGHT(this.props.main))
            } else if (this.props.keys === 'up') {
                this.magic(UP(this.props.main))
            } else if (this.props.keys === 'down') {
                this.magic(DOWN(this.props.main))
            }
        }
    }


    componentDidMount() {
        document.title = "2048";
        document.addEventListener("keydown", this.keyFunction, false);


        // console.log(this.props)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyFunction, false);
        this.props.setNull()
    }

    //1)  в порядке отработки
    startTicker() {
        this.ticker = setInterval(this.magic, 650)
    }

    magic(twoStates) {
        let States = twoStates
        let oneState = States.oneState
        let twoState = States.twoState
        let score = States.score
        this.setNullAnimation()
        setTimeout(() => this.setCurrentValueAndSlideAnimation(oneState), 20)
        setTimeout(() => this.setNewStateAndNewAnimation(twoState), 200)
        setTimeout(() => this.setNullAnimation(), 220)
        setTimeout(() => this.setNewStateAndNewAnimation(twoState), 240)
        setTimeout(() => this.setNullAnimation(), 320)
        setTimeout(() => this.setState({...this.state, pressingLock: false}), 300)
        setTimeout(()=>this.setNewScore(score), 300)
    }

    setNullAnimation() {
        this.props.resetAnimation()
    }

    setNewScore(score) {
        let nS= {...this.props.main,score: this.props.main.score+score}
        this.props.setCurrentState(nS)
    }

    setCurrentValueAndSlideAnimation(next) {
        this.props.setCurrentState(
            {...this.props.main, ...next}
        )
    }

    setNewStateAndNewAnimation(next) {
        this.props.setCurrentState(
            {...this.props.main, ...next}
        )
    }


    render() {
        return (<div>

                <div className={s.b}>
                    <div className={s.head}>
                        <span><button className={s.button} onClick={this.props.reset}>START NEW GAME</button></span>
                        <span><b>SCORE</b><input className={s.input} readOnly={true} value={this.props.main.score}/></span>
                    </div>
                    <GameFieldContainer/>
                    {/*{console.log('gameOver is= '+gameOver(this.props.main))}*/}
                    <div className={gameOver(this.props.main) ? s.footer2 : s.footer}>GAME OVER</div>
                    <div className={youWin(this.props.main) ? s.winner2 : s.winner}>YOU WIN!!!</div>
                </div>
            </div>
        )
    }
}

export default LineInGame