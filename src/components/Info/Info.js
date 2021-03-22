import React, {Component} from 'react'
import Rules from '../Rules'
import Timer from '../Timer'
import './style.scss'

export default class Info extends Component{
    state = {
        rulesOn: false
    }
    render(){
        const body = this.state.rulesOn ? <div className="info_how-to">
        <h3>How to play:</h3>
        <ul>
            <li>choose 2 cards</li>
            <li>remember what they are</li>
            <li>turn them down</li> 
            <li>find all pairs</li>
            <li>click on timer to pause</li>
            <li>click on any card to resume</li>
            <li>profit!</li>
        </ul>
        </div> : ""
        const display = this.state.rulesOn ? "hidden" : ""
        return(
            <div className='info_wrapper'>
                <Rules rulesOn={this.state.rulesOn} toggleRules={this.toggleRules}/>
                {body}
                <div className={display}>
                    <Timer gamePause={this.props.gamePause} gameStart={this.props.gameStart} />
                </div>
            </div>
        )
    }

    toggleRules = () =>{
        this.setState({rulesOn: !this.state.rulesOn})       
    }
}