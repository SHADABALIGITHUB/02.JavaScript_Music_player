import React, { Dispatch, SetStateAction } from "react";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { PagesData } from "../../Data/Create";

export type Prop = {
  heading: string,
  description: string,
  steps: string[],
  setPage: Dispatch<SetStateAction<number>>,
  setSubpage:Dispatch<SetStateAction<number>>

};

const Vite: React.FC<Prop> = ({ heading, description, steps,setPage,setSubpage }) => {
    const totalPages = Object.values(PagesData).length;
    
     const handlePage=(a:number)=>{
        if(a==1){
        setPage((prev) => (prev > 1 ? prev - 1 : prev));
        }else if(a==2){

        setPage(prev=>(prev<totalPages?prev+1:prev))
        }
        setSubpage(1);
     }
     
  return (
    <Col className="font-myfamily">
      <h6 className="font-bold text-sky-900 text-2xl">{heading}</h6>

      <p>{description}</p>

      <ul>
        {steps.map((list, index) => {
          if (index === 3 || index === 5 || index === 7)
            return (
              <img
                key={index}
                className="w-1/2 h-1/2 m-4"
                src={list}
                alt="NO image"
              />
            );

          return (
            <li key={index}>
              {" "}
              {index + 1} : {list}{" "}
            </li>
          );
        })}
      </ul>

      <div className="flex w-full justify-around mt-10 mb-5">
        <Button type="button" variant="outline-success">
          Mark Done{" "}
        </Button>
        <Button type="button" variant="outline-success"
        onClick={()=>{handlePage(1)}}
          >
          
          Prev 
        </Button>

        <Button type="button" variant="outline-success"
         onClick={()=>{handlePage(2)}}
         >
          Next
        </Button>
        <Button type="button" variant="outline-warning">
          Review Later
        </Button>
      </div>
    </Col>
  );
};

export default Vite;
