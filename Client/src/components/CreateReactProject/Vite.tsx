import React from 'react'
import { Col } from 'react-bootstrap'

export type Prop={

    heading:string,
    description:string

}

const Vite:React.FC<Prop> = ({heading,description}) => {
  return (
    <Col className='font-myfamily'> 

        <h6 className='font-bold'>{heading}</h6>

         <p>
             {description}
         </p>


    </Col>
  )
}

export default Vite
