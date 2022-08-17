import React from 'react'
import './gameSteps.css'
import NextStep from './nextStep/nextStep'
const GameSteps = ({ startSquare, setLoading }) => {
    const steps = new Array(10).fill(0)
    var currentPosition = startSquare
    const checkNextStep = () => {
        var directions = ['top', 'right', 'bottom', 'left']
        const resolution = 3
        var items = [];
        var value = 1
        for (let row = 0; row < resolution; row++) {
            items[row] = [];
            for (let column = 0; column < resolution; column++) {
                items[row][column] = value;
                value++
            }
        }
        //delete top
        if (currentPosition === items[0].find(e => e === currentPosition)) {
            directions = directions.filter(i => i !== 'top')
        }
        //delete bottom
        if (currentPosition === items[resolution - 1].find(e => e === currentPosition)) {
            directions = directions.filter(i => i !== 'bottom')
        }
        // delete left
        for (let i = 0; i < resolution; i++) {
            if ((items[i][0]) === currentPosition) {
                directions = directions.filter(i => i !== 'left')
            }
        }
        // delete right
        for (let i = 0; i < resolution; i++) {
            if ((items[i][resolution - 1]) === currentPosition) {
                directions = directions.filter(i => i !== 'right')
            }
        }
        if (currentPosition > 0) {
            var nextDirection = directions[Math.floor(Math.random() * directions.length)]
        }
        if (nextDirection === 'top') {
            currentPosition = currentPosition - resolution
        }
        if (nextDirection === 'bottom') {
            currentPosition = currentPosition + resolution
        }
        if (nextDirection === 'left') {
            currentPosition = currentPosition - 1
        }
        if (nextDirection === 'right') {
            currentPosition = currentPosition + 1
        }
        return nextDirection
    }
    return (
        <div className='game_steps'>
            {startSquare > 0 && steps.map((item, index) => {
                const nextDir = checkNextStep()
                return (
                    <NextStep
                        nextDir={nextDir}
                        key={index}
                        itemId={index}
                        setLoading={setLoading}
                        currentPosition={currentPosition}
                    />
                )
            })}
            {startSquare === 0 && steps.map((item, index) => {
                return (
                    <div className='step-item' key={index}></div>
                )
            })}
        </div >
    )
}

export default React.memo(GameSteps)