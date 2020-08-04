import React, {Component} from 'react'
import'./style.css'

export default class Timer extends Component{
    state = {
        gameStart: false,
        mins: 0,
        secs: 0
    }
    componentDidMount(){
        this.timerGo()
    }
    render(){
        const minutes = this.state.mins < 10 ? "0" + this.state.mins : this.state.mins
        const seconds = this.state.secs < 10 ? "0" + this.state.secs : this.state.secs
        return(
            <div>
                <h3>Timer</h3>
                <div className='timer-field'>{minutes} : {seconds}</div>
            </div>
        )
    }
    timerGo = () =>{
        setInterval(() => {
            if (this.state.secs >= 59) {
                this.setState({
                    secs: 0,
                    mins: this.state.mins + 1
                })
            } else{
                this.setState({ 
                    secs: this.state.secs + 1
                })
            }
        }, 1000)
    }
}