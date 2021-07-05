// Next
import Link from 'next/link'
// React Icons
import {BsDisplay} from 'react-icons/bs'
import {RiEditLine} from 'react-icons/ri' 
import {AiOutlinePrinter, AiOutlineHistory} from 'react-icons/ai' 
import {TiDeleteOutline} from 'react-icons/ti'
// React Bootstrap
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'


const TableTest = ({headers, contents, mode}) => {
    const currentPage = 1
    const maxPage = 1
    const minPage = 20

    return (
        <>
        <Table bordered hover>
        <thead className="bg-dark text-white">
            <tr>
                {headers.map((header) => <th key={header.key}>{header.value}</th>)}
            </tr>
        </thead>
        <tbody>
            {contents.map((content, index) => (
                <tr key={content.id}>
                    <td>{index+1}</td>
                    <td>{content.name}</td>
                    <td>{content.visites}</td>
                    <td className="text-center">
                        {mode == "showMore" ? (
                            <Link href={`/patients/${content.id}/`} passHref><a className="mx-2 h4 text-dark" href="#"><AiOutlineHistory /></a></Link>
                        ) : (
                            <>
                                <Link href={`/patients/${content.id}/`} passHref><a className="mx-2 h4 text-danger" href="#"><BsDisplay /></a></Link>
                                <Link href={`/patients/${content.id}/print`} passHref><a className="mx-2 h4 text-dark" href="#"><AiOutlinePrinter /></a></Link>
                            </>
                        )}
                        <Link href={`/patients/${content.id}/edit`} passHref><a className="mx-2 h4 text-info" href="#"><RiEditLine /></a></Link>
                        <Link href={`/patients/${content.id}/delete`} passHref><a className="mx-2 h4 text-danger"><TiDeleteOutline /></a></Link>
                    </td>
                </tr>
            ))}
        </tbody>
        </Table>

        <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{maxPage}</Pagination.Item>
            <Pagination.Ellipsis disabled/>
            <Pagination.Item active>{currentPage}</Pagination.Item>
            <Pagination.Ellipsis disabled/>
            <Pagination.Item>{minPage}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
        </div>
        </>
    )
}

export default TableTest
