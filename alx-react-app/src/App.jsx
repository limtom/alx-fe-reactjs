import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <MainContent />
      <Footer />
    </Fragment>
  );
}

export default App;
