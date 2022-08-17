import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GameContext } from '../../game';
const NextStep = ({ nextDir, itemId, setLoading, currentPosition }) => {
    const [visible, setVisible] = useState(false)
    const lastPosition = useContext(GameContext)
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true)
            if (itemId === 9) {
                setLoading(false)
                lastPosition(currentPosition)
                console.log(currentPosition)
            }
        }, (itemId + 1) * 300)
        return () => {
            clearTimeout(timer);
        }
    }, [itemId, setLoading, currentPosition, lastPosition])
    return (
        <div className='step-item'>
            {visible && <div className={nextDir}></div>}
        </div >
    )
}
export default NextStep