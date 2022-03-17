import "../styles/Contact.css";
import imgCompScreen from "../images/computer-screen.jpeg";
import imgPhoneIcon from "../images/phone.png";
import imgEmailIcon from "../images/email.png";
import imgGithubIcon from "../images/github-notext.svg";
import imgLinkedinIcon from "../images/linkedin.svg";

function Contact() {
  return (
    <div className="contactDiv">
      <div className="contactInfoDiv">
        <h2>Contact Me</h2>
        <p>Please get in touch if you think our work could be mutually beneficial.</p>
        <div className="addressDiv">
          <p>1234 Random Road</p>
          <p>Somewhere, Ohio 12345</p>
        </div>
        <div className="phoneInfo">
          <img src={imgPhoneIcon} alt="phone icon" />
          <span>555-555-5555</span>
        </div>
        <div className="emailInfo">
          <img src={imgEmailIcon} alt="email icon" />
          <span>waltvenditti@gmail.com</span>
        </div>
        <div className="personalWebsiteIcons">
          <a href="https://github.com/waltvenditti" target="_blank" rel="noreferrer">
            <img src={imgGithubIcon} alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/walter-venditti-126712139" target="_blank" rel="noreferrer">
            <img src={imgLinkedinIcon} alt="linkedin icon" />
          </a>
        </div>
      </div>
      <div className="contactImgDiv">
        <img src={imgCompScreen} alt="screenshot of some computer code" />
      </div>
    </div>
  );
}

export default Contact;
