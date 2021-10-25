import { useEffect, useState } from "react";
import { getPeople, getPlanets } from "./api/swapi";

import "./styles.css";
import { IPlanet } from "./api/interfaces";
import PlanetsComponent from "./pages/planets";

export default function App() {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchData() {
    try {
      setLoading(true);
      const { data } = await getPlanets({ page: 1, search: "" });
      setPlanets(data?.results);
      const { data: people } = await getPeople({ page: 1, search: "" });
      // console.log(data?.results, people?.results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!planets) {
    return <div>there are no data</div>;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PlanetsComponent planets={planets} />
    </div>
  );
}
