// React Bootstrap
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// React Icons
import { VscAccount } from "react-icons/vsc"
import { FaFileInvoiceDollar } from "react-icons/fa"
import { GiStabbedNote } from "react-icons/gi"
import { BsFillLightningFill } from "react-icons/bs"


const FastButtons = () => {
    return (
        <div>
            <h1 className="my-3"><BsFillLightningFill />Fast Access</h1>
            <Row className="mb-5">
                <Col md className="my-2">
                    <div className="d-grid gap-2">
                    <Button variant="primary" size="lg"><VscAccount/> Clients</Button>
                    </div>
                </Col>
                <Col md className="my-2">
                    <div className="d-grid gap-2">
                    <Button variant="primary" size="lg"><FaFileInvoiceDollar/> Factures</Button>
                    </div>
                </Col>
                <Col md className="my-2">
                    <div className="d-grid gap-2">
                    <Button variant="primary" size="lg"><GiStabbedNote/> Bons</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FastButtons
