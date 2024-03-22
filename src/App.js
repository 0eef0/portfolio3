import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-regular-svg-icons";

function App() {
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
        <div className="contents"></div>
        <p className="branding">Roldan</p>
      </div>
      <div className="mediaBtns">
        <div className="gameBtn">
          <button></button>
          <p>GAME</p>
        </div>
        <div className="mainBtn">
          <button></button>
          <p>PORTFOLIO</p>
        </div>
        <div className="projBtn">
          <button></button>
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
