import "./workInProgress.css";
import lader from "../../assets/from outside/lader.png";

function WorkInProgress() {
  return (
    <div className="container">
      <h1>Website is under construction</h1>
      <div className="loader"></div>
      <div>
        <img className="lader" src={lader} alt="content" />
      </div>
    </div>
  );
}

export default WorkInProgress;
