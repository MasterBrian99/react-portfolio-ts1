import React from 'react';
import styled from "styled-components";
import {AiFillGithub as GithubFill} from 'react-icons/ai';
import {FiExternalLink as ExternalLink} from 'react-icons/fi';
const ProjectSm = (props:any) => {
    return (
<>
            <SmProject>
                <div className="d-flex justify-content-end">
                    <AiFillGithub/>
                    <a href={props.gitLink} target="_blank" rel="noreferrer"><FiExternalLink/></a>
                </div>
                <div className="d-flex flex-column p-3">
                    <H1>{props.projectName}</H1>
                    <P>{props.description}</P>
                    <div className="project-lang">
                        <DivLang className="d-flex">
                            {props.lang.map((l:string,index:number)=>
                                <p key={index}>{l}</p>
                            )}
                        </DivLang>
                    </div>
                </div>
            </SmProject>

</>
    );
};

export default ProjectSm;


const  SmProject=styled.div`
  //height: 30rem;
  width: 21rem;
  background: #393C4B;
  margin: 1rem;
  -webkit-box-shadow: -3px -3px 91px -45px rgba(0,0,0,1);
  -moz-box-shadow: -3px -3px 91px -45px rgba(0,0,0,1);
  box-shadow: -3px -3px 91px -45px rgba(0,0,0,1);
  transition: transform .5s;
      :hover{
        transform: scale(1.1);
      }
  @media (max-width: 1199px){
    margin: 2rem;
  }
`

const AiFillGithub=styled(GithubFill)`
    font-size: 2rem;
  margin: 0.3rem;

`
const FiExternalLink=styled(ExternalLink)`
        color: #fff;
  font-size: 2rem;
  margin: 0.3rem;
  transition: transform .5s;
  :hover{
    color: #fff;
    cursor: pointer;
    transform: scale(1.2);
  }

`

const H1=styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 2rem;
`
const P=styled.p`
  font-weight: 700;

`

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