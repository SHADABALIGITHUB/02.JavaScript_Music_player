import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Landing:React.FC= () => {
    const navigate=useNavigate();
  return (

    <Container className='mt-20'>

        <Button onClick={()=>navigate("/dashboard")}> Start Journey As Guest </Button>

    </Container>
      
  )
}

export default Landing
