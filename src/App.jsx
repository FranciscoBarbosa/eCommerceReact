import { useState } from 'react'
import { Button } from './Button.jsx'
import { StoreFront } from './StoreFront.jsx';
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleClickLogin(){
    setLoggedIn(!loggedIn);
  }
  return (
    <>
      <h2>Please Login</h2>
      {loggedIn && <Button className="btn btn-primary" onClick={handleClickLogin}>Login</Button>}
      {!loggedIn && 
        <StoreFront>
          <button className="btn btn-outline" onClick={handleClickLogin}>Logout</button>
        </StoreFront>
      }
    </>
  )
}

export default App
