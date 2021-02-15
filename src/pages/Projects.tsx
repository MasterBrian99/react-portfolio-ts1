import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import img from '../images/david-nicolai-ygchoNbpZIU-unsplash.jpg';
const Projects = () => {
    return (
        <section className={'projects'}>
            <Container>
                <H1>My Projects</H1>

                <div className="d-flex flex-column justify-content-center align-items-center">

                    <div className="project-main-item">

                        <img src={img} alt="img" style={{width: '100px'}}/>

                    </div>
                </div>


            </Container>
        </section>
    )
}

export default Projects

const H1 = styled.h1`
padding-top:1rem;
text-align:center;

`
