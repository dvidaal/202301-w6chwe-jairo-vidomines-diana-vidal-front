import { useEffect } from "react";
import useApi from "./hooks/useApi";
import Header from "./components/Header/Header";

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
