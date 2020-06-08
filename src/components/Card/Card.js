import React, {PureComponent} from 'react'
import Digit from '../Digit'
import './style.css'

export default class Card extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            turnedOver: false,
            isDisabled: false,
        }
    }
    
    render(){

        const {cardDigit} = this.props

        // {counter} на onClick запускает изменение стейта count компонента CardList

        const body = this.state.isDisabled ? <div className="card disabled"></div> : (this.state.turnedOver ? <div onClick={() => this.handleClick()} className="card on"><Digit  cardDigit = {cardDigit} /></div> : <div onClick={() => this.handleClick()} className="card off"></div>)
        return(
            <div>{body}</div>
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

    // TODO Сделать так, чтобы не было перестроения каждой карточки
    // TODO Сделать так, чтобы по нажатии на каждую третью карточку она открывалась и счет был снова 1, сейчас она открывается, потом закрывается вместе со всеми и счет 0. Это ок, но не очень удобно
}

