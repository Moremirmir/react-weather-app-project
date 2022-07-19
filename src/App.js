import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <p>
          Coded by{" "}
          <a
            href="https://gleeful-pegasus-9230a7.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Miriam DaSilva
          </a>
          . This is an{" "}
          <a
            href="https://github.com/Moremirmir/react-weather-app-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced{" "}
          </a>
          code on GitHub.
        </p>
      </div>
    </div>
  );
}
