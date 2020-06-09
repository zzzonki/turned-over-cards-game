import React, {PureComponent} from 'react'
import Digit from '../Digit'
import './style.css'

export default class Card extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            turnedOver: false,
            isDisabled: false
        }
    }
    
    render(){

        const {cardDigit} = this.props

        // {counter} на onClick запускает изменение стейта count компонента CardList

        const body = this.state.isDisabled ? <div className="card disabled"></div> : (this.state.turnedOver ? <div className="card on"><Digit  cardDigit = {cardDigit} /></div> : <div onClick={() => this.handleClick()} className="card off"></div>)
        return(
            <>{body}</>
        )
    }
    
    handleTurn(){
        this.setState({
            turnedOver: !this.state.turnedOver
        })
        console.log(this.props.cardDigit, ' ', this.state.turnedOver)
    }

    handleClick = () => {
        this.handleTurn()
        this.props.counter()
        if(this.props.count === 0){
            this.props.getFirst(this.props.cardDigit)
        } else if(this.props.count === 1){
            this.props.getSecond(this.props.cardDigit)
        } else{
            return
        }
    }

    testIt(){
        // console.log(this.props.cardDigit)
    }

    componentDidUpdate(){
        const {count} = this.props
        if(count >= 3){
            this.setState ({turnedOver: false})
            this.props.counter()
            console.log('count is', count, this.state.turnedOver)
        }else{
            console.log('count is', count)
            return
        }
    }
}

