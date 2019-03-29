import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";

import "./styles.css";
library.add(faIgloo);

function App() {
  return (
    <div className="App">
      <Header />
      <FontAwesomeIcon icon="igloo" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
