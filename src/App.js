import React from "react",
import "./App.css";
import Weather from "./Weather";
export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <p>
          Coded by Miriam DaSilva. This is an{" "}
          <a
            href="https://github.com/Moremirmir/react-weather-app-project"
            target="_blank"
            rel=" noopener noreferrer"
          >
            open-sourced{" "}
          </a>
          code on GitHub
        </p>
      </div>
    </div>
  );
}
