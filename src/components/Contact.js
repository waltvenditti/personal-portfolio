import "../styles/Contact.css";
import imgCompScreen from "../images/computer-screen.jpeg";
import imgPhoneIcon from "../images/phone.png";

function Contact() {
  return (
    <div className="contactDiv">
      <div className="contactInfoDiv">
        <p>Contact Me</p>
        <p>Please get in touch if you think our work could be mutually beneficial.</p>
        <p>1234 Random Road</p>
        <p>Somewhere, Ohio 12345</p>
        <div className="phoneInfo">
          <img src={imgPhoneIcon} />
          <span>555-555-5555</span>
        </div>
      </div>
      <div className="contactImgDiv">
        <img src={imgCompScreen} />
      </div>
    </div>
  );
}

export default Contact;
