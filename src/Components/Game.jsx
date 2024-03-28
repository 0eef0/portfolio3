import React, { useState, useEffect } from 'react'

const Game = ({ playerPos, mode }) => {
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
        [3,1,1,1,-1],
        [3,2,1,1,-1],
        [3,1,1,1,-1]
    ]);
    const [ prevPos, setPrevPos ] = useState(playerPos);
    const [ snakesPos, setSnakesPos] = useState([4,4,4]);
    useEffect(() => {
        let temp = gameState;
        temp[prevPos][1]--;
        temp[playerPos][1]++;
        setPrevPos(playerPos);
        setGameState(temp);
    }, [playerPos]);

    // reset the player position when the mode is changed
    useEffect(() => {
        setPrevPos(1);
    }, [mode]);

  return (
    <div className='gameState'>
        <div className="scoreboard">
            <h1>TOP: 0000</h1>
            <h1>SCORE: 0000</h1>
        </div>
        {
            gameState.map((row, i) => {
                return <div key={i}> 
                    {
                        row.map((col, j) => {
                            return (col !== 1) ? <img src={require(`../Assets/sprite(${col}).png`)} alt={col} key={`r${i}c${j}`} /> : <img src={require(`../Assets/sprite(2).png`)} alt={col} key={`r${i}c${j}`} className="spacer" />;
                        })
                    }
                </div>
            })
        }
    </div>
  )
}

export default Game