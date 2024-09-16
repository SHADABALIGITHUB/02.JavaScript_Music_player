import React,{useRef,useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import NavbarComponent from './NavbarComponent'
import welcome from "../../assets/welcome.mp3"
import Sidebar from '../SideBar/Sidebar'
import Vite from '../CreateReactProject/Vite'



const Dashboard:React.FC = () => {
    const audioRef=useRef<HTMLAudioElement | null>(null)
      useEffect(()=>{
 
          if (audioRef.current) {
            // audioRef.current.play();
          }
       

      },[])

      




  return (
    <Container fluid className='relative'>
    <div className='absolute'>
        <audio ref={audioRef}> 
            <source src={welcome} type='audio/mp3' /> 
        </audio>

    </div>

  <div className='fixed top-0 left-0 w-screen'>
    <NavbarComponent />
  </div>

   
   <div className='mt-20'>
    <Row>

     <Col sm={2}>

     <Sidebar/>

     </Col>
     <Col>

      <p className='font-myfamily'>Both Create React App (CRA) and Vite are popular tools for setting up React applications, but they have different philosophies and technical approaches. Here’s a detailed comparison and explanation of each:</p>
 

      <Row>

      <Vite heading="How to Create a React project using vite" description="Steps to create" />
      <Vite heading="How to Create a React project using vite" description="Steps to create"/>
      
      

      </Row>

       </Col>
      </Row>
   
      
      </div>
  </Container>
  )
}

export default Dashboard
