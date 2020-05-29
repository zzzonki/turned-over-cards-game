import React from 'react'
import Card from '../Card'
import './style.css'

function CardList(props) {
    const baseArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ,6 ,6 ,7 ,7 ,8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14 ,15, 15, 16, 16]
    const newArray = baseArray.sort((a, b) => a > b ? Math.random() - 0.5 : -(Math.random() - 0.5))
    console.log(newArray)

    const newArray1 = newArray.slice(0,8)
    const newArray2 = newArray.slice(8,16)
    const newArray3 = newArray.slice(16,24)
    const newArray4 = newArray.slice(24)

    const cardDigits1 = newArray1.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index}/>)
    const cardDigits2 = newArray2.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index}/>)
    const cardDigits3 = newArray3.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index}/>)
    const cardDigits4 = newArray4.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index}/>)

    return(
        <div className='card_list'>
            <div className='card_line'>
                {cardDigits1}
            </div>
            <div className='card_line'>
                {cardDigits2}
            </div>
            <div className='card_line'>
                {cardDigits3}
            </div>
            <div className='card_line'>
                {cardDigits4}
            </div>
        </div>
    )
}

export default CardList