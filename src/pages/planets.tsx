import React, { useEffect, useState } from "react";
import { IPlanet } from "../api/interfaces";
import * as d3 from "d3-scale";
import styles from "./planets.css";
// import * as css from "./planets.css";

// import * as css from "./planets.css";
import CircleComponent from "../components/svg-circles";

interface IPlanetProps {
  planets: IPlanet[];
}

export default function PlanetsComponent(props: IPlanetProps) {
  const { planets } = props;
  const margin = { top: 20, right: 20, bottom: 20, left: 40 };

  const [planetsNames, setPlanetsNames] = useState(() => {
    return planets?.map((planet) => planet.name);
  });
  const width = 1500;
  const yScale: d3.ScalePoint<string> = d3
    .scalePoint()
    .range([width, 0])
    .domain(planetsNames);

  return (
    <div className={styles.planetWrapper}>
      <h1>Planets</h1>
      <svg width={width} height={"500px"} style={{ border: "1px solid grey" }}>
        <g transform={"translate(40, 60)"}>
          <CircleComponent startX={100} xScale={yScale} planetDatas={planets} />
        </g>
      </svg>
    </div>
  );
}
