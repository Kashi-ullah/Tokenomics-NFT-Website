import React from "react";
import ReactDOM from "react-dom";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './LedderCards.module.css';
import events from'./events.json';
const LedderCards = () => {
  return (

    <div
    className="somestyle"
    style={{ background: "black", fontFamily: "Trebuchet Ms" }}
  >
    <h1>CDTN Timeline</h1>
    <VerticalTimeline>
      {events.map(event => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          style={{ color:"white" }}
          date={event.date}
          iconStyle={{ background: "blue", color: "white" }}
        >
          <h3
            className="vertical-timeline-element-title" 
            style={{ color:"black" }}
            dangerouslySetInnerHTML={{ __html: event.event }}
          />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
);

}

export default LedderCards