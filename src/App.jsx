import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-regular-svg-icons";

// Component imports
import Game from "./Components/Game";
import Portfolio from "./Components/Portfolio";
import Projects from "./Components/Projects";

const App = () => {
  // Variable denoting the player's position
  const [ playerPos, setPlayerPos ] = useState(1);
  // function that changes the player position depending on up or down input
  const changePlayerPos = (direction) => {
    if(direction === 'down') {
      setPlayerPos((playerPos === 2) ? playerPos : playerPos + 1);
    } else {
      setPlayerPos((playerPos === 0) ? playerPos : playerPos - 1);
    }
  };

  // Variable denoting which mode the site is currently on
  // 0 will be Baby Defender, 1 will be portfolio, 2 will be projects
  const [ mode, setMode ] = useState(0);

  // Returns the component of the correct mode
  const getContent = () => {
    switch(mode) {
      case 0:
        return <Game playerPos={ playerPos } mode={ mode } />;
      case 1:
        return <Portfolio/>
      case 2:
        return <Projects/>
      default:
        break;
    }
  };

  // add key presses as options for control
  useEffect(() => {
    let fired = false;
    document.addEventListener("keydown", (e) => {
      console.log(e.key);
      if(!fired) {
        fired = true;
        switch(e.key) {
          case 'f':
            changePlayerPos('up');
            break;
          case 'j':
            changePlayerPos('down');
            break;
          default:
            break;
        }
      }
    });
    document.addEventListener("keyup", (e) => {
      console.log(e.key);
      if(fired) {
        fired = false;
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="logo">
        <p>
          GAME<br/>
          &<br/>
          PORTFOLIO
        </p>
      </div>
      <div className="leftBtn">
        <p className="btnLabel"><FontAwesomeIcon icon={ faCircleUp } /> Up</p>
        <button className="btn" onClick={() => { setPlayerPos(1); changePlayerPos('up')}}></button>
      </div>
      <div className="screen">
        <p className="gameName">BABY DEFENDER</p>
        <div className="contents">
          { getContent() }
        </div>
        <p className="branding">Roldan</p>
      </div>
      <div className="mediaBtns">
        <div className="gameBtn">
          <button onClick={() => setMode(0)}></button>
          <p>GAME</p>
        </div>
        <div className="mainBtn">
          <button onClick={() => setMode(1)}></button>
          <p>PORTFOLIO</p>
        </div>
        <div className="projBtn">
          <button onClick={() => setMode(2)}></button>
          <p>PROJECTS</p>
        </div>
      </div>
      <div className="rightBtn">
        <p className="btnLabel">Down <FontAwesomeIcon icon={ faCircleDown } /></p>
        <button className="btn" onClick={() => { setPlayerPos(1); changePlayerPos('down')}}></button>  
      </div>
    </div>
  );
}

export default App;
