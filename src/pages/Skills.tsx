import React from 'react';
import {Container} from "react-bootstrap";
import styled from "styled-components";
import SkillComponent from "../components/Skills/SkillComponent";
import HeaderText from "../components/HeaderText";
import {skills} from "../data/mainData";

const Skills = () => {
    return (
        <section className="skills">
            <Container className="d-flex justify-content-center">
                <HeaderText name="Skills"/>
            </Container>
                <SmProjectContainer className="d-flex justify-content-center  flex-wrap">

                    {skills.map(((s:any,index:number)=>
                        <SkillComponent key={index} skill={s.skill} tech={s.technologies}/>

                    ))}

                </SmProjectContainer>
        </section>
    );
};

export default Skills;

const SmProjectContainer=styled(Container)`
  @media (max-width: 991px){
    max-width: 100%;
  }
`
