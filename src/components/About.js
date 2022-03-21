import "../styles/About.css";
import imgScientist from "../images/scientist-microscope-cropped.jpg"
import imgGitHub from "../images/github.svg";
import imgLinkedin from "../images/linkedin.svg";

function About() {
  return (
    <div className="aboutDiv">
      <h1>Walter Venditti</h1>
      <div className="innerAboutDiv">
        <img alt="scientist looking through microscope" src={imgScientist} />
        <div className="aboutInfoDiv">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. </p>
          <div className="aboutButtonDiv">
            <a href="https://github.com/waltvenditti" target="_blank" rel="noreferrer">
              <img alt="GitHub link" src={imgGitHub}/>
            </a>
            <a href="https://www.linkedin.com/in/walter-venditti-126712139" target="_blank" rel="noreferrer"><img alt="Linkedin link" src={imgLinkedin}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
