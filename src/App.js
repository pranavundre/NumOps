import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { BrowserRouter as Router, Switch, Route } from "react-router";
import Simpops from "./components/Simpops";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Simpops />
    </>
  );
}

export default App;
