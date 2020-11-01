import React, {PureComponent} from 'react'
import'./style.scss'

export default class Timer extends PureComponent{
    state = {
        mins: 0,
        secs: 0
    }

    componentDidUpdate(){
        if(this.props.gameStart){
            this.timerId = setTimeout(() => {
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
                 console.log('interval', this.timerId, 'is set')
             }, 1000)
             } else{
                 clearTimeout(this.timerId)
                 console.log('interval', this.timerId, 'is cleared')
             }
        console.log(this.props.gameStart)
    }

    render(){
        const minutes = this.state.mins < 10 ? "0" + this.state.mins : this.state.mins
        const seconds = this.state.secs < 10 ? "0" + this.state.secs : this.state.secs
        const going = this.props.gameStart ? 'timer-field timer-field_go' : 'timer-field'
        return(
            <>
                <h3>Timer</h3>
                <div className={going} onClick={() => this.timerGo()}>{minutes} : {seconds}</div>
            </> 
        )
    }
    timerGo = () =>{
        // this.setState({
        //     gameStart: !this.state.gameStart
        // })
        // setTimeout(() => {
        //     if(this.state.gameStart){
        //        this.timerId = setInterval(() => {
        //             if (this.state.secs >= 59) {
        //                 this.setState({
        //                     secs: 0,
        //                     mins: this.state.mins + 1
        //                 })
        //             } else{
        //                 this.setState({ 
        //                     secs: this.state.secs + 1
        //                 })
        //             }
        //             console.log('interval', this.timerId, 'is set')
        //         }, 1000)
        //         } else{
        //             clearInterval(this.timerId)
        //             console.log('interval', this.timerId, 'is cleared')
        //         }
        // }, 1);

        this.props.gamePause()
        
        
    }
    
}