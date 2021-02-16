import React from 'react';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import {RiFacebookCircleFill} from "react-icons/ri"
import {FaDiscord} from "react-icons/fa";
import {AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai";
import HeaderText from "../components/HeaderText";
const Contact = () => {
    return (
        <section className="contact">
            <Container>
                <HeaderText name="Contact"/>
            </Container>
            <Container>
                <Main>
                    <div className="d-flex align-items-center flex-column">
                        <H2>Pasindu Pramodaya</H2>
                        <h3>My Email</h3>
                        <H3>example@gmail.com</H3>

                    </div>
                        <div className="d-flex justify-content-center" >
                            <Icon><RiFacebookCircleFill/>  </Icon>
                            <Icon><FaDiscord/>  </Icon>
                            <Icon  href={"https://twitter.com/Master_br1an"} target="_blank"><AiOutlineTwitter/>  </Icon>
                            <Icon   href={"https://www.linkedin.com/in/pasindu-p-konghawaththa-3808861a0/"} target="_blank"><AiFillLinkedin/>  </Icon>

                        </div>
                </Main>
            </Container>

        </section>
    );
};

export default Contact;


const Main=styled.div`
  font-family: 'Poppins', sans-serif;

  box-shadow: 7px 5px 20px 1px rgba(0,0,0,0.82);
  -webkit-box-shadow: 7px 5px 20px 1px rgba(0,0,0,0.82);
  -moz-box-shadow: 7px 5px 20px 1px rgba(0,0,0,0.82);
  background-color: #252734;
  border-radius: 10px;
  width: 100%;
  margin: 1rem;
  @media (max-width: 767px){
 margin: 0;

  }
  
`
const H2 = styled.h2`
    font-size: 3rem;
  font-weight: 600;
  margin: 2rem 0;
  @media (max-width: 767px){
    font-size: 2rem;

  }
`

const H3=styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
  @media (max-width: 767px){
    font-size: 1.5rem;

  }
`
const Icon = styled.a`
  font-size: 4rem;
  color: #fff;
  @media (max-width: 767px){
    font-size: 3.3rem;

  }

  :hover {
    color: #908e8e;
    cursor: pointer;
  }
`