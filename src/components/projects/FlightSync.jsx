import React, { Fragment } from "react";
import ProjectDescription from "./ProjectDescription.jsx";
import FlightMap from "./projectImages/airplanesGraphic.png";
const FlightSync = () => {
  return (
    <ProjectDescription
      projectName={"FlightSync"}
      description={
        <Fragment>
          <p>
            Booking air itineraries from several locations to land at the same
            location, at the same time can be a difficult task.
          </p>
          <p>
            Often one or two people end up with unnecessarily long connections,
            or options that work fine time-wise, but are prohibitively
            expensive.
          </p>
          <p>
            FlightSync gives you a visual representation of ALL the travelers'
            options, so you can easily choose the mixture of flights that gives
            the best collective flying experience.
          </p>
        </Fragment>
      }
      liveLink={"https://ike76.github.io/flightsync/"}
      githubLink={"https://github.com/ike76/flightsync"}
      image={FlightMap}
    />
  );
};

export default FlightSync;