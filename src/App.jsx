import { Input } from './Input.jsx'
import { Link } from './Link.jsx'
import { Button } from './Button.jsx'
import { Container } from './Container.jsx'
import './App.css'

function App() {

  return (
    <>
    <Container className="app">
        <Link href="https://react-tutorial.app/" >React Tutorial</Link>
        <Button disabled={true}>Login</Button>
        <Input type="text" />
      </Container>
    </>
  )
}

export default App
