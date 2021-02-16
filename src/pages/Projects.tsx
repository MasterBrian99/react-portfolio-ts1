import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import ProjectMain from "../components/Projects/ProjectMain";
import ProjectSm from "../components/Projects/ProjectSm";
import HeaderText from "../components/HeaderText";
import {projectMain,projectSm} from "../data/mainData";

const Projects = () => {
    return (
        <section className={'projects'}>
            <Container>
                <HeaderText name="My Projects"/>
                {projectMain.map((pa,index)  => <ProjectMain
                    key={index} img={pa.img}
                    name={pa.projectName} dis={pa.description} lang={pa.lang} gitlink={pa.gitLink} livelink={pa.liveLink}> </ProjectMain>)}
            </Container>

            <SmProjectContainer >
                <div className="d-flex justify-content-center flex-wrap">
                    {projectSm.map((sm,index)=>
                        <ProjectSm  key={index} gitLink={sm.gitLink} projectName={sm.projectName} description={sm.description} lang={sm.lang}/>
                    )}



                </div>
            </SmProjectContainer>
            {/*<Container className="d-flex justify-content-center">*/}
            {/*    <Btn >Show more</Btn>*/}

            {/*</Container>*/}


        </section>
    )
}

export default Projects

const SmProjectContainer=styled(Container)`
  @media (max-width: 991px){
    max-width: 100%;
  }

`
// const Btn=styled.button`
//   background-color: #252734;
//   margin: 2rem 0;
//   padding: .5rem 4rem;
//   border-radius: 50px;
//   color: #fff;
//   font-size: 2rem;
//   outline: none;
//   border:none;
//   :hover,:active{
//     box-shadow: 0 0 0 .2rem #F9AF00;
//     transform: translateY(-0.25em );
//   }
// `