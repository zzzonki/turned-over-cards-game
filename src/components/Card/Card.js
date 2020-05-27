import React, {Component} from 'react'
import Digit from '../Digit'
import './style.css'

export default class Card extends Component{
    state = {
        turnedOver: false
    }
    render(){
        
        // let body
        // if(this.turnedOver){
        //     body = <div onClick={this.testIt} className="card on"><Digit /></div>
        // }else{
        //     body = <div onClick={this.testIt} className="card off"></div>
        // }

        const body = this.state.turnedOver ? <div onClick={() => this.handleTurn()} className="card on"><Digit /></div> : <div onClick={() => this.handleTurn()} className="card off"></div>
        return(
            <div>{body}</div>
        )
    }
    
    handleTurn = () => {
        this.setState({
            turnedOver: !this.state.turnedOver
        })
    }

    testIt(){
        console.log(this.state)
    }
}

