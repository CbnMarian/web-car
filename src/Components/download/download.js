import "./download.css";
import Img2 from "../../assets/review/1.png";
import Img3 from "../../assets/review/2.png";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our app to get most out of it</h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img3} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
