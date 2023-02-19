import { useEffect } from "react";
import Header from "./components/Header/Header";
import useApi from "./hooks/useApi";

const App = () => {
  const { getRobots } = useApi();

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
};

export default App;
