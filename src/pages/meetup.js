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

  top: "37%",
  left: 'calc(23% + 65px)',
  right: '120px',
  zIndex: 20,
  fontSize: "2rem",
  textShadow: undefined,
};

const blurbStyles2 = {
  ...paragraphStyles,
  position: "absolute",

  top: "22%",
  left: '6%',
  right: '120px',
  zIndex: 20,
  fontSize: "2rem",
  textShadow: undefined,
};


const Page = ({ location }) => {
  return (
    <Slide location={location}>
      <div id="intro">
        <h1>Camp.JS</h1>
        <div>3 night javascript code retreat</div>
      </div>

      <p style={slackStyles}>
        <strong style={{ fontSize: "4rem" }}>campjs.org</strong>
      </p>

      <p style={websiteStyles}>
        $370 BYO tent
        <br/>
        $430 dorm room
        <br/>
        $340 child ticket
      </p>
{/* 
      <p style={cfpStyles}>
        submit a talk at
        <br />
        <strong style={{ fontSize: "4rem" }}>cfp.campjs.org</strong>
      </p> */}


      <p style={blurbStyles}>
        <strong>Not a regular conference.</strong> It’s time and space to learn
        new things, relax and really connect. Whether you’re a Javascript
        veteran, total newbie, into art, music or hardware, there’s something
        for everyone.
      </p>
      <p style={blurbStyles2}>
        Fri 6pm to Mon 8am <br/>
        3rd - 6th Nov 2023<br/>
        Koonjewarre, Springbrook, QLD
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
