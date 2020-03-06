import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Photo from './Photo';
import Header from './Header';
import styled from 'styled-components'


const StyledMainDiv = styled.div`
background-color: lightgreen;
`




function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=3sRgcpQ3QCY7iJoxegnKHLtweFxSkcbgRMAldHSH')
      .then((res) => {
        console.log(res);
        setData(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    
    <StyledMainDiv className="App">
      <Header/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Photo title={data.title} picture={data.url}/>
    </StyledMainDiv>
  );
}

export default App;
