import React from 'react';
import styled from 'styled-components';

const ProjectMain = (props:any) => {
    return (

        <Main className="project-main-item">

            <div className="row">
                <div className="col-lg-5">
                    <Img src={props.img} alt="img" />
                </div>
                <div className="col-lg-7">
                    <div className="d-flex flex-column">
                        <H2>{props.name}</H2>
                        <P>{props.dis}</P>
                        <DivLang className="d-flex">
                            {props.lang.map((pa:string,index:number) => <p key={index}>{pa}</p>)}

                        </DivLang>

                        <ButtonDiv >
                            <Button color="#646262" href={props.gitlink} target="_blank">Github</Button>
                            <Button color="#F9AF00" href={props.livelink} target="_blank">Live Version</Button>
                        </ButtonDiv>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default ProjectMain;


const Main=styled.div`
        border-radius: 5px;
  background-color: #3b3e4e;
  width: 100%;
  margin: 2rem 0;
`
const  Img = styled.img`
  width: 400px;
  padding: 1rem;
  transition: transform .5s;  
  :hover{
    transform: scale(1.2);
    -webkit-box-shadow: -3px -3px 91px -45px rgba(0,0,0,1);
    -moz-box-shadow: -3px -3px 91px -45px rgba(0,0,0,1);
    box-shadow: -3px -3px 91px -45px rgba(0,0,0,1);
  }
  @media (max-width: 991px){
    width: 100%;
  }
    `
const H2=styled.h2`
  font-weight: 800;
  padding-top: 2rem;
  font-size: 2.5rem;

  @media (max-width: 991px){
    padding: 0 1rem;
  }
  @media (max-width: 589px){
    font-size: 1.5rem;
  }
`

const P=styled.p`
  font-weight: 700;
  @media (max-width: 991px){
    padding: 0 1rem;
  }

`

const ButtonDiv=styled.div`
  margin: 1rem 0;
  @media (max-width: 991px){
    padding: 0.5rem 1rem;
  }
`
const Button=styled.a`
   background-color: ${props => props.color};
  border-radius: 2%;
  border: 1px solid transparent;
  font-size: 1.25em;
  padding: 0.5em 1.5em;
  margin-right: 0.5em;
  color: #fff;
    :hover{
      text-decoration: none;
      color: #fff;
      cursor: pointer ;
    }
`

// rscp
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