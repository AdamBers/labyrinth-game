import React from 'react';
import './modal.css'

const Modal = ({ active, setActive }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} >
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <h3>Вот, что тебя ждет в игре:</h3>
                <h5>Двигайся в лабиринте по стрелкам</h5>
                <ul>

                    <li>Уровень сложности: 1</li>
                    <li>Скорость: 1</li>
                    <li>Количество ходов: 10</li>
                </ul>

                <button type="button" className="btn btn-success" onClick={() => setActive(false)}>Начать</button>
            </div>
        </div>
    )
}

export default Modal

