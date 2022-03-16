import "../styles/Work.css";
import imgGitHub from "../images/github-notext.svg";
import imgSeeLive from "../images/monitor-eye.png";

function WorkCard(props) {
  return (
    <div className="workCardDiv">
      <div className="wcdGridItem wcdScreenshot">
        <span>project screenshot</span>
      </div>
      <div className="wcdGridItem wcdDesc">
        <div className="wcdDescHeader">
          <p>{props.cardInfo.projTitle}</p>
          <a
            className="imgHyperlink"
            href={props.cardInfo.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgGitHub} alt="github logo" />
          </a>
          <a 
            href={props.cardInfo.githubLive} target="_blank" 
            rel="noreferrer"
          >
            <img src={imgSeeLive} alt="see live icon" />
          </a>
        </div>
        <div className="wcdDescText">
          <p>{props.cardInfo.projDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
