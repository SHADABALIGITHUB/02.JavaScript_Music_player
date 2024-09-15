

import { Alert } from 'react-bootstrap';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dasboard/Dashboard';
import Landing from './components/LandingPage/Landing';

const ContainerFun:React.FC=()=>{
  
  return(
    <div className='mt-5  container'>

      <Alert variant="danger" className='flex flex-col items-center justify-centre'>
    <Alert.Heading className="font-myfamily" style={{fontWeight:"bold"}}>Ops  404 ! You got an error!</Alert.Heading>
    <p className="font-family">Change the Url Not a Valid one </p>
      </Alert> 
  </div>
  );
}


function App() {

 
 

  return (


    <BrowserRouter>
      <Routes>
           <Route path="/" element={<Landing/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="*" element={<ContainerFun/>}/>
      </Routes>
    </BrowserRouter>

   
  )
}

export default App

