import "./workInProgress.css";
import lader from "../../assets/from outside/crane.gif";
import laptop from "../../assets/from outside/laptop.png";

function WorkInProgress() {
  return (
    <div className="body-noPage">
      <div className="box-noPage">
        <img className="laptop" src={laptop} alt="content" />
        <div className="text">
          <h1>Website is under construction</h1>
          <div class="loader"></div>
        </div>
        <div className="button">
          <a className="button-text" href="*">
            Press to go Home
          </a>
        </div>
        <div>
          <img className="lader" src={lader} alt="content" />
        </div>
      </div>
    </div>
  );
}

export default WorkInProgress;
