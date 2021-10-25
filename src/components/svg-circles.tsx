import { useEffect, useState } from "react";
// import "./styles.css";
import { IPlanet, ICircleAttributes } from "../api/interfaces";
import * as d3 from "d3-scale";

interface ICircleComponentProps {
  startX: number;
  xScale: d3.ScalePoint<string>;
  planetDatas: IPlanet[];
}

export default function CircleComponent(props: ICircleComponentProps) {
  const { startX, xScale, planetDatas } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [circleData, setCircleData] = useState<ICircleAttributes[]>();

  function drawCircles() {
    const circleColor = (nplid: string) => {
      return "red";
    };

    const circleCoords = planetDatas?.map((planet: IPlanet) => ({
      cx: xScale(planet.name) || 0,
      cy: startX,
      fill: circleColor(planet.name),
      r: parseInt(planet?.diameter, 10) / 1000 || 20,
      id: planet.name
    }));
    setCircleData(circleCoords as any);
  }

  useEffect(() => {
    drawCircles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!circleData) {
    return <div>there are no data</div>;
  }

  return (
    <>
      {circleData?.map((c: any, ind: number) => (
        <circle
          key={ind}
          data-id={c?.id}
          cy={c?.cy}
          cx={c?.cx}
          r={c?.r}
          fill={c.fill}
          // onMouseOver={onMouseOverCircle}
          // onMouseLeave={onMouseLeave}
          // className={cx({
          //   [styles.inactive]: over && !allDrugInteractionsIds?.includes(c?.id || '')
          // })}
        />
      ))}
    </>
  );
}
