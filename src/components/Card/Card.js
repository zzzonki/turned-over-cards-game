import React, {Component} from 'react'
import Digit from '../Digit'
import './style.css'

export default class Card extends Component{
    state = {
        turnedOver: false,
        isDisabled: false,
    }
    render(){

        const {cardDigit, counter} = this.props

        // {counter} на onClick запускает изменение стейта count компонента CardList

        const body = this.state.isDisabled ? <div className="card disabled"></div> : (this.state.turnedOver ? <div onClick={() => this.handleTurn()} className="card on"><Digit  cardDigit = {cardDigit} /></div> : <div onClick={() => this.handleTurn()} className="card off"></div>)
        return(
            <div>{body}</div>
        )
    }
    
    handleTurn = () => {
        this.setState({
            turnedOver: !this.state.turnedOver,
        })
        console.log(this.props.cardDigit)
    }

    testIt(){
        // console.log(this.props.cardDigit)
        // this.state.closeC
    }
}

