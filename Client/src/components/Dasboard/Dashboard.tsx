import React,{useRef,useEffect,useState} from 'react'
import { Container,Col } from 'react-bootstrap'
import NavbarComponent from './NavbarComponent'
import welcome from "../../assets/welcome.mp3"
// import Sidebar from '../SideBar/Sidebar'
import Test from '../Test'

 


const Dashboard:React.FC = () => {

 

  const [item,SetItem]=useState<number>(1);
  const [page,SetPage]=useState<number>(1);
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
    <NavbarComponent setitem={SetItem} page={page} />
  </div>

   
  <div className='mt-20'>

    

     
     <Col className='flex flex-col p-4'>

      <p className='font-myfamily'>Both Create React App (CRA) and Vite are popular tools for setting up React applications, but they have different philosophies and technical approaches. Here’s a detailed comparison and explanation of each:</p>
 
       

     
      <Test page={page} item={item} Setpage={SetPage} setSubpage={SetItem}/>


      
     

     
    
      
   

      

      </Col>
      
    </div>
   
      
 
  </Container>
  )
}

export default Dashboard
