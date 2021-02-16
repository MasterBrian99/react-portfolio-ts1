import React from 'react';
import styled from 'styled-components';
import {SiMaterialdesignicons as MaterialD} from 'react-icons/si';





const SkillComponent = (props:any) => {
    return (
        <SkillDiv className="d-flex flex-column" data-aos="fade-up" data-aos-delay="100"  data-aos-duration="800"  data-aos-easing="ease-in-out">

                <H1 className="text-center"> <SiMaterialdesignicons/> {props.skill}</H1>
            <Ul>
                {props.tech.map((tech:any,index:number) =>
                    <li key={index}>{tech}</li>

                )}

            </Ul>
        </SkillDiv>
    );
};

export default SkillComponent;



const SkillDiv=styled.div`
  font-family: 'Poppins', sans-serif;
  box-shadow: 7px 5px 20px 1px rgba(0,0,0,0.82);
  -webkit-box-shadow: 7px 5px 20px 1px rgba(0,0,0,0.82);
  -moz-box-shadow: 7px 5px 20px 1px rgba(0,0,0,0.82);
  height: 25rem;
    background-color: #333646;
    width: 21rem;
margin: 1rem;
`
const H1=styled.h1`
  font-weight: 600;
  margin: 1rem 0;

`
const Ul=styled.ul`
  margin-left: 1rem;
`
const  SiMaterialdesignicons=styled(MaterialD)`
  font-size: 2.5rem;
  `