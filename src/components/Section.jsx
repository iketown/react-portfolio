import React, { Fragment } from "react";
import { Icon, Container } from "semantic-ui-react";
import { Element } from "react-scroll";
import Waypoint from "react-waypoint";
import styled from "styled-components";
import { WaypointContext } from "../App";
import { scrollTo } from "./header/NavBar.jsx";
import BrianCrowd from "../images/brianCrowd1000.jpg";
import wallBG from "../images/wallBG.jpg";
const regularStyles = `
  color: #202020;
`;
const invertedStyles = `
  color: #FFFFFFd6;
`;
const concertBackground = `
background: radial-gradient(#00000099,black), url(${BrianCrowd});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (min-width: 600px) {
  background-attachment: fixed;
}
`;
const wallBackground = `
background: radial-gradient(#ffffff36,#ffffffd1), url(${wallBG});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (min-width: 600px) {
  background-attachment: fixed;
}
`;

const SectionBox = styled.div`
  position: relative;
  background: ${p => p.bgColor};
  ${p => (p.inverted ? invertedStyles : regularStyles)} position: relative;
  ${p => (p.id === "header" ? concertBackground : "")};
  ${p => (p.id === "resume" ? wallBackground : "")};
  height: ${p => `${p.windowHeight}px` || ""};
  padding: 4rem 10px 5rem;

  h1,
  h2,
  h3 {
    font-family: "Unica One", sans-serif;
    font-weight: lighter;
    letter-spacing: 1.5px;
    color: #c31;
    text-transform: uppercase;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 23px;
    letter-spacing: 4px;
    margin-bottom: 3rem;
    color: grey;
  }
`;
const ScrollDownDiv = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem;
  position: absolute;
  bottom: 0;
  & i {
    color: #afafaf;
    transition: 0.5s all;
    cursor: pointer;
    &:hover {
      color: #11abb0;
    }
  }
`;
const Section = ({
  color,
  name,
  children,
  sections,
  bgColor,
  inverted,
  bgImage,
  windowHeight
}) => {
  const nextSectionIndex = sections.findIndex(s => s === name) + 1;
  const nextSection = sections[nextSectionIndex];
  return (
    <WaypointContext.Consumer>
      {({ wpEnter, wpExit }) => (
        <Fragment>
          <Element name={name} />
          <Waypoint
            topOffset="100px"
            bottomOffset="100px"
            onEnter={() => {
              wpEnter(name);
            }}
            onLeave={() => {
              wpExit(name);
            }}
          >
            <SectionBox
              bgColor={bgColor}
              bgImage={bgImage}
              windowHeight={windowHeight}
              inverted={inverted}
              id={name}
            >
              <Container>{children}</Container>
              {/* {bgImage && (
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100vw",
                    height: "100vh",
                    zIndex: "-100"
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${bgImage})`,
                      width: "100%",
                      height: "100%",
                      backgroundAttachment: "fixed",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      filter: "blur(1px)"
                    }}
                  />
                </div>
              )} */}
              {nextSection && (
                <ScrollDownDiv>
                  <Icon
                    name="chevron circle down"
                    size="big"
                    onClick={() => scrollTo(nextSection)}
                  />
                </ScrollDownDiv>
              )}
            </SectionBox>
          </Waypoint>
        </Fragment>
      )}
    </WaypointContext.Consumer>
  );
};

export default Section;
