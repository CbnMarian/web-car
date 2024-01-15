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
              Ten ladies, once shy, now curious, observed a musical event with
              anticipation. Despite initial hesitations, strong convictions
              emerged. Over the next few months, both income and new homes
              flourished, marking a transformative journey.
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
