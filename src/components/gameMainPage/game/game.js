import React, { useState } from 'react'
import './game.css'
import GameSteps from './gameSteps/gameSteps'
export const GameContext = React.createContext()
const Game = () => {
    let gameArray = Array.from({ length: 9 }, (_, i) => i + 1)
    const [startSquare, setStartSquare] = useState(0)
    const [lastPosition, setLastPosition] = useState(startSquare)
    const [isLoading, setLoading] = useState(false)
    const [endSquare, setEndSquare] = useState(0)
    const startGame = (item) => {
        if (startSquare === 0) {
            setLoading(true)
            setStartSquare(item)
        }
        if (startSquare > 0 & isLoading === false & endSquare === 0) {
            setEndSquare(item)
        }
    }
    if (startSquare > 0 & endSquare > 0 & isLoading === false & endSquare === lastPosition) {
        console.log(lastPosition, endSquare)
        setTimeout(function() { alert('You win!'); }, 2);
    }
    if (startSquare > 0 & isLoading === false & endSquare > 0 & endSquare !== lastPosition) {
        console.log(lastPosition, endSquare)
        setTimeout(function() { alert('Try again!'); }, 1);
    }
    return (
        <GameContext.Provider value={setLastPosition}>
            <div className="game">
                {gameArray.map((item, index) => {
                    return (
                        <div className="square" onClick={() => startGame(item)} key={index}>
                            {item === startSquare && <div className="start"></div>}
                            {item === endSquare && <div className="end"></div>}
                        </div >
                    )
                })}
            </div>
            <GameSteps startSquare={startSquare} setLoading={setLoading} />
        </GameContext.Provider>
    )
}
export default Game