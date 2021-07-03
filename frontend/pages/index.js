// React Bootstrap
import Container from 'react-bootstrap/Container'
// Components
import Stats from '../src/components/Stats'
import FastButtons from '../src/components/FastButtons'

const index = () => {

  return (
    <Container>
      <Stats />
      <hr />
      <FastButtons />
    </Container>
  )
}

export default index
