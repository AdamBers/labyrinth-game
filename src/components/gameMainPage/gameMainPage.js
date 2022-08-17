import React from 'react'
import Game from './game/game'
import GameHeader from './gameHeader/gameHeader'
import './gameMainPage.css'

const GameMainPage = () => {
    return (
        <div className='game_main'>
            <GameHeader />
            <Game />
        </div>
    )
}

export default GameMainPage