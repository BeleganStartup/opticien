// React Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Components
import StatCard from './StatCard'
// Icons
import { ImStatsDots } from "react-icons/im"
import { FaFileInvoiceDollar } from "react-icons/fa"
import { GiStabbedNote } from "react-icons/gi"
import { RiAccountCircleFill } from "react-icons/ri"
import {ImAccessibility} from "react-icons/im"
import {BiStats} from "react-icons/bi"



const Stats = () => {
    return (
        <div>
            <h1 className="my-3"><BiStats /> Statistiques</h1>
            <Row className="text-center" >
                <Col md>
                    <StatCard
                        header={<><ImStatsDots/> Patients</>}
                        title={<>{<RiAccountCircleFill/>} 30</>}
                        content="Tous les temps"
                        bg="dark"
                        fg="white"
                    />
                </Col>

                <Col md>
                    <StatCard
                        header={<><ImStatsDots/> Visits</>}
                        title={<>{<ImAccessibility/>} 123</>}
                        content="Les 30 derniers jours"
                        bg="primary"
                        fg="white"
                    />
                </Col>

                <Col md>
                    <StatCard
                        header={<><ImStatsDots/> Factures</>}
                        title={<>{<FaFileInvoiceDollar/>} 325</>}
                        content="Les 30 derniers jours"
                        bg="danger"
                        fg="white"
                    />
                </Col>

                <Col md>
                    <StatCard
                        header={<><ImStatsDots/> Bons</>}
                        title={<>{<GiStabbedNote/>} 75</>}
                        content="Les 30 derniers jours"
                        bg="success"
                        fg="white"
                    />
                </Col>

            </Row>
        </div>
    )
}

export default Stats
