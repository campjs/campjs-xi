import * as React from "react";
import Slide from "../components/slide";

const paragraphStyles = {
  fontFamily: "monospace",
  letterSpacing: "0.1em",
  textShadow: "1px 1px 0 #eeeeee",
  fontSize: "3rem",
  marginBottom: 48,
};

const websiteStyles = {
  ...paragraphStyles,
  position: "absolute",
  bottom: "1vh",
  right: "4vw",
  zIndex: 10,
  color: "white",
  textShadow: undefined,
  fontWeight: "normal",
  textAlign: "right",
};

const cfpStyles = {
  ...websiteStyles,
  bottom: '10vw',
  left: 'calc(50% - 18vw)',
  right: undefined,
  textAlign: 'center',
}

const slackStyles = {
  ...websiteStyles,
  left: "4vw",
  right: undefined,
  textAlign: "left",
};

const blurbStyles = {
  ...paragraphStyles,
  position: "absolute",

  top: "21rem",
  left: 'calc(23% + 100px)',
  right: '120px',
  zIndex: 20,
  fontSize: "2rem",
  textShadow: undefined,
};

const Page = ({ location }) => {
  return (
    <Slide location={location}>
      <div id="intro">
        <h1>🏕 CampJS</h1>
        <div className="date">Fri 3rd - Mon 6th November 2023</div>
        <div className="location">Koonjewarre, Springbrook, QLD</div>
      </div>

      <p style={slackStyles}>
        stay up to date
        <br />
        <strong style={{ fontSize: "4rem" }}>campjs.org/slack</strong>
      </p>

      <p style={websiteStyles}>
        tickets available at
        <br />
        <strong style={{ fontSize: "4rem" }}>www.campjs.org</strong>
      </p>

      <p style={cfpStyles}>
        submit a talk at
        <br />
        <strong style={{ fontSize: "4rem" }}>cfp.campjs.org</strong>
      </p>


      <p style={blurbStyles}>
        <strong>Not a regular conference.</strong> It’s time and space to learn
        new things, relax and really connect. Whether you’re a Javascript
        veteran, total newbie, into art, music or hardware, there’s something
        for everyone.
      </p>

      {/* <div style={pageStyles}>
        <p style={paragraphStyles}>
          We schedule a unique blend of expert-led content and self-directed
          learning and encourage attendees to run other activities like
          bushwalking, drone flying or knitting.
        </p>
      </div> */}
    </Slide>
  );
};

export default Page;
