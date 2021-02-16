import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Home = () => {
    return (
        <section className='home' id="home">
            <Container fluid className={'d-flex align-items-center justify-content-center flex-column  h-100'}>
                <H2>A Designer That Improve The <span>Quality Of Life</span> Of Millions Of People.</H2>
                <H3>Programmer · Web Developer · UI/UX Designer</H3>
            </Container>
        </section>
    )
}

export default Home

const H2 = styled.h2`
    font-size:5rem;
    font-weight:600;
    color:#ffffff;
    text-align:center;
    animation: moveInLeft  ease-out 1s;
    span{
        color:#FFD572;
    }
    @media (max-width:1403px){
    font-size:4rem;

    }
    @media (max-width:1132px){
    font-size:3.5rem;

    }
    @media (max-width:720px){
    font-size:2.5rem;

    }
`
const H3 = styled.h3`
  animation: moveInRight ease-out 1s;
    @media (max-width:720px){
    font-size:1.3rem;

    }
    @media (max-width:518px){
    font-size:0.8rem;

    }

`