// React Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
// Icons
import { VscAccount, VscHome } from "react-icons/vsc"
import { FaFileInvoiceDollar } from "react-icons/fa"
import { GiStabbedNote } from "react-icons/gi"
import { RiAccountCircleFill } from "react-icons/ri"
import { IoSettings } from "react-icons/io5"


const NavigationBar = () => {
    const navDropdownTitle = (<><RiAccountCircleFill/> Account</>);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Opticien V1.0</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home"><VscHome/> Accueil</Nav.Link>
                <Nav.Link href="#link"><VscAccount/> Client</Nav.Link>
                <Nav.Link href="#link"><FaFileInvoiceDollar/> Facture</Nav.Link>
                <Nav.Link href="#link"><GiStabbedNote/> Bon</Nav.Link>
            </Nav>
            <Nav className="text-end">
                <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Connexion</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Se déconnecter</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Contacter le développeur</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link"><IoSettings /> Paramètre</Nav.Link>
            </Nav>

            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavigationBar
