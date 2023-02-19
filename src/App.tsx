import { useEffect } from "react";
import useApi from "./hooks/useApi";

function App() {
  const { getRobots } = useApi();

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return <div></div>;
}

export default App;
