import React, { useState } from 'react'
import Modal from './components/modal/modal'
import GameMainPage from './components/gameMainPage/gameMainPage';

function App() {
  const [modalActive, setModalActive] = useState(true)
  return (
    <div className="App">
      <GameMainPage />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
