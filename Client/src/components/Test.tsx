import React from 'react';

// Define the types (if not already imported from a separate file)
interface Page {
  heading: string;
  description: string;
  steps: string[];
}

export interface PagesDataType {
  [sectionId: number]: {
    [pageId: number]: Page;
  };
}

import { PagesData } from '../Data/Create';

type PropType={
    page:number,
    item:number
}

console.log()

import Vite from './CreateReactProject/Vite';

const Test: React.FC<PropType>= ({page,item}) => {
  return (
    <div key={page+item}>

         {
           
            Object.keys(PagesData).map((sectionidstr)=>{
                const sectionId=Number(sectionidstr);
                if(sectionId===page)
                 return <div key={sectionId}>
                        {
                        
                        
                        Object.keys(PagesData[Number(sectionId)]).map((subsection)=>{
                             const subpageNum=PagesData[Number(sectionId)][Number(subsection)]
                               if(item===Number(subsection))  
                               return <Vite key={subsection} heading={subpageNum.heading} description={subpageNum.description}  steps={subpageNum.steps} />
                                 
                                    
                                 
                            
                          })
                      }

                

                </div>

                     })

         }


     
      {/* {page}
      {item} */}
    </div>
  );
};

export default Test;
