import React from 'react'
import { Col } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

export type Prop={
    // Key:string|number,
    heading:string,
    description:string,
    steps:string[],
   
}

const Vite:React.FC<Prop> = ({heading,description,steps}) => {
   
  return (
    <Col className='font-myfamily'> 

        <h6 className='font-bold text-sky-900 text-2xl'>{heading}</h6>

         <p>
             {description}
         </p>

         <ul>
            {
                steps.map((list,index)=>{

                    if(index===3 || index===5 || index===7) return <img key={index} className='w-1/2 h-1/2 m-4' src={list} alt="NO image"/>

                    return <li key={index}> {index+1} : {list} </li>


                })

            }

         </ul>

         <div className='flex w-full justify-around mt-10 mb-5'>
         <Button type="button" variant='outline-success' >Mark Done </Button>
         <Button  type='button' variant="outline-success" >Next</Button>
         <Button  type='button' variant="outline-warning" >Review Later</Button>
         </div>



    </Col>
  )
}

export default Vite
