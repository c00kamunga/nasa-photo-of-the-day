import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

axios
  .get("https://api.nasa.gov/#apod")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/#apod")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
