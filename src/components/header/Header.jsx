import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';
import { FaWhatsapp, FaInstagram, FaTimes, FaBars } from 'react-icons/fa';
import './header.css'; // Assuming the CSS is in header.css

const Header = () => {

    const [isToggled, setIsToggled] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleToggle = () => setIsToggled(!isToggled);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img width={"200px"} src={Logo} alt="Deset Safari Logo" />
                    </Navbar.Brand>
                    <div className='d-flex align-items-center ms-auto gap-2 order-lg-2'>
                        <div className='watsp-lg gap-2 contact-icon'>
                            <span>+971 501151643</span>
                            <FaWhatsapp className='fs-5' />
                        </div>
                        <div className='nav-icon watsp-sm nav-item align-items-center justify-content-center rounded-circle'>
                            <FaWhatsapp style={{ fontSize: '1.6rem' }} />
                        </div>
                        <div className='nav-icon nav-item d-flex align-items-center justify-content-center rounded-circle'>
                            <FaInstagram style={{ fontSize: '1.6rem' }} />
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggle' onClick={handleToggle}>
                            {isToggled ? <FaTimes /> : <FaBars />}
                        </Navbar.Toggle>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" className='order-lg-1'>
                        <Nav className="mx-auto d-flex gap-3">
                            <Nav.Link style={{ borderRadius: '20px' }} href="#home" className='fw-medium nav-item px-3'>Home</Nav.Link>
                            <Nav.Link style={{ borderRadius: '20px' }} href="#link" className='fw-medium nav-item px-3'>Desert Safari</Nav.Link>
                            <Nav.Link style={{ borderRadius: '20px' }} href="#home" className='fw-medium nav-item px-3'>Buggy Tours</Nav.Link>
                            <Nav.Link style={{ borderRadius: '20px' }} href="#link" className='fw-medium nav-item px-3'>About Us</Nav.Link>
                            <Nav.Link style={{ borderRadius: '20px' }} href="#home" className='fw-medium nav-item px-3'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
