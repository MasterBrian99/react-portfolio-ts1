import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {about as aboutParagraph} from '../data/mainData'
import AOS from 'aos';
AOS.init();

const About = () => {

    return (
        <section className={'about'}>
            <Main>

                <H3>About Me</H3>
                <div className="row">
                    <div className="col-lg-5  d-flex align-items-center">
                        <H1> <span>Pasindu </span>Pramodaya</H1>
                    </div>
                    <div className="col-lg-7">
                        {aboutParagraph.map(pa => <P key={pa.key}> {pa.aboutP} </P>)}

                    </div>
                </div>

            </Main  >
        </section>
    )
}

export default About



const Main = styled(Container)`

@media (max-width:991px){
    padding:3rem 0;
}


`

const H3 = styled.h3`
font-size:1.5rem;
@media (max-width:991px){
font-size:1.2rem;

}

`
const H1 = styled.h1`
    font-weight:800;
    font-size:4rem;

    span{
        color:#FFD572;
    }
    @media (max-width:991px){
font-size:3rem;

}
`

const P = styled.p`
font-size:1.2rem;
@media (max-width:991px){
font-size:1rem;

}

`