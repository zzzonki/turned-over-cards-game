import React from 'react'
import Card from '../Card'
import './style.css'

function CardList(props) {
    const baseArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ,6 ,6 ,7 ,7 ,8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14 ,15, 15, 16, 16]
        const newArray = baseArray.sort((a, b) => a > b ? Math.random() - 0.5 : -(Math.random() - 0.5))
        console.log(newArray)
    return(
        <div className='card_list'>
            <div className='card_line'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='card_line'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='card_line'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='card_line'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default CardList