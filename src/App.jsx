import { Input } from './Input.jsx'
import { Link } from './Link.jsx'
import { Button } from './Button.jsx'
import { Container } from './Container.jsx'
import './App.css'

function App() {

  return (
    <>
      <Link href="https://react-tutorial.app/" >React Tutorial</Link>
      <Button >Login</Button>
      <Container />
      <Input type="text" />
    </>
  )
}

export default App
