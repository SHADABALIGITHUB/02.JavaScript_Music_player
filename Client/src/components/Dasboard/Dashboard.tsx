import React,{useRef,useEffect,useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import NavbarComponent from './NavbarComponent'
import welcome from "../../assets/welcome.mp3"
import Sidebar from '../SideBar/Sidebar'
import Vite from '../CreateReactProject/Vite'

import { CreateReactAppData } from '../../Data/Create'
import { ViteCreateData } from '../../Data/Create'

import { SidebarData } from '../../Data/Create'
 


const Dashboard:React.FC = () => {

 

  const [item,SetItem]=useState<number>(0);
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

  <div className='fixed z-20 top-0 left-0 w-screen'>
    <NavbarComponent />
  </div>

   
  <div className='mt-20'>
    <div className='flex '>

     <div className='w-32 overflow-hidden'>

     <Sidebar item={SidebarData} setitem={SetItem}/>

     </div>
     <Col className='flex-1 p-4'>

      <p className='font-myfamily'>Both Create React App (CRA) and Vite are popular tools for setting up React applications, but they have different philosophies and technical approaches. Here’s a detailed comparison and explanation of each:</p>
 
       <Row>

      <Col>

       

      {

        item===0?

      
      <Vite heading={ViteCreateData.heading} description={ViteCreateData.description}  steps={ViteCreateData.steps} />

       :

        item===1?

       <p className='font-myfamily font-bold text-sky-900'> Vite + typscript Simple Choice React and typescript instead of Javascript  </p>

      :

       item===2?

       
       <Vite heading={CreateReactAppData.heading} description={CreateReactAppData.description} steps={CreateReactAppData.steps} /> 
       :
       
       <h2> workiingon it </h2>

      }
      
   

      

      </Col>
      </Row>

     </Col>
    </div>
   
      
  </div>
  </Container>
  )
}

export default Dashboard
