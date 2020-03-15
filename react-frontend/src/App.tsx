import React from "react";
import Loading from "./components/Loading";
import Home from "./components/Home";

const LoadingPage = () => <Loading />;
const homePage = () => <Home />;
const useDelay = (ms: number) => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), ms);
    return () => clearTimeout(timer);
  }, [ms]);
  return loading;
};

const App: React.FC = () => {
  const loading = useDelay(3500);

  return (
    <React.Fragment>
      {loading && LoadingPage()}
      {!loading && homePage()}
    </React.Fragment>
  );
};

export default App;
