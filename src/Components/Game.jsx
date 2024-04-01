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
    const [ score, setScore ] = useState(0);
    const [ playing, setPlaying ] = useState(true);
    const [ prevPos, setPrevPos ] = useState(playerPos);

    let intervalId;
    useEffect(() => {
        if(gameState[0][1]  == -2) {
            setScore(score + 1);
        }
    }, [gameState[1][1]]);
    useEffect(() => {
        if(gameState[0][0] < 0) {
            setPlaying(false);
        }
    }, [gameState[1][0]]);

    useEffect(() => {
        if(gameState[1][1]  == -2) {
            setScore(score + 1);
            setDuration(duration - 100);
            console.log(duration);
        }
    }, [gameState[1][1]]);
    useEffect(() => {
        if(gameState[1][0] < 0) {
            setPlaying(false);
        }
    }, [gameState[1][0]]);

    useEffect(() => {
        if(gameState[2][1]  == -2) {
            setScore(score + 1);
        }
    }, [gameState[1][1]]);
    useEffect(() => {
        if(gameState[2][0] < 0) {
            setPlaying(false);
        }
    }, [gameState[1][0]]);

    const [seconds, setSeconds] = useState(0);
    const [duration, setDuration] = useState(1000);
    useEffect(() => {
        if(playing) {
        intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
        let temp = gameState;
        let snake = temp[1].indexOf(-1);
        if(snake < 0) {
            for(let i = 0; i < temp[1].length; i++) {
                temp[1][i] = Math.abs(temp[1][i]);
            }
            temp[1][4] *= -1;
            snake = 4;
        } else {
            temp[1][snake - 1] *= -1;
            temp[1][snake] *= -1;
        }
        setGameState(temp);
      }, duration);
    }
      return () => clearInterval(intervalId);
    }, [playing]);
    
    useEffect(() => {
        let temp = gameState;
        temp[prevPos][1] /= 2;
        temp[playerPos][1] *= 2;
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
            <h1>SCORE: { String(score).padStart(4, '0') }</h1>
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