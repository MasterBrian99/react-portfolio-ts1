import React from 'react';
import styled from "styled-components";


interface OptionalMiddleName {
    name: string;
}

const HeaderText = ({name}:OptionalMiddleName) => {


    return (
        <H1>
            {name}
        </H1>
    );
};

export default HeaderText;

const H1 = styled.h1`
padding-top:1rem;
text-align:center;
font-weight: 700;
  font-size: 3.5rem;

  @media (max-width: 589px){
    font-size: 2.5rem;
  }
`