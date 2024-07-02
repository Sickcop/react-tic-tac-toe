import { useState } from 'react'
import './App.css'

import Square from './components/square'
import { TURN } from './constants/constants.js'

function App() {

  const square = document.getElementsByClassName('.square')
  const [turn, setTurn] = useState(true)
  const [board, setBoard] = useState(Array(9).fill(null))
  
  const turnBoard = turn == true ? 'X' : 'O'
  const newBoard = [...board]

  addEventListener('click', (e) => {
    for(element in board) {
      element = new
    }
  })
  
  const allUpdates = () => {

    const updatedTurn = () => {
      setTurn(!turn)
    }

    updatedTurn()
  }

  const isSelected = turn === true? 'isSelected' : ''
  const isSelected2 = turn === false? 'isSelected' : ''


  return (
  <main className='board'>
    <h1>Tic Tac Toe</h1>
    <section className='container'>
      {
        board.map((a,index) => {
          return (
            <Square key={index} updateTurn={allUpdates} index={index}>{a}</Square>
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
