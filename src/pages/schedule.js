import * as React from "react";
import Layout from "../components/layout";
import Heading from "../components/heading";

import schedule from "../../schedule.json";
import { DayName } from "./DayName";
import { Presenters } from "./Presenters";

const paragraphStyles = {
  marginBottom: 48
};
const middleParagraphStyles = {
  marginBottom: 24
};

const Talk = ({ title, abstract, room, persons, start, duration, url }) => (
  <div
    style={{
      marginBottom: "3vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: "1vh 1vw"
    }}
  >
    <div style={{ flexShrink: 1 }}>
      <div>{start}</div>
      <div style={{ color: '#888', fontSize: '0.5rem' }}>...</div>
      <div style={{ color: '#888', fontSize: '0.8rem' }}>{duration}</div>
    </div>
    <div style={{ flexGrow: 1, marginBottom: "1vh" }}>
      <h4 style={{ marginTop: 0, marginBottom: "1vh" }}><a href={url}>{title}</a></h4>
      <p style={{ marginBottom: "1vh" }}>
        <Presenters persons={persons} />
      </p>
      <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', color: '#888' }}>{room}</p>
    </div>
  </div>
);

const days = schedule.schedule.conference.days.map((day) => {
  return (
    <div style={{ marginBottom: "5vh" }}>
      <h2 style={{ borderBottom: "1px solid #eeeeee" }}>
        {<DayName date={new Date(day.date)} />}
      </h2>

      {Object.entries(day.rooms).map(([name, room]) => (
        <>{room.map(Talk)}</>
      ))}
    </div>
  );
});

const Page = ({ location }) => {
  return (
    <Layout location={location}>
      <Heading>🏕 Schedule</Heading>

      {days}
    </Layout>
  );
};

export default Page;
