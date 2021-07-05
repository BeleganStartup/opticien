// React
import { useState } from 'react'
// Next
import Link from 'next/link'
// React Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// Icons
import { VscAccount, VscHome } from "react-icons/vsc"
import { FaFileInvoiceDollar, FaLinkedin } from "react-icons/fa"
import { GiStabbedNote } from "react-icons/gi"
import { RiAccountCircleFill } from "react-icons/ri"
import { IoSettings } from "react-icons/io5"
import { SiStackoverflow, SiInstagram } from "react-icons/si" 
import { AiOutlineGithub } from "react-icons/ai"


const NavigationBar = () => {
    const navDropdownTitle = (<><RiAccountCircleFill/> Account</>);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <Navbar bg="dark" variant="dark" expand="lg">

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Contactez moi</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <div><a target="_blank" className="text-dark text-decoration-none" href="https://www.instagram.com/prince2m3/"><SiInstagram/> Instagram</a></div>
                <div><a target="_blank" className="text-dark text-decoration-none" href="https://www.linkedin.com/in/boularaouiokba/"><FaLinkedin/> Linkedin</a></div>
                <div><a target="_blank" className="text-dark text-decoration-none" href="https://github.com/BeleganStartup"><AiOutlineGithub/> Github</a></div>
                <div><a target="_blank" className="text-dark text-decoration-none" href="https://stackoverflow.com/users/10273196/b-okba"><SiStackoverflow/> Stackoverflow</a></div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>

        <Container>
            <Navbar.Brand href="#home">Opticien V1.0</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link href="/" passHref>
                    <Nav.Link><VscHome/> Accueil</Nav.Link>
                </Link>
                <Link href="/patients" passHref>
                    <Nav.Link><VscAccount/> Patient</Nav.Link>
                </Link>
                <Link href="/factures" passHref>
                    <Nav.Link><FaFileInvoiceDollar/> Facture</Nav.Link>
                </Link>
                <Link href="/bons" passHref>
                    <Nav.Link><GiStabbedNote/> Bon</Nav.Link>
                </Link>
            </Nav>
            <Nav className="text-end">
                <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Connexion</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Se déconnecter</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleShow}>Contacter le développeur</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link"><IoSettings /> Paramètre</Nav.Link>
            </Nav>

            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavigationBar
