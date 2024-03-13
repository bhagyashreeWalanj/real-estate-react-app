import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.scss";
import data from "../../utils/accordion";
function Value() {
  return (
    <>
      <section className="vWrapper">
        <div className="innerWidth paddings flexCenter vContainer">
          {/* left side*/}
          <div className="vLeft">
            <div className="imageContainer">
              <img src="./images/value.png" alt="value" />
            </div>
          </div>

          {/* right side*/}
          <div className="flexColStart vRight">
            <span className="orangeText">Our Values</span>
            <span className="primaryText">Value We Give to You</span>
            <span className="secondaryText">
              We always ready to help by providijng the best services for you.
              <br />
              We beleive a good blace to live can make your life better
            </span>

            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, index) => (
                <AccordionItem
                  className="accordionItem"
                  key={index}
                  uuid={index}
                >
                  <AccordionItemState>
                    {({ expanded }) => (
                      <>
                        {/* <AccordionItem
                            expanded ? "expanded" : ""
                          }`}
                        > */}
                        <AccordionItemHeading
                          className={expanded ? "expanded" : ""}
                        >
                          <AccordionItemButton className="flexCenter accordionButton">
                            <div className="flexCenter icon">{item.icon}</div>
                            <span className="primaryText">{item.heading}</span>
                            <div className="flexCenter icon">
                              <MdOutlineArrowDropDown
                                size={20}
                              ></MdOutlineArrowDropDown>
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p className="secondaryText">{item.detail}</p>
                        </AccordionItemPanel>
                        {/* </AccordionItem> */}
                      </>
                    )}
                  </AccordionItemState>
                </AccordionItem>
              ))}
            </Accordion>

            {/* <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                let className = null;
                return (
                  <>
                    <AccordionItem
                      className={`accordionItem ${className}`}
                      key={i}
                      uuid={i}
                    >
                       <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? (className = "expanded")
                            : (className = "collapsed")
                        }
                       {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState> 

                      <AccordionItemHeading>
                        <AccordionItemButton className="flexCenter accordionButton">
                          <div className="flexCenter icon">{item.icon}</div>
                          <span className="primaryText">{item.heading}</span>
                          <div className="flexCenter icon">
                            <MdOutlineArrowDropDown
                              size={20}
                            ></MdOutlineArrowDropDown>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="secondaryText">{item.detail}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </>
                );
              })}
            </Accordion> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Value;
