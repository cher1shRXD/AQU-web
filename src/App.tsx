import { useEffect, useState } from "react";
import Header from "./components/header";
import Router from "./components/router";
import './index.css';
import CustomToastContainer from "./libs/toastify/customToastContainer";
import { useLocation } from "react-router-dom";

function App() {

  const [headerView, setHeaderView] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setHeaderView(false);
    }else{
      setHeaderView(true);
    }
  }, [location.pathname]);

  return (
    <>
      <CustomToastContainer />
      {headerView && <Header />}
      <Router />
    </>
  );
}

export default App;
