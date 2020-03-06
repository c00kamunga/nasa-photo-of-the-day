import React from "react";
import styled from 'styled-components';



const PictureTitle = styled.h1`
font-size: 100px;
border: 5px solid red;
`




const Photo = (props) => {
  return (
    <div>
      <PictureTitle>{props.title}</PictureTitle>
      <img src={props.picture} />
    </div>
  );
};

export default Photo;