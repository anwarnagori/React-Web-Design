import "../assets/css/style.css";
import "../assets/css/responsive.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Popular from "./components/Popular";
import Collection from "./components/Collection";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Details from "./Details";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Popular />
      <Collection />
    </>
  );
};

export default App;
