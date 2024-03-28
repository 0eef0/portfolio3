import React, { useState, useEffect } from 'react'

const Game = () => {
    /*
        This 2D array represents the game state
        1 means blank tile
        -1 means snake_hungry
        2 means defender_ready
        -2 means defender_attack
        3 means baby_idle
        -3 means snake_full
    */
    const [ gameState, setGameState ] = useState([
        [2,2,2,2,2],
        [2,2,2,2,2],
        [2,2,2,2,2]
    ]);

  return (
    <div className='gameState'>
        {
            gameState.map(row => {
                return row.map(col => {
                    return <img src={require(`../Assets/sprite(${col}).png`)} />
                })
            })
        }
    </div>
  )
}

export default Game