import React, { useState, useEffect } from 'react'
import logo from '../../images/logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
const NavbarMain = () => {

    const [navSize, setnavSize] = useState('10rem')
    const [navColor, setnavColor] = useState('transparent')
    // const [navItemColor, setnavItemColor] = useState('#000');

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor('#252734') : setnavColor('transparent')
        window.scrollY > 10 ? setnavSize('5rem') : setnavSize('10rem')
        // window.scrollY > 10 ? setnavItemColor('#fff') : setnavItemColor('#000')

    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    }, [])

    return (
        <Navbar expand="lg" fixed="top" style={{ backgroundColor: navColor, height: navSize, transition: 'all 1s' }}>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="140"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" style={{ color: '#fff',fontSize:'1.5rem',fontWeight:'bold' }} >Home</Nav.Link>
                        <Nav.Link href="#aboutme" style={{ color: '#fff',fontSize:'1.5rem',fontWeight:'bold'  }}>About me</Nav.Link>
                        <Nav.Link href="#myprojects" style={{ color: '#fff',fontSize:'1.5rem',fontWeight:'bold'  }}>My Projects</Nav.Link>
                        <Nav.Link href="#myskils" style={{ color: '#fff',fontSize:'1.5rem',fontWeight:'bold'  }}>Skills</Nav.Link>
                        <Nav.Link href="#contact" style={{ color: '#fff',fontSize:'1.5rem',fontWeight:'bold'  }}>Contact me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavbarMain
