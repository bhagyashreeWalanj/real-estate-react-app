import React from "react";
import "./Contact.scss";
import { MdCall, MdVideoCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";

function Contact() {
  return (
    <>
      <section className="cWrapper">
        <div className="innerWidth paddings flexCenter cContainer">
          {/* left side*/}
          <div className="flexColStart cLeft">
            <span className="orangeText">Our Contact Us</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">
              We always ready to help by providing the best services for you.
              <br /> We believe a good blace to live can make your life better
            </span>

            <div className="flexColStart contactModes">
              {/* First Mode */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">0213 123 456 89</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call</div>
                </div>
                {/* second Mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Chat</span>
                      <span className="secondaryText">0213 123 456 89</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Chat Now</div>
                </div>
              </div>
              <div className="flexStart row">
                {/* third Mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdVideoCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Video Call</span>
                      <span className="secondaryText">0213 123 456 89</span>
                    </div>
                  </div>
                  <div className="flexCenter button ">Video Call Now</div>
                </div>
                {/* 4th Mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BiMessageRoundedDetail size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Message</span>
                      <span className="secondaryText">0213 123 456 89</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Message Now</div>
                </div>
              </div>
            </div>
          </div>

          {/* right side*/}
          <div className=" cRight">
            <div className="imageContainer">
              <img src="./images/contact.jpg" alt="contacts" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
