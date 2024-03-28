import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-regular-svg-icons";

// Component imports
import Game from "./Components/Game";
import Portfolio from "./Components/Portfolio";
import Projects from "./Components/Projects";

const App = () => {
  // Variable denoting which mode the site is currently on
  // 0 will be Baby Defender, 1 will be portfolio, 2 will be projects
  const [ mode, setMode ] = useState(0);

  const getContent = () => {
    switch(mode) {
      case 0:
        return <Game/>;
      case 1:
        return <Portfolio/>
      case 2:
        return <Projects/>
      default:
        break;
    }
  };

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
        <button className="btn"></button>
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
        <button className="btn"></button>  
      </div>
    </div>
  );
}

export default App;
