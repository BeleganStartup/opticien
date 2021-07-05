// React
import {useState} from 'react'
// Next
import Link from 'next/link'
import { useRouter } from 'next/router'
// React Bootstrap
import Container from 'react-bootstrap/Container'
// React Icons
import {IoArrowBackCircleSharp} from 'react-icons/io5'
import {RiAddCircleFill} from 'react-icons/ri'
// Components
import MyTable from '../../src/components/MyTable'
import SearchForm from '../../src/components/SearchForm'


const index = () => {
    // Routing
    const router = useRouter()
    // Table Data
    const [headers, setHeaders] = useState([
        {key:"cell0", value:"ID"},
        {key:"cell1", value:"Nom et Prénom"},
        {key:"cell2", value:"N° Visites"},
        {key:"cell3", value:"Actions"},
    ])
    const [contents, setContents] = useState([])

    return (
        <Container>
            <h1 className="my-3">
                <Link href="/" passHref><a className="me-2 text-danger" ><IoArrowBackCircleSharp /></a></Link>
                Patients
            </h1>
            <h4 className="mb-4">
                <Link className="text-end" href="/partients/add/" passHref><a className="text-success"><RiAddCircleFill /> Ajouter un nouveau patient</a></Link>
            </h4>

            <SearchForm setContents={setContents}/>
            <MyTable headers={headers} setHeaders={setHeaders} contents={contents} mode="showMore" />
        </Container>
    )
}

export default index
