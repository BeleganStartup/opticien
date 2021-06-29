// React Bootstrap
import Card from 'react-bootstrap/Card'


const StatCard = ({header, title, content, bg="light", fg="dark"}) => {
    return (
        <Card 
            bg={bg}
            text={fg}
            style={{ height: '150px' }}
            className="mb-2 text-start"
        >
        <Card.Header>{header}</Card.Header>
        <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text> <small>{content}</small> </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default StatCard
