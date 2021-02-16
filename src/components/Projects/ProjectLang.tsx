import React from 'react';
import styled from 'styled-components';

const ProjectLang = () => {
    return (
        <DivLang className="d-flex">

            <p>Html</p>
            <p>Js</p>
            <p>Php</p>
        </DivLang>
    );
};

export default ProjectLang;

const DivLang=styled.div`
  p{
    padding-right: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: #BABABA;
  }
  
  @media (max-width: 991px){
    padding: 0 1rem;
      
  }


`