import React from 'react';
import {Container} from "react-bootstrap";
import styled from "styled-components";
import SkillComponent from "../components/Skills/SkillComponent";
import HeaderText from "../components/HeaderText";

const Skills = () => {
    return (
        <section className="skills">
            <Container className="d-flex justify-content-center">
                <HeaderText name="Skills"/>
            </Container>
                <SmProjectContainer className="d-flex justify-content-center  flex-wrap">
                    <SkillComponent/>
                    <SkillComponent/>
                    <SkillComponent/>
                    <SkillComponent/>
                    <SkillComponent/>
                    <SkillComponent/>
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
