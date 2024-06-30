import { useState } from 'react'
import './App.css'

import Square from './components/square'
import { TURN } from './constants/constants.js'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const updateBoard = () => {

  }

  const [turn, setTurn] = useState(true)
  
  const updatedTurn = () => {
    setTurn(!turn)
  }

  const isSelected = turn === true? 'isSelected' : ''
  const isSelected2 = turn === false? 'isSelected' : ''

  // const turnClass = turn = TURN.X ? ''

  return (
  <main className='board'>
    <h1>Tic Tac Toe</h1>
    <section className='container'>
      {
        board.map((a,i) => {
          return (
            <Square key={i} updateTurn={updatedTurn}></Square>
          )
        })
      }
    </section>
    <section className='turn-board'>
      <div className={`container-turn ${isSelected}`}>{TURN.X}</div>
      <div className={`container-turn ${isSelected2}`}>{TURN.O}</div>
    </section>
  </main>
  )
}

export default App
