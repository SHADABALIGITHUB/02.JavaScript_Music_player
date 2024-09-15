import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Container } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className='mt-5 '>
      <div className='container mb-5'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>Change this and that and try again.</p>
        </Alert> 
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card ">
        <button className='w-25 m-4 btn btn-outline-success' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button variant="primary">Primary Button</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Container>
  )
}

export default App
